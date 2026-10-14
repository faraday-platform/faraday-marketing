create table public.waitlist (
  id            uuid primary key default gen_random_uuid(),
  email         text not null,
  product       text not null default 'any'
                check (product in ('facp','pse','studio','beacon','any')),
  company       text,
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  utm_term      text,
  utm_content   text,
  referrer      text,
  landing_path  text,
  created_at    timestamptz not null default now()
);

-- INTENTIONAL: uniqueness is per (email, product), not per email.
-- A person who joins for PSE may later join for Beacon; both are recorded.
create unique index waitlist_email_product_key
  on public.waitlist (lower(email), product);

alter table public.waitlist enable row level security;
-- no policies: service-role writes only, never client-side
