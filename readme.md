# KUDAKU — Kuningan Dapur Kuliner

**A Cultural Food Platform initiated by Bumi Seni Tarikolot.**

> "KUDAKU adalah tempat Indonesia bertemu melalui pangan."
> *Where Indonesia meets through food.*

---

## Brand architecture (do not flatten this)

| Layer | Role |
|---|---|
| **Bumi Seni Tarikolot** | Origin · Initiator · Physical home / living laboratory |
| **KUDAKU** | Independent cultural food platform |
| **KUDAKU Nusantara** | Annual flagship event *of* KUDAKU |

KUDAKU must **not** be presented as a festival, an event, a restaurant, or a subpage of BST. It is born at Bumi Seni Tarikolot and designed to grow:

**Kuningan → Jawa Barat → Nusantara → International.**

### Core positioning
- **Platform line (ID):** KUDAKU adalah tempat Indonesia bertemu melalui pangan.
- **International principle:** Born in Kuningan. Rooted in Nusantara. Open to the World.
- **Experience DNA:** TASTE — KNOW — MEET — CREATE — CARE

---

## Tech stack

- **Static HTML + CSS + vanilla JavaScript** — no framework, no build step, no backend, no database.
- **Single content/data layer:** `assets/js/content.js` (all structured content: nav, DNA, programs, days, impact, partners, growth).
- **Deploy target:** Function Compute `nginx` static host (see `nginx.conf` — `listen 9000`, `root /code`).
- **Fonts:** Fraunces (editorial serif) + Inter (sans), loaded from Google Fonts with system fallbacks.
- **Imagery:** authentic BST forest/community photography + a designed placeholder system for food-specific visuals.

---

## Routes

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About KUDAKU |
| `ecosystem.html` | Ecosystem / Programs (11 modules) |
| `nusantara.html` | KUDAKU Nusantara (annual flagship, 3 days) |
| `impact.html` | Impact & Legacy (8 pillars) |
| `partners.html` | Partners (6 categories) |
| `origin.html` | Origin — Bumi Seni Tarikolot |
| `contact.html` | Contact / partnership inquiry |
| `404.html` | Not found |

---

## Local preview

No build step. From the workspace root:

```bash
npx serve projects/website-918ad7d630f7dfeb65ad57cd
```

Then open **http://localhost:3000**. You may also open `index.html` directly in a browser (the site has no runtime dependency on a server).

Validate the site (link integrity, `lang`, JS syntax, data layer):

```bash
node projects/website-918ad7d630f7dfeb65ad57cd/scripts/validate.mjs
```

---

## Content source & data architecture

- **Structured content** lives only in `assets/js/content.js`. Repeated lists (nav, DNA, program modules, the three days, impact pillars, partner categories, growth path) are rendered by `assets/js/app.js` into `[data-render]` containers.
- **Unique editorial copy** lives in each page's HTML.
- **Bilingual (ID/EN) readiness:** content is namespaced under a single object. To add Indonesian, provide a parallel `id` object with identical keys; `app.js` already resolves the active language, so a `?lang=id` switch can be wired without touching markup.

### Note on the source documents

The brief references two source documents — the **KUDAKU Proposal Program** and the **KUDAKU Nusantara 3-Day Rundown**. At build time these files were **not present in the workspace** (searched the full tree; no `kudaku` matches, no `.docx`/`.pdf`). V0 copy is therefore authored **from the task brief**. Every fact that requires the official documents is deliberately left as a placeholder and **must not be published** until the documents are provided.

---

## Placeholders to resolve before launch

- **Contact email:** `partnership@kudaku.id` (placeholder — replace with the real address).
- **KUDAKU Nusantara dates & venue:** left as "announced with the official calendar" (no invented dates).
- **Visitor numbers / statistics:** none published (no invented metrics).
- **Partner names & sponsor tiers:** not published — premium strategic-partnership CTA only.
- **Food photography:** uses the `.ph` placeholder system (see below).

---

## Imagery

- **Authentic BST photography** (`assets/img/bst/*.webp`) is used for the cinematic backbone — hero, origin, community, and "encounter" moments. These were copied from the BST media library and belong to the same owner family (KUDAKU is initiated by BST).
- **Food-specific visuals** use the `.ph` placeholder system — flat earthy fields with a fine grain texture and an editorial label — until authentic KUDAKU food photography is available.
- AI-generated food imagery was **not** used (image generation was unavailable during the build); placeholders are intentional and clearly marked.

---

## Deployment

This is an AutoClaw-managed **function-compute (nginx)** static delivery. `entryFile` is `index.html`. The zip root must contain `nginx.conf` + `index.html` (see `nginx.conf`). Formal publication is performed by the user in the platform UI.

---

## V0.2 update (2026-08-19)

Aligned with the official KUDAKU canon: 7 impact indicators, 7 partner categories, verified Bumi Seni Tarikolot contact route, and Vercel production deployment at https://kudaku-platform.vercel.app.
