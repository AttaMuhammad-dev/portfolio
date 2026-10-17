# Atta Muhammad — portfolio

A lightweight, pre-rendered portfolio. Every main page works without JavaScript; JavaScript only enhances the project filters and mobile navigation.

## Update content

1. Edit `content.json` for biography, skills, journey, links and project case studies.
2. Run `node build.mjs` from this directory. This regenerates the HTML pages, project note downloads, sitemap and robots file in `dist/`.
3. Edit `dist/styles.css` or `dist/site.js` for visual or interaction changes. Those files are preserved by the content build.
4. Replace screenshots in `dist/assets/` when a project changes. Use only public/demo data in captures.
5. Preview `dist/` over a local HTTP server. Check desktop and mobile layout, links and current limitations before publishing.
6. Commit your changes to the `main` branch of https://github.com/AttaMuhammad-dev/portfolio. The configured Vercel project builds `node build.mjs` and publishes `dist/`. Confirm the deployment succeeds before sharing new links. The existing Sites identity is retained for the source mirror; never commit authentication tokens or private runtime settings.

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
