# EduPredict

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A Python and Flask educational analytics project with role-based dashboards, data workflows and synthetic prediction examples.

- Live demo: https://edupredict-demo.vercel.app
- Source: https://github.com/Jokerisstupid/EduPredict
- Case study: https://atta-muhammad-portfolio.vercel.app/projects/edupredict/

## The idea

Educational records can be difficult to turn into clear summaries. This learning project explores data preparation, role-based views and predictive examples using synthetic student data.

## Features

- Student registration and role-based dashboards
- Educational data and reporting workflows in the source
- Synthetic models for risk, grade and demand examples
- Staff-only analytics and prediction endpoints
- Personal profile management for registered users

## Architecture

1. Server-rendered Flask interface
2. Authenticated routes and role checks
3. Dedicated MongoDB Atlas demo database
4. pandas / scikit-learn model workflows

## My work and learning

Launch work moved secrets to environment variables, removed automatic default accounts, restricted staff functions and rebuilt saved models with the current pinned library version. Runtime files are kept outside public static storage.

## Try the demo

1. Browse the public project pages and architecture overview.
2. Register with invented sample details and sign in to the student area.
3. Update your sample profile. Read the source for restricted staff workflows.

## Setup overview

1. Install the pinned Python dependencies and read the repository setup notes.
2. Set MONGO_URI, DB_NAME and a strong SECRET_KEY privately. Keep email disabled until configured.
3. Use synthetic datasets and deliberately provision any staff roles; public registration is student-only.
4. Deploy the Flask entrypoint with the provided Vercel configuration. Use durable storage before relying on uploaded files.

Use the repository README for commands. Prepared deployment source may be newer than the original public snapshot. Never commit environment credentials.

## Verification

Live synthetic registration, student login, dashboard loading, profile saving and reading, and logout passed on 17 October 2026. A student request to the staff prediction endpoint was blocked. Five isolated deployment checks passed locally.

## Current limitations

- Use synthetic data only. Model demonstrations are not evidence of real-world student prediction accuracy.
- The risk score includes a heuristic; it is not a calibrated dropout probability.
- Public registration creates student accounts. Staff analytics are restricted; no public administrator password is supplied.
- Email delivery is disabled. Uploaded files and generated reports on the free runtime are temporary.

## Next improvements

- Prepare a safe, read-only showcase for staff analytics.
- Review remaining reporting, assignment and upload workflows.
