# Atta Muhammad — portfolio

A pre-rendered portfolio with an optional interactive Three.js project scene. Main content, links, documentation, and native skill disclosures work without JavaScript. JavaScript adds project selection, quick-look dialogs, scroll transitions, device preview controls and navigation enhancements.

## Build

Use Node.js 22 or newer. Run `npm ci --include=dev`, then `npm run build`. The build generates HTML and downloadable notes, copies the interaction script, and bundles Three.js locally. There are no runtime CDN or font requests. `python verify.py` checks generated links, anchors, metadata, schema and image alternatives.

## Update content

1. Edit `content.json` for biography, skills, journey, links and project case studies.
2. Run `npm run build` from this directory after installing the locked dependencies. This regenerates HTML, downloads, sitemap/robots and the interaction bundles in `dist/`.
3. Edit `src/components.mjs` for interactive markup, `src/interactions.js` for filters/dialogs/device controls, and `src/hero-3d.js` for the WebGL scene. Edit `dist/experience.css`, `dist/styles.css` or `dist/application-preview.css` for styling. Generated `dist/site.js` and `dist/hero-3d.js` are overwritten by the build.
4. Replace screenshots in `dist/assets/` when a project changes. Use only public/demo data in captures.
5. Preview `dist/` over a local HTTP server. Check desktop and mobile layout, links and current limitations before publishing.
6. Commit your changes to the `main` branch of https://github.com/AttaMuhammad-dev/portfolio. Vercel installs the locked dependencies, builds `node build.mjs` and publishes `dist/`. Confirm the deployment succeeds before sharing new links. The existing Sites identity is retained for the source mirror; never commit authentication tokens or private runtime settings.

## Interaction and accessibility

- Hero: select a project, drag horizontally or use the rotation buttons/arrow keys; Home or Reset restores the view. Its screenshots come from the content data. TechNova uses browser captures in illustrative device frames.
- Project quick look: opens a native modal with live/source/case-study links. Escape closes it; focus returns to the invoking button. Previous/next controls cycle the four projects.
- TechNova case study: separate or rotate the three device previews and focus an individual form factor. Reset restores all devices.
- Motion: the header control persists a local preference. The initial setting respects reduced motion. Content is visible if scripts or WebGL are unavailable. The WebGL loop stops outside the viewport or when the tab is hidden, and idle animation stops when motion is paused. Pixel ratio is capped at 1.65.
- Maintain existing project, education, Android/iOS testing and integration-status caveats when changing the presentation.

## Publishing identity

- Project ID: `appgprj_6ad323a087448191acc22f531b2d2fa6`
- Primary public URL: https://atta-muhammad-portfolio.vercel.app
- Sites mirror: https://atta-muhammad-portfolio.magic-wasp-3272.chatgpt.site (publisher succeeded; anonymous access returned Cloudflare 1010 in launch checks)
- Static output: `dist/`

If the public origin changes, update `origin` in `content.json` and rebuild so canonical URLs, social metadata and sitemap agree.

## Accuracy

Education completion and diploma issuance are separate. Update the diploma wording only after it is issued. Record real checks and current integration status; do not claim all project features were verified because a deployment succeeded.

The source repositories retain their existing ownership and attribution. Some prepared deployment changes may be newer than the original public snapshot. No analytics, contact form, tracking, visitor accounts or credentials are required for this portfolio.

## Content tips

Update `updated` (YYYY-MM-DD) when publishing a substantive revision. Footer, last-updated text and search metadata use that date. Existing launch notes and verification statements are historical; change them only after doing the corresponding work. To add a project, copy one complete project object, give it a unique slug and number, provide a real screenshot, and review the generated case study. Do not publish personal visitor data or private credentials in screenshots or notes.

## Updating the Android download

TechNova’s `androidApk` object in `content.json` holds the published GitHub release asset URL, version, size, Android minimum and SHA-256. Upload and verify a real replacement asset before changing this object. Rebuild the portfolio afterward. The APK is hosted as a release asset, outside the portfolio Git history and Sites archive. Keep native testing claims separate from illustrative browser device frames.
