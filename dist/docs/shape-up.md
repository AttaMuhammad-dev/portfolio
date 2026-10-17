# Shape Up

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A MERN fitness project with personal daily logs, workout tools, nutrition features and calculators in one application.

- Live demo: https://shape-up-demo-kappa.vercel.app
- Source: https://github.com/AttaMuhammad-dev/shape-up-mern
- Case study: https://atta-muhammad-portfolio.magic-wasp-3272.chatgpt.site/projects/shape-up/

## The idea

Fitness information and daily progress are easy to scatter across different tools. Shape Up brings personal logs, exercise browsing and basic calculators into one learning project.

## Features

- Account registration, login and personal profile
- Daily logs for water, steps, calories and weight
- Workout database and fitness calculators
- Nutrition-related tools and progress views
- An AI coaching integration with a clear unavailable-service state

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
3. Keep AI_ENABLED and EMAIL_ENABLED off unless their external services are configured and tested.
4. Build the frontend and deploy the repository’s Vercel configuration.

Use the repository README for commands. Prepared deployment source may be newer than the original public snapshot. Never commit environment credentials.

## Verification

Live synthetic registration, authenticated profile access, saving and reading a personal log, logout and login passed on 17 October 2026. An anonymous profile request was rejected. The frontend build and three deployment checks also passed.

## Current limitations

- AI service/API unavailable in this demo. Provider integration updates are planned separately.
- Email delivery is disabled. Use invented sample details when exploring.
- Fitness and nutrition outputs are project demonstrations, not individual medical guidance.

## Next improvements

- Restore and re-test the external AI integration.
- Review remaining workflows and refine the interface.
