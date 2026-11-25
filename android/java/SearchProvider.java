package ru.yasli.shell;

import android.app.SearchManager;
import android.content.ContentProvider;
import android.content.ContentValues;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;

/** Подсказки для Алисы и поиска телевизора: кнопки игры по их названиям. */
public class SearchProvider extends ContentProvider {
    private static final String[] COLUMNS = new String[] {
        "_id",
        SearchManager.SUGGEST_COLUMN_TEXT_1,
        SearchManager.SUGGEST_COLUMN_TEXT_2,
        SearchManager.SUGGEST_COLUMN_INTENT_DATA
    };

    @Override
    public boolean onCreate() {
        return true;
    }

    @Override
    public Cursor query(Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder) {
        String query = "";
        if (uri != null && uri.getLastPathSegment() != null && !"search_suggest_query".equals(uri.getLastPathSegment())) {
            query = uri.getLastPathSegment().toLowerCase();
        }
        MatrixCursor cursor = new MatrixCursor(COLUMNS);
        add(cursor, 1, "Семейный путь", "Играть вместе", "yasli://open/family", query);
        add(cursor, 2, "Играть одному", "Один игрок", "yasli://open/solo", query);
        add(cursor, 3, "Как играть", "Правила вечера", "yasli://open/how", query);
        add(cursor, 4, "Главная", "Ясли", "yasli://open/home", query);
        return cursor;
    }

    private void add(MatrixCursor cursor, int id, String title, String text, String data, String query) {
        String blob = (title + " " + text).toLowerCase();
        if (query.length() > 0 && blob.indexOf(query) < 0 && !broad(query)) return;
        cursor.addRow(new Object[] {Integer.valueOf(id), title, text, data});
    }

    private boolean broad(String query) {
        return query.indexOf("ясл") >= 0 || query.indexOf("игр") >= 0 || query.indexOf("рождеств") >= 0 || query.indexOf("семь") >= 0;
    }

    @Override
    public String getType(Uri uri) {
        return "vnd.android.cursor.dir/vnd.yasli.search";
    }

    @Override
    public Uri insert(Uri uri, ContentValues values) {
        return null;
    }

    @Override
    public int delete(Uri uri, String selection, String[] selectionArgs) {
        return 0;
    }

    @Override
    public int update(Uri uri, ContentValues values, String selection, String[] selectionArgs) {
        return 0;
    }
}
