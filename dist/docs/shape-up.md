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
3. Configure GEMINI_API_KEY privately on the server and set AI_ENABLED=true after testing. Keep EMAIL_ENABLED=false until email delivery is configured and tested.
4. Build the frontend and deploy the repository’s Vercel configuration.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

Checked on 20 October 2026: 17 backend tests, 8 frontend tests and the production build passed. Twenty-one live synthetic workflow checks covered accounts, profile saving, logs, workouts, reminders and meal plans. Live AI coaching and follow-up responses passed, with desktop and mobile chat layouts checked.

## Current limitations

- AI coaching is enabled. Free provider quotas and outages can still interrupt generation; the interface reports service errors clearly.
- Email delivery is disabled. Use invented sample details when exploring.
- Fitness and nutrition outputs are project demonstrations, not individual medical guidance.
- Account deletion is unavailable in this demo.

## Next improvements

- Review remaining workflows and keep dependencies maintained.
- Evaluate email delivery separately before enabling it.
