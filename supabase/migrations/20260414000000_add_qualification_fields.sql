-- Add qualification fields to partner_inquiries
ALTER TABLE public.partner_inquiries
  ADD COLUMN units text,
  ADD COLUMN ai_maturity text;
