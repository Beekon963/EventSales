/* ============================================================
   Supabase 接続設定（このファイルだけ書き換えればOK）
   ------------------------------------------------------------
   Supabase ダッシュボード → Project Settings → API（Data API）
   ・Project URL を SUPABASE_URL に
   ・「Project API keys」の anon public（※ eyJ... で始まる legacy 形式）を
     SUPABASE_ANON_KEY に貼り付けてください。
   ※ sb_publishable_... の新形式キーは使わないでください（ログイン不可になります）
   ============================================================ */
window.SUPABASE_URL = 'https://YOUR-PROJECT-ref.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOi...ここにanon publicキー...';
