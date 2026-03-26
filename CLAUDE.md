# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server at localhost:5173
npm run build     # Create production bundle in dist/
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages (gh-pages)
```

To lint manually: `npx eslint src/` (no npm lint script configured).

## Architecture

**Single-page React portfolio** deployed to GitHub Pages at `nekhabose.github.io/nekha-bose-portfolio`.

**Tech stack**: React 18 + Vite, React Router v6, CSS Modules, EmailJS (contact form), react-icons, tagcloud.

**Routing**:
- `/` — Home page with all sections (hero, about, experience, projects, skills, certifications, contact)
- `/portfolio/:id` — `ProjectDetail` component renders a full case study for a project matched by ID

**Data layer**: All portfolio content (profile, experience, projects, education) lives in `src/utils.js`. This is the single source of truth — update content here, not in components.

**Styling system**:
- `src/vars.css` — CSS custom properties (colors, spacing, shadows, transitions). Import this when adding new components that use design tokens.
- `src/index.css` — Global resets and utility classes.
- Each component has a co-located `.module.css` file (CSS Modules for scoped styles).

**Key patterns**:
- `src/components/Reveal.jsx` — Reusable scroll-reveal wrapper using IntersectionObserver. Wrap sections with `<Reveal>` to add fade-in animations.
- `Navbar.jsx` uses IntersectionObserver for scroll-spy (highlights active section as user scrolls).
- Vite `base` is dynamically set: `/` for dev, `/nekha-bose-portfolio/` for production (handles GitHub Pages subdirectory).

**Resume**: Served as a static file from `public/nekhaBoseResume.pdf`.

**Pages directory note**: `src/pages/Portfolio.jsx`, `Experience.jsx`, and `Contact.jsx` exist but are unused — these sections are embedded directly in `Home.jsx`. `src/pages/About.jsx` is similarly embedded in `Home.jsx` as a component, not a route.

**Duplicate component files**: Both `src/components/Hero.jsx` and `src/components/Hero/Hero.jsx` exist (same for Navbar). `Home.jsx` imports from `../components/Hero` which resolves to the flat `Hero.jsx` file, not the subdirectory version. The subdirectory versions appear to be older/unused alternates.

**Section anchor IDs**: The Navbar scroll-spy and hash-based navigation in `Home.jsx` depend on these exact `id` values on `<section>` elements: `home`, `about`, `experience`, `projects`, `skills`, `certifications`, `contact`. Don't rename them without updating `Navbar.jsx`.

**EmailJS config**: Service ID, template ID, and public key are hardcoded at the top of `src/components/ContactForm.jsx`. These are EmailJS public-facing identifiers (not secret keys), but they should be updated there if the EmailJS account changes.
