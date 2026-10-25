# IRONVALE Training Club — Gym Website Demo

A responsive gym and fitness club marketing website built with React, Vite and Tailwind CSS for **Built By Amos**.

## Features
- High-impact dark design with electric-lime accents
- Responsive mobile navigation
- Hero section with free-trial calls to action
- Gym benefits and coaching approach
- Class schedule cards with WhatsApp enquiries
- Membership pricing cards
- FAQ accordion
- Free-trial lead form that prepares a WhatsApp message
- Gym details, contact section, footer, Built By Amos attribution

> Front-end demo only. No CRM, payment gateway, membership database, or booking backend is connected. Images are loaded from Unsplash and require internet access.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open the `ironvale-gym-website` folder in VS Code.
3. Open a terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Before publishing
In `src/App.jsx`:
- Replace `919999999999` with the gym's real WhatsApp number (country code + number, digits only).
- Replace sample gym address, phone, hours, prices, class schedule, coach names and claims with verified details.
- Replace demo photography with approved images.
- Review privacy terms and consent for lead collection.
- Connect actual membership payments, class booking, CRM and member records if required.

## Build
```bash
npm run build
npm run preview
```
Production output is created in `dist/`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at Vercel.
3. Use build command `npm run build` and output directory `dist`.
4. Deploy.

## Deploy to Netlify
1. Import the GitHub repository into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

## Demo brand
**IRONVALE Training Club** is a fictional gym brand used to demonstrate the type of website Built By Amos can create for fitness businesses.
