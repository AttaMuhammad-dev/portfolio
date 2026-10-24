# EduPredict

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A Python and Flask educational analytics project with role-based dashboards, data workflows and synthetic prediction examples.

- Live demo: https://edupredict-demo.vercel.app
- Source: https://github.com/AttaMuhammad-dev/EduPredict
- Case study: https://atta-muhammad-portfolio.vercel.app/projects/edupredict/

## The idea

Educational records can be difficult to turn into clear summaries. This learning project explores data preparation, role-based views and predictive examples using synthetic student data.

## Features

- Student registration and current-role access checks
- Owner-scoped CSV uploads, charts and demonstration model training
- MongoDB-backed CSV reports and assignment attachments
- Assigned-cohort submission and teacher grading workflows
- Synthetic risk, grade and demand examples
- A public read-only analytics showcase and synthetic sample CSV download

## Architecture

1. Server-rendered Flask interface
2. Authenticated routes and role checks
3. Dedicated MongoDB Atlas demo database
4. pandas / scikit-learn model workflows

## My work and learning

Release work moved credentials out of source, removed default accounts and made new uploads, reports and attachments durable across serverless restarts. Ownership checks scope staff data and cohort workflows, while revoked roles and old password sessions are rejected.

## Try the demo

1. Open the public analytics showcase and download its synthetic sample CSV.
2. Register with invented sample details and sign in to the student area.
3. Update your sample profile. Read the source for restricted staff workflows.

## Setup overview

1. Install the pinned Python dependencies and read the repository setup notes.
2. Set MONGO_URI, DB_NAME and a strong SECRET_KEY privately. Keep email disabled until configured.
3. Use synthetic datasets and deliberately provision any staff roles; public registration is student-only.
4. Deploy the Flask entrypoint with the provided Vercel configuration. New records use bounded MongoDB-backed storage; migrate any legacy local-file records.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

24 October 2026: 24 isolated tests passed, including analyst ownership, durable uploads/reports/attachments, assigned-cohort access, grading limits, revoked roles, session invalidation, malformed input and database-independent showcase fixtures. Eight fresh live student/account checks passed; the public showcase and sample download were also checked. Elevated staff workflows used isolated synthetic fixtures; real institutional prediction accuracy and email delivery are not claimed.

## Current limitations

- Use synthetic data only. Model demonstrations are not evidence of real-world student prediction accuracy.
- The risk score includes a heuristic; it is not a calibrated dropout probability.
- Public registration creates student accounts. Staff analytics are restricted; no public administrator password is supplied.
- Email delivery is disabled. New uploads/reports/attachments are stored in MongoDB; legacy local-file records require migration or re-upload.

## Next improvements

- Maintain synthetic demonstration data, account roles and dependency versions.
- Maintain the read-only showcase alongside application changes; email delivery requires separate configuration.
