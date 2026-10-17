# TechNova

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A Flutter electronics shopping application, branded Laptop Harbour in the app, with catalog browsing, comparison, a cart and demonstration checkout. Try the application through its browser demo.

- Live demo: https://technova-laptop-harbour.vercel.app
- Source: https://github.com/Jokerisstupid/TechNova-Ecommerce-App
- Case study: https://atta-muhammad-portfolio.magic-wasp-3272.chatgpt.site/projects/technova/

## The idea

An e-commerce application connects many small interactions: discovering products, comparing options, changing quantities and recording an order. TechNova explores that end-to-end interface using Flutter and Firebase.

## Features

- Electronics catalog, categories and search
- Product details and product comparison
- Cart with quantity management
- Firebase authentication and customer record workflows
- Admin inventory screens and demonstration order flow

## Architecture

1. Flutter application · browser-accessible demo
2. Provider state management
3. Firebase Authentication
4. Firestore catalog and customer records

## My work and learning

Launch work restored web configuration, added explicit demo behavior, removed automatic public catalog seeding, tested Firestore access rules and fixed a cart quantity issue. The Flutter interface also exposes browser accessibility semantics.

## Try the demo

1. Open the live catalog, select a category and search for a product.
2. Open product details, choose a quantity and add it to the cart.
3. Explore demonstration checkout using sample information only; no purchase is made.

## Setup overview

1. Use a compatible Flutter SDK and install the package dependencies.
2. Configure a Firebase web application and publish tested Firestore rules for your own project.
3. Keep private provider credentials out of browser code; optional integrations are disabled in this demo.
4. Run the cart check, build a Flutter web release and deploy the static build/web directory.

Use the repository README for commands. Prepared deployment source may be newer than the original public snapshot. Never commit environment credentials.

## Verification

The public catalog, mobile layout, search, product details, add-to-cart, sign-in page and checkout form were checked. The cart quantity regression test and release build passed. Firestore rules passed 19 emulator access checks. New-customer signup and completed live order submission are still to be checked.

## Current limitations

- Demo checkout only: no real payment processing or fulfillment.
- AI API, external image uploads and public reviews are not enabled.
- This release is the web demo. Native Android/iOS configuration is not fully restored.

## Next improvements

- Finish live account and sample-order checks.
- Restore optional external integrations and review native platform setup.
