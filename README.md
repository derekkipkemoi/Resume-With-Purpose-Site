# Resume With Purpose — Homepage

Next.js + TypeScript + Tailwind CSS homepage for ResumeWithPurpose.com and the Resumify product.

## Run in VS Code

Open this folder in VS Code, then in the integrated terminal run:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production check

```bash
npm run build
```

The static production site is generated in `out/`.

## Before Play Store submission

- Replace the "Google Play release in progress" state with the live Play Store link when available.
- Privacy Policy is available at `/privacy` and is linked from the homepage footer.
- Activate `support@resumewithpurpose.com` (or replace it everywhere with the final support address) before Play submission.
- Verify the final public domain in Google Play Console if requested.
- Keep website claims synchronized with features actually available in the released app.

## Static deployment

This verification homepage is configured as a static Next.js export. After `npm run build`, the deployable site is in `out/`. This keeps the first public website simple and avoids requiring a server runtime.

Next.js announced an upstream security update for October 14, 2026. Before any later server-rendered/authenticated features are enabled, update Next.js and React to the current patched stable releases.
