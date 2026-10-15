# SmartPay marketing site

One-page marketing site for SmartPay (school fees paid from an SMS). Next.js 16 + Tailwind v4, statically rendered. Separate from the SmartPay app (`../smartpay`), the same way `academia-hub-marketing` is separate from Academia Hub.

## Run locally

```
npm install
npm run dev      # http://localhost:3101
```

For the demo form to work locally, run the SmartPay backend on port 5100 with `ADDITIONAL_ORIGINS=http://localhost:3101`, and create `.env.local` here:

```
NEXT_PUBLIC_API_ORIGIN=http://localhost:5100
```

## Where things are

- `app/page.js`: the page, section by section.
- `components/Sections.js`: most of the copy. Every claim maps to a shipped SmartPay feature. Check `../smartpay/DESIGN.md` before adding one.
- `lib/site.js`: **contact details (WhatsApp, phone, email) and the app login link. Change them here only.**
- `components/DemoForm.js`: posts to the backend's public `POST /api/demo-requests` through the `/api` rewrite in `next.config.mjs`.

## Deploying

1. Set the environment variable `NEXT_PUBLIC_API_ORIGIN` to the SmartPay backend address, e.g. `https://smartpay-xnu4.onrender.com`. Leave off any trailing slash and `/api`.
2. Add this site's address to the backend's `ADDITIONAL_ORIGINS` on Render, comma-separated with any existing entries. The proxy forwards the browser's Origin header, so without this the form fails with "Not allowed by CORS".
3. Optional: set `DEMO_NOTIFY_EMAIL` on the backend to get an email for each demo request.
4. Before deploying the backend code, run `node scripts/migrate-demo-requests.js` against the production database.
