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

## Install the demo

- Android APK: https://github.com/AttaMuhammad-dev/TechNova-Ecommerce-App/releases/download/v3.0.1-demo.20261024/technova-android-demo-3.0.1.apk
- Version 3.0.1; 59.7 MB; Android 7.0 or newer.
- Direct demo distribution with a development certificate. The portfolio owner confirmed physical Android installation and account login on 18 October 2026.
- SHA-256: eac358e17894633c6ecbdfdcc534537c5d2793bef527e148a5c9cd971cae5806

On iPhone or iPad, open the browser demo in Safari, use Share then Add to Home Screen, leave Open as Web App on if offered, and tap Add. This is the browser application; native iOS testing has not been performed. Internet is needed for catalog and account features.

Apple instructions: https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios

## Setup overview

1. Use a compatible Flutter SDK and install the package dependencies.
2. Configure a Firebase web application and publish tested Firestore rules for your own project.
3. Keep private provider credentials out of browser code; optional integrations are disabled in this demo.
4. Run the cart check, build a Flutter web release and deploy the static build/web directory.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

24 October 2026: four Flutter cart/category tests, nineteen Firestore emulator access checks and eleven live Firebase service checks passed. Live service checks covered customer registration/sign-in, profiles, a marked zero-value demo order and cross-customer/role-escalation denial. Flutter analysis reported no issues; release web and Android 3.0.1 builds succeeded. APK metadata and signature were verified. The owner confirmed installation/login of the earlier 3.0.0 APK on a physical Android phone on 18 October; testing of the updated package is a separate step. Native iOS remains untested.

## Current limitations

- Demo checkout only: no real payment processing or fulfillment.
- AI API, external image uploads and public reviews are not enabled.
- Android installation and account login were confirmed by the portfolio owner on a physical phone (18 October 2026). The iPhone option uses the browser demo added to the Home Screen; native iOS testing is still pending.

## Next improvements

- Keep the pinned Flutter/Android toolchain maintained and test future releases on real devices.
- Optional external integrations and native iOS distribution remain separate future work.
