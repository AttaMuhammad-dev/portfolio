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

- Android APK: https://github.com/AttaMuhammad-dev/TechNova-Ecommerce-App/releases/download/v3.0.0-demo.20261017/technova-android-demo-3.0.0.apk
- Version 3.0.0; 59.7 MB; Android 7.0 or newer.
- Direct demo distribution with a development certificate. The portfolio owner confirmed physical Android installation and account login on 18 October 2026.
- SHA-256: 9ef1e876eb0b0e15cb99387769719d390ed04936164336177262fb95bd06fbb5

On iPhone or iPad, open the browser demo in Safari, use Share then Add to Home Screen, leave Open as Web App on if offered, and tap Add. This is the browser application; native iOS testing has not been performed. Internet is needed for catalog and account features.

Apple instructions: https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios

## Setup overview

1. Use a compatible Flutter SDK and install the package dependencies.
2. Configure a Firebase web application and publish tested Firestore rules for your own project.
3. Keep private provider credentials out of browser code; optional integrations are disabled in this demo.
4. Run the cart check, build a Flutter web release and deploy the static build/web directory.

Use the repository README for commands. Source links point to the prepared project repository. Never commit environment credentials.

## Verification

I previously tested the Android application using an Android emulator. Native iOS testing has not been performed. In the current browser demo, the catalog, mobile layout, search, product details, add-to-cart, sign-in page and checkout form were checked. The cart quantity regression test and release web build passed. An Android release APK was also built and its package metadata and signature verified; the portfolio owner reported successful installation and account login on a physical Android phone on 18 October 2026. Additionally, Firestore rules passed 19 emulator access checks. New-customer signup and completed live order submission remain to be checked.

## Current limitations

- Demo checkout only: no real payment processing or fulfillment.
- AI API, external image uploads and public reviews are not enabled.
- Android installation and account login were confirmed by the portfolio owner on a physical phone (18 October 2026). The iPhone option uses the browser demo added to the Home Screen; native iOS testing is still pending.

## Next improvements

- Complete remaining new-customer signup and sample-order checks.
- Restore optional external integrations; broader Android workflows and native iOS testing remain future steps.
