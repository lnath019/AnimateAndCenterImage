# Figma Build Prompt — ZENIVA Premium Skincare & Wellness Redesign (Complete)

Use this as a single Figma AI / First Draft prompt, or as a full brief for a designer. It covers every section of the original creative brief and every page implied by the phased roadmap — nothing held back for a later prompt.

**Reference for visual/UX direction only** (do not copy layout, assets, copy, or proprietary elements):
https://www.behance.net/gallery/248999183/E-commerce-Website-Design-Premium-Skincare-Wellness

**Current live site to preserve brand continuity with:**
https://zenivacare.com/

The result should read as more refined and intentional than the reference, while staying distinctly ZENIVA — not a copy of the Behance file, and not a generic ecommerce template.

---

## 0. Brand feel (hold this the whole way through)

Premium · minimal · elegant · calm · modern · trustworthy · editorial · product-focused · spacious · conversion-friendly. Never: neon color, heavy drop shadows, excessive gradients/glassmorphism, cheap discount-badge styling, cards competing for attention, more than one accent color at a time.

---

## 1. Design tokens (Figma styles to create first)

**Color styles**
- `bg/ivory` `#FAF7F2` — page background
- `surface/white` `#FFFFFF` — cards/panels
- `surface/beige` `#F1EAE0` — alternate section background
- `border/hairline` `#E4DACB`
- `text/primary` `#2B2723` — warm charcoal, never pure black
- `text/muted` `#6B6459`
- `accent/sage` `#7C8B6F` — the one brand accent; used only for links, focus states, small highlights, never as a large fill
- `accent/sage-dark` `#616E56` — hover state of the accent
- `status/success` `#4C7A5A`, `status/error` `#A9463A`

**Text styles** (pair an editorial serif with a clean sans)
- Display serif: **Fraunces** — H1/hero statements only
- Sans: **Inter** — nav, body, buttons, prices, forms, product metadata
- `display/h1` — Fraunces, 56px/1.05, used once per page max
- `heading/h2` — Inter or Fraunces (pick one, stay consistent), 36px/1.15, section headings
- `heading/h3` — Inter, 24px/1.25, product/category headings
- `body/default` — Inter, 16px/1.6
- `body/small` — Inter, 14px/1.5
- `caption` — Inter, 12px/1.4, uppercase, letter-spacing 0.05em — used sparingly for eyebrow labels ("OUR EDIT", "THE ZENIVA APPROACH")

**Spacing (Figma variables, 8pt-based)**
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 — use the larger steps (48–128) generously between sections; this is what makes it feel premium rather than dense.

**Grid / layout**
- Max content width 1440px
- Gutters: 32px desktop, 24px tablet, 16px mobile
- Effects: `shadow/soft` (2px blur 12px, 6% opacity) and `shadow/elevated` (8px blur 30px, 10% opacity) — nothing heavier than that anywhere in the file

**Radius**
4 / 8 / 12px only — no pill-shaped cards, no heavy rounding on product imagery containers (sharp or barely-rounded corners read more editorial/luxury than bubbly rounded ones)

---

## 2. Shared components (build once in a Components page, instance everywhere)

- **Navbar** — see Section 3
- **Footer** — multi-column: Brand blurb / Shop links / About links / Help links / Follow (social icons) / bottom bar (© + Privacy + Terms) — only include links to pages that actually exist
- **Buttons**: Primary (solid charcoal or sage, white text), Secondary (outline, transparent fill), Text button (underline on hover only, no border), Icon button (circular, minimal, used for wishlist/search/cart)
- **Product Card** — image (large, generous whitespace, no boxed border), wishlist heart icon top-right, product name, short descriptor, price, star rating if applicable, a "Quick Add →" text-link style action revealed on hover, not a heavy button always visible
- **Category Card** — full-bleed image, name overlay or below, short description, arrow-link, subtle 1.00→1.04 image scale + arrow shift on hover
- **Editorial Section** — eyebrow caption + large heading + short paragraph + image, two-column desktop / stacked mobile, reusable for Brand Intro, Product Story, Lifestyle sections
- **Review/Testimonial Card** — quote, customer name, pagination (e.g. "01 / 04"), editorial not a boxed widget
- **Newsletter Block** — eyebrow + heading + single email input + subscribe button, generous surrounding whitespace
- **Cart Drawer** — slide-in panel from the right, line items with thumbnail/name/price/qty, subtotal, checkout CTA, close (X)
- **Search Modal/Overlay** — centered or top-anchored input, live result list below, close on backdrop click
- **Mobile Menu** — full-screen overlay, large stacked nav links, account/cart access at bottom
- **Filter/Sort Bar** (Product Listing) — category, price, availability filters + sort dropdown, collapses into a "Filters" button + bottom sheet on mobile

---

## 3. Header / Navigation

Desktop: `ZENIVA` wordmark (left) — `Shop  Collections  About  Journal` (center) — `Search  Account  Cart` icons (right). Sticky. Transparent/overlay on the hero at page top; transitions to `bg/ivory` with a subtle blur after scrolling past the hero. Elegant underline/opacity hover on each nav link. Cart icon shows an item-count badge with a small pop animation.

Mobile: logo + hamburger + cart only. Hamburger opens the full-screen Mobile Menu component.

---

## 4. Homepage — full section sequence

Build in this exact order (this is what creates "storytelling between commerce sections" instead of a stacked product-grid page):

1. **Cinematic Hero** — full-bleed lifestyle image or short muted looping video (poster-image fallback, lazy-loaded). Overlaid or beside: "ZENIVA" in `display/h1`, a short supporting line, one primary CTA ("Explore Collection"). Subtle fade-up entrance.
2. **The ZENIVA Approach** (Brand Introduction) — Editorial Section component: eyebrow "THE ZENIVA APPROACH", heading, short brand paragraph, lifestyle image. Two-column desktop, stacked mobile.
3. **Full-width brand video moment** (optional if asset exists) — short looping video with a single overlaid line, e.g. "Care, simplified." — purely atmospheric, breaks up the page rhythm.
4. **Explore ZENIVA** (Shop by Category) — eyebrow + heading, then 3–4 large Category Cards (Skincare, Body Care, Wellness, Everyday Essentials) in a row desktop / stacked mobile.
5. **Our Edit** (Bestsellers) — eyebrow "OUR EDIT", heading "The products our customers return to.", horizontal Product Card slider/carousel (arrows on desktop, swipe on mobile).
6. **Product Story** — large Editorial Section spotlighting one hero product: big image + "Why You'll Love It" copy.
7. **ZENIVA Lifestyle** — full-width lifestyle image/video moment with a short line + CTA, visually breaking up the commerce sections again.
8. **What Our Customers Say** (Reviews) — Review/Testimonial Card sequence, editorial layout, real review data only.
9. **From the ZENIVA Journal** — 3 Article Cards (large image, short title, minimal metadata) — **only include this section if a journal/content system actually exists** in the project.
10. **Newsletter** — Newsletter Block.
11. **Footer**.

---

## 5. Shop / Product Listing Page

- Page heading "SHOP" / "All Products", Filter/Sort Bar below it
- Product grid: 3–4 columns desktop, 2–3 tablet, 1–2 mobile, using the Product Card component
- Filters: Category, Price range, Availability; Sort: featured/price/newest
- Mobile: filters collapse into a bottom-sheet triggered by a "Filters" button, sort as a simple dropdown

---

## 6. Product Detail Page (give this the most design attention)

- **Above the fold, two columns desktop:** image gallery (large primary image + thumbnail strip or swipe), right column sticky: product name, short description, star rating, price, size/variant selector, quantity stepper, primary "Add to Bag" CTA
- **Below the fold, full-width editorial sections** (Editorial Section component, reused): "The Story" (large image + product narrative), "Why You'll Love It", "How to Use", "What's Inside" — large imagery and type, not boxed cards
- **Product video** slot (10–20s: product → texture → application → lifestyle) if an asset exists, placed within the gallery or "How to Use" section
- **Reviews** for this specific product
- **Shipping info** (collapsible/accordion, minimal)
- **Related Products** — Product Card row at the very bottom

Mobile: stack image gallery above product info; keep the Add to Bag CTA accessible (sticky bottom bar is acceptable here if the existing site already does this).

---

## 7. Cart & Checkout

- **Cart Drawer** (see Section 2) — the primary cart entry point site-wide
- **Cart page** (if the project has a dedicated page rather than only a drawer): line items, quantity controls, subtotal, promo code field, checkout CTA — same visual language (generous spacing, no heavy borders)
- **Checkout flow** — redesign only the visual layer (typography, spacing, button/input styling per the design system); do not alter field order, validation, or steps unless the audit shows a clear UX problem. Keep forms clean: single-column, generous label spacing, clear error states in `status/error`.

---

## 8. Account / Order Tracking (only if these exist in the current project)

- **Account page** — order history list (order #, date, status badge, total), profile details form
- **Order tracking page** — order summary + a simple horizontal status stepper (Placed → Processing → Shipped → Delivered), using `status/success` for completed steps

---

## 9. Supporting Pages (build only the ones that exist today)

- **About** — editorial, brand-story-led, similar visual language to the homepage's Brand Introduction section
- **Contact** — simple form (name, email, message) + contact details, generous whitespace
- **FAQ** — accordion list, grouped by topic if there are many questions
- **Journal listing + article page** — only if a content system exists; article page: large hero image, editorial typography for body copy, minimal metadata (date/author), related-articles footer

---

## 10. Responsive frames to design

Design full frames at **1440 / 1024 / 768 / 390px**; treat 1280 and the other mobile widths (430/375) as scale-checks rather than separate full frames. Mobile is a **recomposition**, not a shrink: e.g. desktop side-by-side text+image sections stack as image-then-text on mobile; a 4-product row becomes 2-per-row or a swipeable single row.

---

## 11. Interactivity / prototyping notes

Figma can't show autoplay video or scroll-triggered reveals natively, but wire what it can:
- **Navbar scroll state**: two frame variants (transparent-on-hero / solid-on-scroll) linked as an interactive component
- **Mobile menu**: tap hamburger → overlay slides/fades in
- **Cart icon**: tap → Cart Drawer slides in from the right
- **Search icon**: tap → Search Modal overlay
- **Product Card hover**: interactive component variant showing the image-zoom + "Quick Add" reveal state
- **Category Card hover**: variant showing the image-zoom + arrow-shift state
- **Filter button (mobile)**: tap → bottom sheet slides up
- **Homepage → Shop → PDP → Cart Drawer**: link the full primary shopping path so it's click-through-able end to end
- Annotate (as sticky notes on the frame, not literal Figma interactions) where scroll-reveal, video autoplay, and parallax should apply in the built site — mark these "dev note," not a Figma prototype interaction

---

## 12. What not to guess

- Do not invent real product names, prices, ingredient claims, or customer reviews — use realistic placeholder labels ("Product Name," "Short descriptor," a generic star rating) and mark them "TBD — pull from live data"
- Do not copy the Behance reference's exact layout, imagery, or copy — use it only for the mood established in Section 0
- If the current project has no Journal/content system, no dedicated Account page, or no separate Cart page (drawer-only), skip those sections rather than inventing new functionality
- Use existing ZENIVA logo/brand marks if available; otherwise placeholder wordmark only, clearly flagged
- Confirm the actual accent color with the brand before finalizing — sage is this prompt's placeholder choice, not a confirmed brand color
