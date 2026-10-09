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
- Create/activate `privacy@resumewithpurpose.com` before publishing so the privacy contact is functional.
- Add a support/contact page or support email.
- Verify the final public domain in Google Play Console if requested.
- Keep website claims synchronized with features actually available in the released app.

## Static deployment

This verification homepage is configured as a static Next.js export. After `npm run build`, the deployable site is in `out/`. This keeps the first public website simple and avoids requiring a server runtime.

Next.js announced an upstream security update for October 14, 2026. Before any later server-rendered/authenticated features are enabled, update Next.js and React to the current patched stable releases.


## Data deletion request

The Google Play data deletion resource is available at `/data-deletion`. It provides a Resumify-branded request form and direct privacy contact pathway for users who want personal data deleted.
