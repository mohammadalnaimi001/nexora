# NEXORA PRIVILEGE
Premium digital membership and loyalty platform for Nexora Agency.

## Stack
Next.js 15, TypeScript, Tailwind CSS 4, PostgreSQL, Prisma, Auth.js and Apple PassKit.

## Setup
1. Use Node.js 20.9+ and PostgreSQL.
2. Copy .env.example to .env and configure all required secrets.
3. Run npm install.
4. Run npx prisma generate && npx prisma db push.
5. Run npm run dev.

## Apple Wallet requirements
A real signed .pkpass requires an active Apple Developer Program membership, a registered Pass Type ID, the matching Pass Type ID signing certificate and private key, Apple's WWDR intermediate certificate, and the 10-character Apple Team ID. Configure the certificate files and pass artwork in the environment. Never commit private keys or secrets.

## Status
This repository was empty when inspected. This commit establishes the Next.js/Prisma/Auth.js foundation, four-tier data model and actual PassKit signing module. It is not yet a complete production deployment. Apple Wallet web-service registration and APNs updates, full admin and rewards workflows, automated tests, and production credentials still need implementation and validation on a physical iPhone. No Wallet compatibility is claimed before that verification.