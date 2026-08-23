# Vaibhav Tiwari — Portfolio

A cinematic personal portfolio. Built with React + Vite, Tailwind CSS, and Framer Motion.

## What's inside

- **Fullscreen launch sequence** — a typed, line-by-line intro (skippable, `Esc` also works) before the site reveals itself.
- **Sticky glass navbar** with scroll-spy active-section highlighting (Intersection Observer) and an animated underline.
- **Hero** with a floating gradient-bubble profile portrait.
- **Education** timeline, **Skills** pill grid, **Projects** (alternating layout with a 3D hover tilt), **Certifications**, **Achievements**, **Leadership**, and **Contact**.
- A signature scroll-progress thread on the left edge — a quiet callback to the intro's blinking cursor.
- Fully responsive, dark by default, respects `prefers-reduced-motion`.

## Editing your content

Everything you'd want to change lives in **one file**:

```
src/data/portfolio.js
```

Update your intro lines, bio, education, skills, projects, certifications, achievements,
leadership entries, and social links there. No other file needs to change for a content update.

## Adding your assets

Drop these into `public/assets/` (see `public/assets/README.md`):

| File | Used for |
|---|---|
| `profile.jpg` | Hero bubble portrait (falls back to "VT" initials if missing) |
| `resume.pdf` | Opened by the navbar's Resume button |
| `project-pmo.jpg` | PMO Dashboard project image |
| `project-student.jpg` | Student Management App project image |
| `og-cover.jpg` | Optional social-share preview image (1200×630) |

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying (live URL)

The `dist/` folder is a plain static site — deploy it anywhere that serves static files.
Two of the easiest options:

### Vercel
1. Push this project to a GitHub repo.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — you'll get a live `.vercel.app` URL (and can attach a custom domain).

### Netlify
1. Push this project to a GitHub repo.
2. Go to app.netlify.com/start and import the repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy — you'll get a live `.netlify.app` URL.

Both are free for a personal portfolio and auto-redeploy whenever you push changes.

## Project structure

```
src/
 ├── components/     shared UI: Navbar, LaunchIntro, ScrollProgress, SectionHeading, etc.
 ├── sections/        one file per page section (Hero, Education, Skills, ...)
 ├── data/
 │    └── portfolio.js   ← all editable content lives here
 ├── App.jsx
 └── main.jsx
public/
 └── assets/          your photo, resume PDF, and project images go here
```

## Tech stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · React Icons
