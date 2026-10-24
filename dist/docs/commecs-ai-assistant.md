# Commecs AI Assistant

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A multilingual college information assistant that brings public college material into a conversational interface with links to its sources.

- Live demo: https://commecs-ai-assistant.vercel.app
- Source: https://github.com/AttaMuhammad-dev/Commecs-AI-Assistant
- Case study: https://atta-muhammad-portfolio.vercel.app/projects/commecs-ai-assistant/

## The idea

Students and parents need to find information across college pages and documents. This project explores a conversational way to access that material while keeping official sources available for checking.

## Features

- English, Urdu and Roman Urdu interaction
- Source cards linking to public college material
- A searchable college guide and dated saved-information fallbacks
- Conversation management, optional local saving and Markdown export
- Responsive interface, theme switching and contextual follow-ups
- Shared model-call coordination and provider cooldowns across server instances

## Architecture

1. React / TypeScript interface
2. Hono API and retrieval logic
3. Public college material + Gemini File Search
4. Source-linked response / saved guide fallback

## My work and learning

Developed with an AI-assisted workflow, with hands-on work in testing, builds, debugging and deployment. The source includes knowledge maintenance and operational documentation.

## Try the demo

1. Open the live demo and browse the college guide.
2. Ask about a program or admission topic in your preferred supported language.
3. Open the source links and verify any time-sensitive information.

## Setup overview

1. Read the repository README and environment example.
2. Install the pinned Node dependencies and configure required server-side provider settings privately.
3. Run the documented checks and production build before deploying to Vercel.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

24 October 2026: the automated suite, type checks and production build passed. Shared MongoDB readiness was verified on the live deployment. A sampled live check caught a Roman Urdu location fallback gap; simple address questions now use the saved official contact page without spending provider quota. Earlier reading-position checks confirm new answers stay at their beginning.

## Current limitations

- An independent student project; it is not presented as an official college service.
- Confirm fees, dates, eligibility and other time-sensitive information with the college.
- Generated answers depend on the external model service and the freshness of the retrieved material.

## Next improvements

- Maintain the knowledge snapshots and confirm time-sensitive details against official sources.
- Monitor provider quotas and real user feedback; free-provider availability remains an external dependency.
