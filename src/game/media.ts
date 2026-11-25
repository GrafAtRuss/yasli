/** Картинки лежат в public/art. На телефоне база «/», в APK — «./». */
export function media(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/") return path;
  return base.replace(/\/$/, "") + path;
}
