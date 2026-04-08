create table if not exists public.partner_inquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  organization text not null,
  email text not null,
  role text not null,
  why text not null
);

alter table public.partner_inquiries enable row level security;

drop policy if exists "Allow anonymous partner inquiry inserts"
on public.partner_inquiries;

create policy "Allow anonymous partner inquiry inserts"
on public.partner_inquiries
for insert
to anon, authenticated
with check (
  length(trim(name)) > 0 and
  length(trim(organization)) > 0 and
  length(trim(email)) > 0 and
  length(trim(role)) > 0 and
  length(trim(why)) > 0
);

grant usage on schema public to anon, authenticated;
grant insert on table public.partner_inquiries to anon, authenticated;
grant usage, select on sequence public.partner_inquiries_id_seq to anon, authenticated;
