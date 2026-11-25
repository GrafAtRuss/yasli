#!/bin/sh
# Телефон и телевизор. В пакеты не входит разрешение ставить обновления самому:
# так их принимает RuStore и магазин YaOS.
set -eu
ROOT=/workspace
SDK="$ROOT/.android-sdk"
BT="$SDK/build-tools/35.0.0"
JAR="$SDK/platforms/android-35/android.jar"
VER=$(sed -n 's/.*APP_VERSION = "\([^"]*\)".*/\1/p' "$ROOT/src/game/version.ts" | head -1)
CODE=$(sed -n 's/.*APP_VERSION_CODE = \([0-9]*\).*/\1/p' "$ROOT/src/game/version.ts" | head -1)
OUT="$ROOT/dist"
mkdir -p "$OUT" "$ROOT/android/phone/res/drawable" "$ROOT/android/tv/res/drawable" "$ROOT/store"

python3 - << 'PY'
from PIL import Image, ImageDraw
def star(draw, cx, cy, r, fill):
    pts = []
    for i in range(10):
        ang = -3.14159 / 2 + i * 3.14159 / 5
        rad = r if i % 2 == 0 else r * 0.42
        pts.append((cx + rad * __import__("math").cos(ang), cy + rad * __import__("math").sin(ang)))
    draw.polygon(pts, fill=fill)
def icon(size, path):
    img = Image.new("RGB", (size, size), "#0e1c33")
    draw = ImageDraw.Draw(img)
    pad = int(size * 0.08)
    draw.rounded_rectangle((pad, pad, size - pad, size - pad), radius=int(size * 0.18), fill="#173055")
    star(draw, size * 0.5, size * 0.46, size * 0.22, "#d4b06a")
    img.save(path, "PNG")
icon(192, "/workspace/android/phone/res/drawable/ic_launcher.png")
icon(192, "/workspace/android/tv/res/drawable/ic_launcher.png")
icon(512, "/workspace/store/icon-512.png")
banner = Image.new("RGB", (320, 180), "#0e1c33")
b = ImageDraw.Draw(banner)
b.rectangle((0, 150, 320, 180), fill="#d4b06a")
star(b, 64, 78, 28, "#d4b06a")
banner.save("/workspace/android/tv/res/drawable/tv_banner.png", "PNG")
banner.save("/workspace/store/tv-banner.png", "PNG")
PY

if [ ! -f "$ROOT/android/yasli.keystore" ]; then
  keytool -genkeypair -keystore "$ROOT/android/yasli.keystore" -alias yasli \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -storepass Yasli-Rozhdestvo-2026 -keypass Yasli-Rozhdestvo-2026 \
    -dname "CN=Yasli, O=Ermakov Alexey Sergeevich, C=RU"
fi

cd "$ROOT"
npx vite build --config vite.android.config.ts
sed 's#\.\./assets/#./assets/#g' "$ROOT/android/www/android/index.html" > "$ROOT/android/www/index.html"
rm -rf "$ROOT/android/www/android"
rm -rf "$ROOT/android/www/art"
mkdir -p "$ROOT/android/www/art"
cp "$ROOT/public/art/"*.jpg "$ROOT/android/www/art/"

build_one() {
  FORM="$1"
  APP="$ROOT/android/$FORM"
  PKG="ru.yasli.$FORM"
  WORK=/tmp/yasli-$FORM-apk
  rm -rf "$WORK"
  mkdir -p "$WORK/gen" "$WORK/classes" "$WORK/src"
  sed -e "s/package ru.yasli.shell;/package $PKG;/" \
      -e "s/static final String FORM = \"phone\";/static final String FORM = \"$FORM\";/" \
      -e "s#YasliTV/1.1.0#YasliTV/$VER#" \
      -e "s#YasliPhone/1.1.0#YasliPhone/$VER#" \
      "$ROOT/android/java/MainActivity.java" > "$WORK/src/MainActivity.java"
  sed "s/package ru.yasli.shell;/package $PKG;/" "$ROOT/android/java/SearchProvider.java" > "$WORK/src/SearchProvider.java"
  MAN="$WORK/AndroidManifest.xml"
  sed -e "s/android:versionCode=\"110\"/android:versionCode=\"$CODE\"/" \
      -e "s/android:versionName=\"1.1.0\"/android:versionName=\"$VER\"/" \
      "$APP/AndroidManifest.xml" > "$MAN"
  "$BT/aapt2" compile --dir "$APP/res" -o "$WORK/res.zip"
  "$BT/aapt2" link -I "$JAR" --manifest "$MAN" --java "$WORK/gen" \
    --min-sdk-version 24 --target-sdk-version 35 \
    --version-code "$CODE" --version-name "$VER" \
    -o "$WORK/base.apk" "$WORK/res.zip"
  find "$WORK/src" "$WORK/gen" -name '*.java' > "$WORK/sources.txt"
  javac --release 8 -encoding UTF-8 -classpath "$JAR" -d "$WORK/classes" @"$WORK/sources.txt"
  "$BT/d8" --min-api 24 --lib "$JAR" --output "$WORK" "$WORK/classes"/*/*/*/*.class
  rm -rf "$WORK/pkg"
  mkdir -p "$WORK/pkg"
  unzip -q -o "$WORK/base.apk" -d "$WORK/pkg"
  cp "$WORK/classes.dex" "$WORK/pkg/"
  mkdir -p "$WORK/pkg/assets"
  cp -a "$ROOT/android/www/." "$WORK/pkg/assets/"
  python3 - "$WORK" << 'PY'
import os, sys, zipfile
root = sys.argv[1] + "/pkg"
out = sys.argv[1] + "/unsigned.apk"
stored = {"resources.arsc", "AndroidManifest.xml"}
with zipfile.ZipFile(out, "w") as z:
    for dirpath, _, files in os.walk(root):
        for name in sorted(files):
            full = os.path.join(dirpath, name)
            rel = os.path.relpath(full, root).replace(os.sep, "/")
            info = zipfile.ZipInfo(rel)
            info.compress_type = zipfile.ZIP_STORED if rel in stored else zipfile.ZIP_DEFLATED
            info.flag_bits = 0
            info.create_system = 0
            info.external_attr = 0
            with open(full, "rb") as fh:
                z.writestr(info, fh.read())
print("zipped", os.path.getsize(out))
PY
  "$BT/zipalign" -f -p 4 "$WORK/unsigned.apk" "$WORK/aligned.apk"
  if [ "$FORM" = "phone" ]; then
    NAME="Yasli-Phone-$VER.apk"
  else
    NAME="Yasli-TV-$VER.apk"
  fi
  "$BT/apksigner" sign \
    --ks "$ROOT/android/yasli.keystore" \
    --ks-key-alias yasli \
    --ks-pass pass:Yasli-Rozhdestvo-2026 \
    --key-pass pass:Yasli-Rozhdestvo-2026 \
    --v1-signing-enabled true \
    --v2-signing-enabled true \
    --v3-signing-enabled true \
    --v1-signer-name CERT \
    --out "$OUT/$NAME" \
    "$WORK/aligned.apk"
  "$BT/apksigner" verify --verbose --min-sdk-version 24 "$OUT/$NAME" | head -14
  "$BT/aapt" dump badging "$OUT/$NAME" | head -8
  echo "permissions:"
  "$BT/aapt" dump permissions "$OUT/$NAME"
  ls -lh "$OUT/$NAME"
}

build_one phone
build_one tv
echo done
