# ROHITH KUMAR G — THE SERIES
## Cinematic Personal Portfolio Platform

A cinematic, streaming-inspired personal portfolio for **Rohith Kumar G**: Electronics & Communication Engineering (ECE) student, software developer, AI enthusiast, and builder.

Every section is an episode, every project is an Original, and the entire experience plays like a streaming series.

> A personal portfolio with a fictional streaming-platform aesthetic. Built with React, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scroll.

---

## 🎬 Features & Architecture

- **Signature Cinematic Opening Sequence:**
  - Dark letterbox frame reveal.
  - Studio title: `A ROHITH KUMAR ORIGINAL`.
  - Massive display typography: `ROHITH` with subtitle `THE SERIES`.
  - Portrait fade-in and `PLAY` trigger.
  - Skip Intro button with `Escape` / `Enter` keyboard controls.
  - Strict respect for `prefers-reduced-motion`.

- **Viewer Profile Selection:**
  - "Who's watching?" selection screen.
  - 4 tailored viewing profiles: **Rohith** (Full series order), **Recruiter** (Projects, Milestones & Skills first), **Developer** (Code, Architecture & GitHub first), **Creative** (Storyline, Philosophy & Experiments first).
  - Dynamically updates section priority and navigation sequence.
  - Interactive profile switcher in the top navigation bar with live toast feedback.

- **Cinematic Billboard Hero:**
  - Display title: "THE BUILDER".
  - Parallax portrait with subtle ambient light streaks and floating interactive chips.
  - Direct actions: `▶ Play Intro` (interactive highlight reel) and `＋ My Work`.

- **Originals Project Showcase & Modal Experience:**
  - Pinned horizontal rail on desktop with progress tracker; native touch momentum swipe on mobile.
  - Key projects:
    1. **Personal AI / SmartBot:** Private, passcode-protected assistant interface connected to LLM APIs with real-time prompt steering.
    2. **Agriverse:** Agricultural e-commerce marketplace built during an internship connecting farmers to consumers.
    3. **Skill Bridge:** Inclusive smart education concept featuring voice-first access and adaptive skill pathways.
    4. **Rohith: The Series:** This cinematic portfolio platform.
  - Detailed modal overlay featuring problem statement, architecture, metrics, technologies, and GitHub links.

- **My Journey — Episodic Storytelling:**
  - 4 Seasons of storytelling:
    - **Season 01: The Origin** (Curiosity as an engine, hardware-software bridge)
    - **Season 02: The Mindset** (Research before code, blockchain competition podium finish)
    - **Season 03: Learning by Building** (Agriverse internship, SmartBot creation, Skill Bridge concept)
    - **Season 04: What Comes Next** (The Series, technology entrepreneurship vision)

- **Technical Toolkit (Genres):**
  - Interactive genre tabs (Languages & Core, Web & Frameworks, AI Exploration, Developer Tools, Product Thinking).
  - Evidence cards showing exactly where each technology is utilized.

- **Milestones & Podium:**
  - Awards-poster presentation highlighting inter-college Blockchain competition 3rd Prize, Agriverse internship milestones, and AI platform engineering.

- **Screenplay & Final CTA:**
  - Clean resume sheet layout with one-click LinkedIn and GitHub connection.
  - Finale: `TO BE CONTINUED...` with replay opening sequence action.

---

## 🚀 Running Locally

Requires **Node.js 18+**.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open the local Vite URL (e.g. `http://localhost:5173`).

---

## 🛠️ Building for Production

```bash
# Type check and build static bundle
npm run build

# Preview production build locally
npm run preview
```

The optimized static production files are output to `dist/` and can be deployed directly to GitHub Pages, Vercel, Netlify, or any static hosting service.

---

## 📂 Source Code Map

```
src/
  data/portfolio.ts        ← Single source of truth for identity, projects, seasons, and skills
  App.tsx                  ← Application state (opening → profiles → billboard home)
  components/
    OpeningSequence.tsx    ← Cinematic intro sequence with skip shortcuts
    ProfileSelector.tsx    ← "Who's watching?" profile selection modal
    Navbar.tsx             ← Auto-hiding navbar with profile dropdown & mobile drawer
    Hero.tsx               ← Full-screen billboard with portrait parallax
    PlayIntro.tsx          ← Interactive highlight reel modal
    ContinueWatching.tsx   ← Episodic progress cards
    About.tsx              ← The Pilot: Who I Am & core facts
    Seasons.tsx            ← My Journey seasons & episodes
    Originals.tsx          ← Pinned horizontal project rail
    ProjectCard.tsx        ← Project poster card with 3D tilt
    ProjectModal.tsx       ← Full-screen project details overlay
    TopPicks.tsx           ← Numbered Top 10 highlights rail
    Skills.tsx             ← Technical toolkit genre tabs & evidence cards
    Achievements.tsx       ← Awards & milestone cards
    ResumeViewer.tsx       ← Screenplay resume preview
    ResumeModal.tsx        ← Full-screen screenplay modal
    FinalCTA.tsx           ← TO BE CONTINUED... finale & contact links
    CustomCursor.tsx       ← Cinematic magnetic cursor
    fx.tsx                 ← Motion utilities, particles & tilt
  hooks/                   ← Lenis smooth scroll, media queries, section progress
scripts/
  build-images.mjs         ← Sharp image optimization pipeline
```

---

## 🛡️ License

Created by **Rohith Kumar G**. All rights reserved.
