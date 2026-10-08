# Ezra Real Estate Solutions Website

Production-ready Next.js starter for Ezra Real Estate Solutions, Inc., designed for Vercel.

## Run locally

1. Install Node.js 20+.
2. `.env.local` is already populated with Ezra's launch email, phone number, and domain. Update it later if any contact details change.
3. Run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. In Vercel project settings, add:
   - `NEXT_PUBLIC_EMAIL` = `info@ezrarealestatesolutions.com`
   - `NEXT_PUBLIC_PHONE` = `520-399-6570`
   - `NEXT_PUBLIC_DOMAIN` = `https://ezrarealestatesolutions.com`
5. Click **Deploy**.
6. In Vercel, open **Settings → Domains** and add `ezrarealestatesolutions.com` (and optionally `www.ezrarealestatesolutions.com`).
7. Follow Vercel's DNS instructions at your domain registrar.

## Before launch

Already configured:
- `info@ezrarealestatesolutions.com`
- `520-399-6570`
- `ezrarealestatesolutions.com`
- individual steward emails for Leslie, Tanya, Ken, and Jordan

Before launch, confirm:
- service area language if you want more specificity than Arizona
- any final legal/privacy text reviewed by your attorney

The contact form currently uses a `mailto:` action so it works without a form service. For a more polished production form, connect Formspree, Resend, or a Vercel server action before launch.


## Team email addresses

- Leslie: leslie@ezrarealestatesolutions.com
- Tanya: tanya@ezrarealestatesolutions.com
- Ken: ken@ezrarealestatesolutions.com
- Jordan: jordan@ezrarealestatesolutions.com
