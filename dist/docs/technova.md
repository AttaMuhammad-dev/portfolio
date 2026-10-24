# TechNova

A project in Atta Muhammad’s portfolio. Updated 17 October 2026.

A Flutter electronics shopping application, branded Laptop Harbour in the app, with catalog browsing, comparison, a cart and demonstration checkout. Try the application through its browser demo.

- Live demo: https://technova-laptop-harbour.vercel.app
- Source: https://github.com/AttaMuhammad-dev/TechNova-Ecommerce-App
- Case study: https://atta-muhammad-portfolio.vercel.app/projects/technova/

## The idea

An e-commerce application connects many small interactions: discovering products, comparing options, changing quantities and recording an order. TechNova explores that end-to-end interface using Flutter and Firebase.

## Features

- Electronics catalog, categories and search
- Product details and product comparison
- Cart with quantity management
- Firebase authentication and customer record workflows
- Admin inventory screens and demonstration order flow
- Persistent administrator-managed categories shared across catalog and search
- Authenticated AI shopping assistance through a private server
- Signed image uploads for customer avatars and administrator catalog media
- Private review submissions with administrator-approved public feedback

## Architecture

1. Flutter application · browser-accessible demo
2. Provider state management
3. Firebase Authentication
4. Firestore catalog and customer records
5. Node service routes · Firebase ID-token verification · private Gemini / Cloudinary credentials

## My work and learning

Launch work restored web configuration, added explicit demo behavior, removed automatic public catalog seeding, tested Firestore access rules and fixed a cart quantity issue. The Flutter interface also exposes browser accessibility semantics. The October 24 integration update moved AI and media uploads behind verified customer sessions, added administrator moderation for public reviews and published Android 3.0.2.

## Try the demo

1. Open the live catalog, select a category and search for a product.
2. Open product details, choose a quantity and add it to the cart.
3. Explore demonstration checkout using sample information only; no purchase is made.

## Install the demo

- Android APK: https://github.com/AttaMuhammad-dev/TechNova-Ecommerce-App/releases/download/v3.0.2-demo.20261024/technova-android-demo-3.0.2.apk
- Version 3.0.2; 60.1 MB; Android 7.0 or newer.
- Direct demo distribution with a development certificate. The portfolio owner confirmed physical Android installation and account login on 18 October 2026.
- SHA-256: 815741bbc638b72e7cc22433a8c555e2ccf17646898a983164c9bf03f6864fe3

On iPhone or iPad, open the browser demo in Safari, use Share then Add to Home Screen, leave Open as Web App on if offered, and tap Add. This is the browser application; native iOS testing has not been performed. Internet is needed for catalog and account features.

Apple instructions: https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios

## Setup overview

1. Install the pinned Flutter and Node dependencies; configure your own Firebase project and tested access rules.
2. Save Gemini and Cloudinary credentials privately on the server host. Never put provider secrets in Dart, APK or browser files.
3. Build Flutter web assets, then deploy with the root Vercel configuration so API routes and the browser app run together.
4. Use the existing administrator role to maintain catalog data and approve safe review text.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

24 October 2026: four Flutter tests, 12 Node service tests and 35 Firestore emulator access/privacy checks passed. Twelve new live checks verified a signed-in Gemini reply, a signed Cloudinary sample upload and retrieval, authentication, catalog-upload restrictions and private review protection. Flutter analysis is clean; web and Android 3.0.2 builds, APK metadata, signature and upload checksum were verified. The owner reported successful login and adding products to the cart in the updated Android APK and iOS browser demo on 24 October. This does not claim native iOS testing or testing every device feature.

## Current limitations

- Demo checkout only: no real payment processing or fulfillment.
- AI and image services depend on free provider quotas/availability. Burst limits are per warm server process. Public reviews appear only after administrator approval.
- Owner-confirmed Android 3.0.2 and iOS browser login/cart checks passed on 24 October 2026. iPhone/iPad use the browser demo via Add to Home Screen; no native iOS package is supplied.

## Next improvements

- Maintain provider quotas, moderation and the pinned Flutter/Android dependencies.
- Continue device checks as features change; native iOS signing and distribution remain separate.
