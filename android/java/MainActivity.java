package ru.yasli.shell;

import android.Manifest;
import android.app.Activity;
import android.app.SearchManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends Activity {
    static final String FORM = "phone";

    private WebView web;
    private boolean pageReady;
    private String pendingOpen = "";
    private String pendingVoice = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if ("tv".equals(FORM)) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            getWindow().getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                            | View.SYSTEM_UI_FLAG_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
        }
        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(14, 28, 51));
        web = new WebView(this);
        root.addView(web, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        WebSettings settings = web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(false);
        String mark = "tv".equals(FORM) ? " YasliTV/1.1.0" : " YasliPhone/1.1.0";
        settings.setUserAgentString(settings.getUserAgentString() + mark);
        web.addJavascriptInterface(new Bridge(), "YasliNative");
        web.setWebViewClient(new Client());
        web.setFocusable(true);
        web.setFocusableInTouchMode(!"tv".equals(FORM));
        web.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_YES);
        web.requestFocus();
        readIntent(getIntent());
        web.loadUrl("https://appassets.androidplatform.net/assets/index.html");
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        readIntent(intent);
        applyPending();
    }

    @Override
    public void onBackPressed() {
        if (web != null) web.evaluateJavascript("if(window.yasliBack)window.yasliBack()", null);
        else super.onBackPressed();
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getAction() == KeyEvent.ACTION_DOWN && event.getKeyCode() == KeyEvent.KEYCODE_BACK) {
            onBackPressed();
            return true;
        }
        return super.dispatchKeyEvent(event);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] results) {
        super.onRequestPermissionsResult(requestCode, permissions, results);
        if (requestCode == 7 && results.length > 0 && results[0] == PackageManager.PERMISSION_GRANTED) startListen();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode != 8 || web == null) return;
        String said = "";
        if (resultCode == RESULT_OK && data != null) {
            ArrayList<String> list = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            if (list != null && !list.isEmpty()) said = list.get(0);
        }
        web.evaluateJavascript("if(window.yasliHeard)window.yasliHeard(" + js(said) + ")", null);
    }

    private void readIntent(Intent intent) {
        if (intent == null) return;
        String action = intent.getAction() == null ? "" : intent.getAction();
        if (Intent.ACTION_SEARCH.equals(action) || "android.media.action.MEDIA_PLAY_FROM_SEARCH".equals(action)) {
            String query = intent.getStringExtra(SearchManager.QUERY);
            pendingVoice = query == null ? "" : query;
            return;
        }
        Uri data = intent.getData();
        if (data != null && "yasli".equals(data.getScheme())) {
            String last = data.getLastPathSegment();
            if (last != null) pendingOpen = last;
        }
    }

    private void applyPending() {
        if (!pageReady || web == null) return;
        if (pendingOpen.length() > 0) {
            String screen = pendingOpen;
            pendingOpen = "";
            web.evaluateJavascript("if(window.yasliOpen)window.yasliOpen(" + js(screen) + ")", null);
        }
        if (pendingVoice.length() > 0) {
            String voice = pendingVoice;
            pendingVoice = "";
            web.evaluateJavascript("if(window.yasliVoice)window.yasliVoice(" + js(voice) + ")", null);
        }
    }

    private void startListen() {
        if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[] {Manifest.permission.RECORD_AUDIO}, 7);
            return;
        }
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "ru-RU");
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Скажите имя");
        try {
            startActivityForResult(intent, 8);
        } catch (Exception ignored) {
            if (web != null) web.evaluateJavascript("if(window.yasliHeard)window.yasliHeard(\"\")", null);
        }
    }

    private static String js(String value) {
        if (value == null) value = "";
        return "\"" + value.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", " ") + "\"";
    }

    private WebResourceResponse asset(String path) {
        if (path.contains("..")) return null;
        try {
            InputStream in = getAssets().open(path);
            Map<String, String> headers = new HashMap<String, String>();
            headers.put("Access-Control-Allow-Origin", "https://appassets.androidplatform.net");
            String mime = "application/octet-stream";
            String lower = path.toLowerCase();
            if (lower.endsWith(".html")) mime = "text/html";
            else if (lower.endsWith(".js")) mime = "text/javascript";
            else if (lower.endsWith(".css")) mime = "text/css";
            else if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) mime = "image/jpeg";
            else if (lower.endsWith(".png")) mime = "image/png";
            else if (lower.endsWith(".svg")) mime = "image/svg+xml";
            else if (lower.endsWith(".woff2")) mime = "font/woff2";
            else if (lower.endsWith(".json")) mime = "application/json";
            return new WebResourceResponse(mime, null, 200, "OK", headers, in);
        } catch (Exception e) {
            return null;
        }
    }

    private final class Client extends WebViewClient {
        @Override
        public void onPageFinished(WebView view, String url) {
            pageReady = true;
            applyPending();
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            if (request == null || request.getUrl() == null) return null;
            if (!"appassets.androidplatform.net".equals(request.getUrl().getHost())) return null;
            String path = request.getUrl().getPath();
            if (path == null) return null;
            if (path.startsWith("/assets/")) path = path.substring("/assets/".length());
            else if (path.startsWith("/")) path = path.substring(1);
            if (path.length() == 0) path = "index.html";
            return asset(path);
        }
    }

    public class Bridge {
        @JavascriptInterface
        public void listen() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    startListen();
                }
            });
        }

        @JavascriptInterface
        public void exitApp() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    finish();
                }
            });
        }

        @JavascriptInterface
        public String form() {
            return FORM;
        }
    }
}
