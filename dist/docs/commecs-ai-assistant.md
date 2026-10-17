# Commecs AI Assistant

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A multilingual college information assistant that brings public college material into a conversational interface with links to its sources.

- Live demo: https://commecs-ai-assistant.vercel.app
- Source: https://github.com/AttaMuhammad-dev/Commecs-AI-Assistant
- Case study: https://atta-muhammad-portfolio.magic-wasp-3272.chatgpt.site/projects/commecs-ai-assistant/

## The idea

Students and parents need to find information across college pages and documents. This project explores a conversational way to access that material while keeping official sources available for checking.

## Features

- English, Urdu and Roman Urdu interaction
- Source cards linking to public college material
- A searchable college guide and dated saved-information fallbacks
- Conversation management, optional local saving and Markdown export
- Responsive interface, theme switching and contextual follow-ups

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

Use the repository README for commands. Prepared deployment source may be newer than the original public snapshot. Never commit environment credentials.

## Verification

The public application is reachable. Production build and type checks passed. Three timeouts in the initial test run passed on a focused rerun; that rerun was not a repeat of the entire suite. Live model generation has not been re-evaluated in this launch review.

## Current limitations

- An independent student project; it is not presented as an official college service.
- Confirm fees, dates, eligibility and other time-sensitive information with the college.
- Generated answers depend on the external model service and the freshness of the retrieved material.

## Next improvements

- Review knowledge freshness and evaluate current live answers.
- Continue improving retrieval quality and response clarity.
