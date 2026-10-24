# Shape Up

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A MERN fitness project with personal daily logs, workout tools, nutrition features and calculators in one application.

- Live demo: https://shape-up-demo-kappa.vercel.app
- Source: https://github.com/AttaMuhammad-dev/shape-up-mern
- Case study: https://atta-muhammad-portfolio.vercel.app/projects/shape-up/

## The idea

Fitness information and daily progress are easy to scatter across different tools. Shape Up brings personal logs, exercise browsing and basic calculators into one learning project.

## Features

- Account registration, login and personal profile
- Daily logs for water, steps, calories and weight
- Workout database and fitness calculators
- Nutrition-related tools and progress views
- AI coaching with conversation context, bounded retries and clear provider-error states
- Full account data export and password-confirmed permanent account deletion
- Authenticated support email, shared theme and device reminder preferences
- Saved reminder sound selection, bounded repeat playback and Stop / replay controls

## Architecture

1. React + Redux Toolkit frontend
2. Same-origin Express API on Vercel
3. Cookie-based authentication
4. Dedicated MongoDB Atlas demo database

## My work and learning

Built as a full-stack learning project. Launch work includes a serverless entrypoint, reusable database connections, request limits, deployment configuration and a visible demo notice. The professional repository retains the original history and attribution.

## Try the demo

1. Browse workouts or try a calculator without signing in.
2. Create an account using invented sample details.
3. Save a daily water or steps log and check that it appears again.

## Setup overview

1. Install backend and frontend dependencies using the repository instructions.
2. Configure MONGO_URI and a strong JWT_SECRET privately; use a dedicated demo database.
3. Configure GEMINI_API_KEY privately and set AI_ENABLED=true after testing. Optional support email uses private EMAIL_USER and EMAIL_PASS settings; enable EMAIL_ENABLED only after delivery verification.
4. Build the frontend and deploy the repository’s Vercel configuration.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

24 October 2026: 27 backend and 14 frontend tests passed again. Seven fresh live account/log/access checks passed after redeployment, and a live AI response succeeded. The 57 defined synthetic workflow checks and owner-confirmed support inbox delivery from 20–21 October remain recorded in the release history; those 57 were not all rerun on this date. On 24 October, the owner confirmed motion tracking and reminders on their device. A follow-up sound fix connected the chosen library track to real alerts, added bounded repeating playback and repaired the Alerts cold-load state; focused frontend checks cover selection, repeat, dismissal and browser-block recovery.

## Current limitations

- AI coaching is enabled. Free provider quotas and outages can still interrupt generation; the interface reports service errors clearly.
- Support email is enabled for signed-in users and rate limited. Use invented sample details when exploring.
- Fitness and nutrition outputs are project demonstrations, not individual medical guidance.
- Browser reminders require the app to remain open. Motion step counting is an estimate on supported phones; manual entry is available.

## Next improvements

- Keep provider quotas, dependencies and data backups maintained.
- Review genuine user feedback and extend features without overstating demo capabilities.
