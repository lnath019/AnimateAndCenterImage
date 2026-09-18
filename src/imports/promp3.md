================================================================
ZENIVA — PHASE 3: PROTOTYPE WIRING + MOTION SPECS
================================================================

PREREQUISITE
Phase 1 and Phase 2 are complete. All screens exist as static
frames. Components and variables are in place.

GOAL
Turn the file into a clickable prototype that mirrors the
production frontend exactly. Document every motion the developer
needs to implement.

================================================================
PART A — PROTOTYPE FLOWS
================================================================

Switch each screen to "Flow starting point" as needed. Then wire
these transitions using Smart Animate where possible.

FLOW A — Discover to purchase
  Homepage hero → click "Explore Collection" → Shop
  Shop → click a Category card → Shop (filtered)
  Shop → click a Product card → PDP
  PDP → click "Add to cart" → Cart drawer (overlay, opens above)
  Cart drawer → click "Checkout" → Checkout placeholder frame
  Duration: 260ms · Easing: ease-out

FLOW B — Search
  Any screen → click search icon → Search modal (overlay)
  Search modal → type query → results variant (frame swap)
  Search modal → press Enter on a result → PDP
  Duration: 220ms · Easing: ease-out

FLOW C — Mobile navigation
  Mobile homepage → tap hamburger → Mobile menu (overlay)
  Mobile menu → tap "Shop" → Mobile shop
  Mobile menu auto-closes on navigation
  Duration: 260ms · Easing: cubic-bezier(0.22, 1, 0.36, 1)

FLOW D — Cart round trip
  PDP → add to cart → Cart drawer (one item)
  Cart drawer → change quantity → Cart drawer (updated state)
  Cart drawer → remove item → Cart drawer (empty state)
  Empty cart → click "Browse shop" → Shop
  Duration: 300ms for drawer open/close

FLOW E — Newsletter
  Homepage → newsletter section → invalid email → Error variant
  Error variant → valid email → Success variant
  Duration: instant frame swap

FLOW F — Filters
  Mobile shop → tap Filters → Filter drawer (overlay)
  Filter drawer → apply → Mobile shop (filtered grid)
  Mobile shop → tap chip × → Mobile shop (chip removed)
  Duration: 260ms ease-out for drawer

================================================================
PART B — MOTION SPECS PAGE
================================================================

Create a page titled "Motion". For each interaction below, place
two frames side by side (start state / end state) with a text
annotation between them:

  Navbar scroll            transparent → solid
                           400ms ease-out
                           animate: bg, border, blur

  Mobile menu              slide from left, 260ms ease/zen

  Cart drawer              slide from right, 300ms ease/zen
                           backdrop fade 200ms parallel

  Search modal             scale 0.96→1, opacity 0→1, 220ms

  Product card hover       image 1.00→1.03, 400ms ease-out
                           quick-add fade+slide 8px, 200ms

  Button hover             bg crossfade, 180ms linear

  Link hover               underline slide, 240ms ease/zen

  Section entrance         fade up 24px, 700ms ease/zen
                           fires once per section

  Cart badge pop           scale 1→1.2→1, 260ms

  Accordion expand         height, 240ms ease-out
                           chevron rotate 0→180

  Reduced motion           all of the above → 0ms
                           note in a redline panel

Each entry must show:
  - Trigger
  - Start state (visual)
  - End state (visual)
  - Duration
  - Easing (in cubic-bezier form)
  - Properties animated
  - Reduced-motion fallback

================================================================
PART C — ACCESSIBILITY ANNOTATIONS
================================================================

On each overlay frame, add a redline panel showing:
  - Tab order (numbered)
  - Focus ring spec: 2px ring accent/base 60%, offset 2px
  - ARIA role: dialog / navigation
  - Esc closes (note on frame)
  - Backdrop click closes (note on frame)
  - Body scroll lock while open (note on frame)

================================================================
PART D — HANDOFF PAGE
================================================================

Create a final "Handoff" page with these tables:

TABLE 1 — Variables → CSS
  Figma variable name | CSS variable | Value

TABLE 2 — Components → React paths
  Component name | Frontend file path

TABLE 3 — Motion tokens
  Token | Duration | Easing

TABLE 4 — Breakpoints
  Name | Width | Columns | Gutter

Add a dev-notes block at the bottom for any deviation.

================================================================
DELIVERABLE
================================================================

- All six flows clickable from the first frame
- Motion spec page with side-by-side frames
- Accessibility redlines on overlays
- Handoff page with the four tables

STOP. The file is complete and ready to hand off to the frontend.

================================================================
END OF PHASE 3 PROMPT
================================================================