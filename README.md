# Crumb Theory

Homemade brownies, cakes and biscuit treats website (TanStack Start + React + Tailwind).

## Setup

```bash
npm install        # or: bun install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> .output/
npm run preview    # preview the production build
```

No environment variables or secrets are required (see `.env.example`).

## Deployment

`npm run build` produces `.output/` (Nitro, Cloudflare Workers preset by default, see `.output/server/wrangler.json`).
Deploy with `npx nitro deploy --prebuilt` or host on any platform that supports the Nitro output.

## Assets

All images are real local files in `src/assets/`:
- `crumb-theory-logo.png` - the supplied logo, background made transparent (ink colour unchanged).
- `party-decoration.png` - the supplied bunting strip, background made transparent.
- `bakery-lineup.png` - the supplied cake / brownie line drawing, background made transparent.

Fonts: Great Vibes is bundled via `@fontsource/great-vibes` (category headings only).

---

## Original Lovable instructions (kept for reference)

# Crumb Theory

in this there are thee images above the view menu and order now bubble. i want to replace those with the second attachment and juts add a little more spacing to it.

 i want a small design where there is a colour difference from light beige to more darker beige. it should be a small pretty design.make it light. 

fort hee fourth attachment i want the headingas Brownies & Blondies you can make it a pretty cursive but legible handwriting. 

and i would like to add pictures for each item. 

in the fifth attachemnt there is a headline where it says "♡ Frosted versions of Fudgy Brownies, Blondies & Mocha Brownies available for +₹50 ♡" that needs to be more legible and needs to be seen. 

CHANGE "Festive Brownies (Birthday / Occasion)"  to just "Loaded Brownies"

and for Kinder Brownie Tub make the grams as 350g for 400 rupees
for cakes i want to change the menu. 

classic vanilla cake
classic butter cake
classic lemon cake
vanilla cream cake
butter cream cake
lemon craem cake

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://crumb-theory.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8e3ad05c-9d8f-4c4f-93a7-dc296cd36cd2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
