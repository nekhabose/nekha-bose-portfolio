
# Nekha Bose Portfolio

Personal portfolio site built with React and Vite.

## Run Locally

Prerequisites:

- Node.js 18+ recommended
- npm

Install dependencies:

```bash
npm install
```

Start the Vite dev server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```bash
http://localhost:5173/
```

## Available Scripts

```bash
# Start local development server
npm run dev

# Build production files into dist/
npm run build

# Preview the production build locally
npm run preview

# Publish dist/ to GitHub Pages
npm run deploy
```

## Build And Deploy Notes

- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the built `dist/` output locally so you can verify the production build.
- The app uses a Vite `base` path of `/nekha-bose-portfolio/` in production, which matches GitHub Pages project-site deployment.
- `npm run deploy` runs the `predeploy` script first, then publishes `dist/` with `gh-pages`.

## Project Structure

```text
src/
├── assets/              # Images used across the site
├── components/          # Shared UI components
├── pages/               # Page-level sections
├── utils.js             # Project and experience data
├── vars.css             # Design tokens
├── index.css            # Global styles
└── main.jsx             # App entry point
public/
└── nekhaBoseResume.pdf  # Resume file served statically
```

## Customization

- Update project and experience content in `src/utils.js`.
- Replace resume content by updating `public/nekhaBoseResume.pdf`.
- Adjust the contact form EmailJS configuration in `src/components/ContactForm.jsx`.
- The current contact form uses hardcoded EmailJS IDs. If you fork this project, replace them with your own EmailJS service, template, and public key.
