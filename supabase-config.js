-- ============================================================
--  権限の明示付与（案件が表示されない場合に実行）
--  プロジェクト作成時に「Automatically expose new tables」を
--  オフにしていた場合などに必要です。何度実行しても安全です。
-- ============================================================

grant usage on schema public to anon, authenticated;

-- 公開ページ（anon）：読み取り
grant select on public.event_jobs to anon;

-- 管理画面（ログイン済み）：読み書き
grant select, insert, update, delete on public.event_jobs to authenticated;

-- identity（自動採番）列のための権限
grant usage, select on all sequences in schema public to anon, authenticated;

-- 念のため RLS ポリシーを再確認（既にあれば作り直し）
drop policy if exists "public can read jobs" on public.event_jobs;
create policy "public can read jobs"
  on public.event_jobs for select using (true);
