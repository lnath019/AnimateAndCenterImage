# Figma Build Prompt — Zeniva Health Care Homepage (Real Codebase)

Built from the actual `HomePage` component, not the earlier skincare brief. Goal: keep every existing section and function, elevate the visual execution to feel premium, calm, and trustworthy — the tone that matters most for a platform people use to book doctors and order medicine.

---

## 0. Brand direction

Premium · calm · trustworthy · clean · modern · efficient · accessible · reassuring. This is a platform people reach for when something is urgent or personal — visual noise reads as unreliable here in a way it wouldn't on a fashion site. Every color and effect should earn its place.

**Specific things to fix from the current build:**
- Five different accent colors across the six Featured Service cards (primary, emerald, primary again, red, secondary, primary) — reads as inconsistent, not diverse-and-friendly. Reserve **red strictly for the Ambulance/emergency card** (semantically correct — urgency), and use **one accent (primary) for every other card**, differentiated by icon and copy, not color.
- The corner-glow blur blobs and background pattern images (hero, "Why Choose Us," "How It Works," the Contact CTA band) appear on nearly every section — pull back to 2–3 uses across the whole page, placed only where they add depth (hero, one CTA moment), not as a repeated section-divider trick.
- Card hover treatment (`-translate-y-1` + colored shadow glow) is applied heavily — keep it, but soften the shadow glow intensity so it reads as a lift, not a spotlight.

---

## 1. Design tokens (map to what already exists in code — don't invent new ones)

**Color roles** (actual values come from `src/config/brand.ts` at runtime, so define these as *roles* in Figma, not fixed hex, matching an existing light theme export for now):
- `primary` / `primary-light` / `primary-hover` — main brand color, used for the majority of interactive elements and icon chips
- `secondary` / `secondary-light` / `secondary-hover` — used for the Contact CTA band and one supporting highlight (e.g. "Save X%" badges can stay emerald as a semantic success color, not a Zeniva "brand" color)
- `tertiary` — the alternate section background already used to zebra-stripe the page (keep this rhythm: white → tertiary → white → tertiary as sections go down the page)
- `foreground` — primary text-on-surface color
- Neutrals (already in use, keep as-is): `slate-800` headings, `slate-500` body, `slate-400` meta/timestamps, `slate-100`/`slate-50` hairlines and soft surfaces
- Semantic only: `emerald` = verified/success indicators, `red` = emergency/ambulance only

**Typography** — Inter only, no serif (this is the right call for a health platform — clarity over editorial flourish). Tighten the existing scale:
- `eyebrow` — 11–12px, bold, uppercase, tracking-wide, `primary` color
- `h2` — 30–32px, bold, `slate-800`
- `h3` (card titles) — 16–18px, bold, `slate-800`
- `body` — 14–15px, `slate-500`
- `meta` — 12–13px, `slate-400`

**Spacing & shape** — keep the existing `rounded-xl`/`rounded-2xl` card language and `shadow-sm` default elevation; reserve `shadow-xl` for hover states only, not resting state.

---

## 2. Header & Footer

`MarketingHeader` and `MarketingFooter` weren't included in the shared code — **inspect those two files before redesigning them**; don't guess their nav structure. Once reviewed, apply the same restrained-accent, single-primary-color treatment described above.

---

## 3. Homepage — section by section (real sections, in real order)

### Hero
- Keep the two-column layout: left = eyebrow badge + H1 + supporting paragraph + 3 CTA buttons + category-tabbed search bar (Doctor / Test / Medicine); right = hero image + 4-stat grid (Partner Hospitals, Verified Doctors, Districts Covered, Emergency Response)
- Reduce to **one** background glow treatment (not two blurred blobs + a pattern overlay simultaneously) — pick the pattern overlay OR the glow blobs, not both
- Search bar: keep the pill-tab category switcher exactly as built (Doctor/Test/Medicine), glass/blur panel is a nice premium touch here — keep it, it's one of the strongest existing elements
- Stat cards: keep the 2-filled/2-outline pattern (primary-filled, white-outline, white-outline, secondary-filled) — this is a good restrained way to use both brand colors once, not everywhere

### Why Choose Us
- 4-column icon-card grid (Verified Providers, Book in Minutes, Data Protected, Support 24/7)
- All four icon chips: same `primary-light` background, `primary` icon — remove any per-card color variation here entirely, this section should read as one consistent set of trust signals, not four different brand colors

### Featured Services
- 6 service cards (Doctor Consultation, Diagnostics, e-Pharmacy, Ambulance, Hospital Directory, Health Records), left-accent-bordered, icon chip + title + description + "Explore →" link
- **Color fix**: all six use the `primary` icon-chip treatment **except** Ambulance, which stays `red` (correct — it's the one card where urgency-signaling color is meaningful). This is the single biggest visual consistency win available on this page.

### How It Works
- 3-step numbered row (Search & Choose / Book & Confirm / Get Care), alternating primary/secondary numbered badges — keep as-is, this alternation is tasteful and functional (helps scan the sequence), don't reduce to one color here

### Partner Hospitals
- API-driven grid of up to 6 hospitals, each card: "Verified Partner" badge, name, city, phone, "View details →"
- **Build all three real states as separate Figma frames**, since the code explicitly handles them: loading (spinner), error (red banner message), empty (neutral "new hospitals being onboarded" message), and populated (3-column grid)
- "View all hospitals →" CTA button below the grid

### Active Packages
- **Conditionally rendered** — only appears when packages exist. Build two frame variants: single-package (centered, max-width card) and multi-package (2-column grid), matching the code's `isSingle` branching
- Each card: image/icon thumb, topic, optional "Save X%" emerald badge, availability date, rich-text description (truncated to 4 lines), price with optional strikethrough regular price, "Contact Us to Book" button (secondary color — correct, this is the one CTA that should stand out from the primary-dominated page)

### Health Tips (Blog)
- **Conditionally rendered** — only appears when featured blog posts exist. 3-column BlogCard grid + "Read all articles →" CTA. Since `BlogCard` wasn't included in the shared code, inspect it before redesigning; keep its existing data shape (image, title, excerpt, date/category metadata typical of a blog card)

### Testimonials
- 3-column quote cards with a large decorative quote-mark icon, quote text, name, location — keep this simple, editorial-adjacent treatment, it's one of the more premium-feeling sections already

### FAQ
- Two-column layout: hospital/doctor image left (desktop only), accordion FAQ list right (2-column grid of `<details>` cards)
- Keep the chevron-rotate-on-open interaction; this is a good, functional pattern already

### Contact CTA
- Full-width secondary-colored band: first-aid icon in a glass chip, heading + subtext, phone CTA (filled white button) + "Send a Message" (outline button)
- Drop the background pattern image layer here if the hero also keeps its glow treatment — pick one "textured" moment on the page, not two

---

## 4. Responsive behavior (match existing breakpoints exactly)

- Featured Services / Why Choose Us / Testimonials: `sm:grid-cols-2 lg:grid-cols-3` (or `lg:grid-cols-4` for Why Choose Us) → 1 column mobile
- Hero: two-column desktop → single column mobile, hero image + stats grid moves below the text/search block (currently `hidden lg:flex`, confirm whether mobile should get a simplified version of the image+stats or omit it entirely — flag this as a decision, don't just hide it silently)
- FAQ: two-column desktop → single column mobile, hospital image hidden below `lg` (already coded this way — keep it)
- Stats grid: 4 columns fixed even on smaller hero breakpoints — check this actually stays legible down to 375px, it may need to become 2×2 on small mobile

---

## 5. Interactivity / prototyping notes

- Search bar category tabs (Doctor/Test/Medicine): active-tab state variant (white bg + primary text vs. transparent + muted text)
- Service card hover: lift + shadow-glow variant
- FAQ accordion: closed/open variant with chevron rotation
- Partner Hospitals: loading/error/empty/populated frame variants, linked as a documented state set (not a click-through flow, just documented states for the dev)
- Active Packages: single/multi frame variants
- All CTA buttons/links: default/hover states

---

## 6. What not to guess

- `MarketingHeader.tsx`, `MarketingFooter.tsx`, and `BlogCard.tsx` were not included — inspect the real files before designing those pieces, don't invent nav structure or blog card layout from scratch
- Hospital, package, and blog content is API-driven — use realistic placeholder data in Figma, clearly marked as illustrative, not fixed copy
- Don't reintroduce anything from the earlier skincare brief (product cards, "Add to Bag," "Our Edit," serif display type) — this is a services platform, not ecommerce
- Confirm with whoever owns `brand.ts` what the actual primary/secondary/tertiary hex values are before finalizing exact color swatches in Figma; this prompt describes roles, not final values
