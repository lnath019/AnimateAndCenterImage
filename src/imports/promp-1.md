================================================================
ZENIVA — FIGMA AI BUILD PROMPT
Premium Skincare & Wellness Ecommerce — Complete Interactive Design
================================================================

You are building the complete Figma design file for ZENIVA, a premium
skincare and wellness ecommerce brand. This must be production-ready
and match the codebase exactly.

REFERENCE (inspiration only — never copy assets, copy, or layout):
https://www.behance.net/gallery/248999183/E-commerce-Website-Design-Premium-Skincare-Wellness

================================================================
SECTION 1 — FILE SETUP
================================================================

FILE NAME
ZENIVA — Design System & Interactive Screens v1.0

CREATE PAGES IN THIS ORDER
1. 00 — Cover
2. 01 — Design Tokens
3. 02 — Typography
4. 03 — Iconography
5. 04 — Components
6. 05 — Homepage / Desktop (1440)
7. 06 — Homepage / Mobile (390)
8. 07 — Shop / Desktop + Mobile
9. 08 — Product Detail / Desktop + Mobile
10. 09 — Cart, Search, Menu Overlays
11. 10 — Empty & Error States
12. 11 — Prototype Flows
13. 12 — Motion Specs
14. 13 — Accessibility Notes
15. 14 — Handoff

FRAMES
Desktop:  1440 × 1024 (grid 12 col, 40px gutter, 56px margin)
Tablet:   1024 × 1366 (grid 8 col, 24px gutter, 32px margin)
Mobile:    390 × 844  (grid 4 col, 16px gutter, 20px margin)
Container max-width: 1320px

================================================================
SECTION 2 — DESIGN TOKENS (Figma Variables)
================================================================

Create as Color Variables:

SURFACES
Ivory         #FAF7F2   (page background)
Cream         #F4EFE7   (secondary section)
Sand          #E8E0D2   (image placeholders)
Paper         #FFFFFF   (cards, overlays)

INK
Ink/Default   #1C1917   (headings, primary text)
Ink/Soft      #3F3A36   (body text)
Ink/Muted     #7C726B   (captions, meta)
Ink/Faint     #A89E95   (placeholders, dividers)

ACCENT
Accent/Base   #8B6F52   (the only accent — warm taupe)
Accent/Soft   #B89878   (hover states)
Accent/Wash   #EFE4D4   (chips, subtle fills)

BORDER
Line/Default  #E1D8CA
Line/Soft     #EDE6DB

FEEDBACK
Success       #4A7C59
Danger        #B03A3A
Error/Text    #B03A3A

OVERLAY
Scrim/Dark    rgba(28,25,23,0.48)
Scrim/Light   rgba(28,25,23,0.24)

Create as Number Variables:

SPACING (base-4 scale)
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

RADIUS
xs: 4    sm: 6    md: 10    lg: 16    pill: 999

DURATIONS
fast: 150ms   normal: 260ms   slow: 480ms

LAYOUT
container/max         1320
header/desktop-height 72
header/mobile-height  64
announcement/height   36
sidebar/filter-width  280
cart-drawer/width     420

Create as Effect Styles:

shadow/soft   0 1 2 rgba(28,25,23,0.04)
shadow/card   0 4 16 -4 rgba(28,25,23,0.06)
shadow/lift   0 12 32 -8 rgba(28,25,23,0.10)

No other shadows. This is a premium editorial brand.

Create as String Variables for motion:
ease/zen      cubic-bezier(0.22, 1, 0.36, 1)

================================================================
SECTION 3 — TYPOGRAPHY
================================================================

FONT FAMILIES
Display: Fraunces (weights 400, 500) — soft editorial serif
Sans:    Inter (weights 400, 500, 600)

Create as Text Styles:

display/lg     Fraunces  72 / 0.94 / -0.03em   400
display/md     Fraunces  56 / 0.98 / -0.025em  400
display/sm     Fraunces  40 / 1.02 / -0.02em   400
heading/lg     Fraunces  32 / 1.15 / -0.015em  400
heading/md     Fraunces  24 / 1.2  / -0.01em   400
heading/sm     Fraunces  20 / 1.3  / 0        500

body/lg        Inter     16 / 1.6  / 0         400
body/md        Inter     14 / 1.6  / 0         400
body/sm        Inter     13 / 1.5  / 0         400

label/eyebrow  Inter     11 / 1.0  / 0.18em    500 UPPERCASE
label/nav      Inter     13 / 1.0  / 0.02em    500
label/button   Inter     13 / 1.0  / 0.02em    500
label/meta     Inter     12 / 1.4  / 0         400

price/regular  Inter     15 / 1.2  / 0         500 tabular
price/sale     Inter     15 / 1.2  / 0         500 tabular Accent/Base

RULE: Fraunces only for headings and display. Never for buttons,
prices, navigation, or body. Inter never for headlines.

================================================================
SECTION 4 — ICONOGRAPHY
================================================================

Style: Lucide, 1.5px stroke, rounded caps and joins.
Sizes: 16 / 20 / 24 / 32.

Required icons — build as Components with color overrides:
menu, x, search, user, shopping-bag, plus, minus, trash-2, heart,
chevron-right, chevron-down, chevron-left, arrow-right, arrow-up-right,
star, zoom-in, play, check, alert-circle, loader-2, instagram,
facebook, twitter.

================================================================
SECTION 5 — COMPONENT LIBRARY
================================================================

Build every component as a Figma Component with Variants.
Naming: Component / Variant / Size / State

--- 5.1 BUTTON ---
Variants: Primary | Secondary | Ghost
Sizes:    sm (h36) | md (h44) | lg (h56)
States:   default | hover | focus | active | disabled | loading

Primary
  bg Ink/Default   text Ivory    radius Pill
  hover bg Accent/Base

Secondary
  bg transparent   border Line/Default   text Ink/Default
  hover bg Ink/Default   text Ivory   border Ink/Default

Ghost
  bg transparent   text Ink/Default
  hover text Accent/Base   underline slide (prototype)

Focus: 2px ring Accent/Base at 60%, offset 2px (all variants)

--- 5.2 INPUT ---
Variants: Text | Email | Search | Password
States:   default | hover | focus | filled | error | disabled

default  bg Paper   border Line/Default   radius md   h 48
focus    border Ink/Default   ring 2px Accent/Base 30%
error    border Danger   helper text Danger
disabled bg Cream   text Ink/Faint

--- 5.3 SECTION HEADING ---
Variants: Left | Center
Composition: [eyebrow] + Heading + [description] + [link]
Gaps: 16 above heading, 20 below heading, description max-width 640.

--- 5.4 PRODUCT CARD ---
Variants: Default | Sale | Sold Out | Quick-Add-Visible
Sizes:    Desktop | Mobile

Anatomy:
  Image container 3:4 aspect, radius sm
  Wishlist icon top-right (32×32 hit area)
  Product name — body/md, Ink/Default, 1 line ellipsis
  Descriptor — body/sm, Ink/Muted, 1 line ellipsis
  Price — price/regular   |  Sale: original struck + sale price accent
  Rating row (only if rating exists) — Star + value

Hover state (prototype):
  Image scales 1.00 → 1.03, 400ms ease/zen
  Quick-add button fades in from bottom (opacity 0 → 1)

Sold Out variant:
  Image at 60% opacity, "Sold Out" pill centered.

--- 5.5 CATEGORY CARD ---
Variants: Desktop | Mobile
Image 4:5, radius sm, bottom-left scrim
Overlay content:
  Category name (heading/sm, Ivory)
  Descriptor (body/sm, Ivory 80%)
  Arrow right icon (Ivory)
Hover: image scale 1.04, arrow slides 4px right

--- 5.6 ANNOUNCEMENT BAR ---
h 36, bg Ink/Default, text Ivory
Message centered (label/eyebrow)
Close icon top-right 24×24, Ivory at 60%

--- 5.7 NAVBAR ---
Variants: Transparent | Solid | Mobile

Desktop layout (h 72):
  Left:  nav links (label/nav) — Shop, Collections, About, Journal
  Center: ZENIVA wordmark (Fraunces 22px, tracking 0.32em)
  Right: Search, Account, Cart (with count badge)

Cart badge: 16px circle, bg Accent/Base, text Paper

--- 5.8 MOBILE MENU ---
Full-screen overlay, bg Ivory
Logo top-left, close top-right
Nav links stacked — heading/md (24px), gap 24
Divider then Account, Search, Cart row at bottom

--- 5.9 SEARCH MODAL ---
Desktop: 640 wide, centered, radius lg
Mobile: full-screen
Input top with search icon, auto-focused
Results grouped: Products / Collections / Articles
Recent searches as chips when empty
No results: centered message + "Browse shop" link

--- 5.10 CART DRAWER ---
Desktop: 420 wide, right, full-height, bg Paper
Mobile: 100vw, full-screen
Header h 72: "Cart" + item count + close
Line item (h ~112):
  Image 80×80 radius sm
  Name + variant
  Quantity stepper
  Price right-aligned
  Remove icon on hover
Footer sticky:
  Subtotal row
  Shipping note
  Primary checkout button (lg, full-width)
  Ghost "Continue shopping"

--- 5.11 PRODUCT GALLERY (PDP) ---
Desktop:
  Left column (60%): main image 4:5, thumbnails vertical 80px wide
  Right column (40%): info panel sticky
Mobile:
  Full-width swipe carousel, dots, pinch-zoom to lightbox

--- 5.12 REVIEW CARD ---
bg Cream, radius lg, padding 32
Quote in Fraunces (heading/sm), quotation glyphs
Attribution: Name (body/md 500) • Context (body/sm Muted)
Stars if present

--- 5.13 NEWSLETTER BLOCK ---
Centered max-width 560
Eyebrow + heading + one line + email input + Primary button
Row layout desktop, stacked mobile
Success: replace input row with confirmation + check
Error: input border Danger + helper text

--- 5.14 FOOTER ---
Desktop: bg Ink/Default, text Ivory
5 columns: brand (logo + line + socials) + Shop / About / Help
Bottom row separated by hairline
Copyright left, Privacy/Terms right

Mobile: stacked accordions, brand mark on top.

--- 5.15 FILTER CHIP ---
Pill h 32, bg Accent/Wash, text Ink/Default, X icon right

--- 5.16 QUANTITY STEPPER ---
Row h 40, radius md, border Line/Default
Minus 40×40 | value (body/md) | Plus 40×40

--- 5.17 ACCORDION ---
Row h 56, border-bottom Line/Soft
Label body/lg, chevron rotates 180 on expand
Content padding 20 top / 24 bottom

--- 5.18 STICKY ADD-TO-CART BAR (Mobile PDP) ---
Fixed bottom, h 72, bg Paper, shadow/soft top
Left: name (body/md, 1 line) + price
Right: Primary "Add to cart" h 44

--- 5.19 BREADCRUMB ---
Row gap 8, label/meta
Items Ink/Muted, separators / in Ink/Faint
Current page Ink/Default

================================================================
SECTION 6 — HOMEPAGE / DESKTOP (1440)
================================================================

Build a single 1440-wide frame containing these 13 sections in order,
each in its own Auto Layout container:

1.  Announcement bar (h 36)
2.  Navbar — Transparent variant over hero
3.  Hero — full-bleed, min-h 900, image cover + scrim
    Text bottom-left max-w 640: eyebrow + display/lg + body/lg + ghost CTA
4.  Brand Story — 2 col, text left / image right (4:5)
5.  Media Moment — full-width image, one centered line (display/md, Ivory)
6.  Category Grid — 4 tiles in a row, gap 24, each 4:5
7.  Bestsellers — heading + View all link, then 4 product cards in a row
8.  Product Story — image left (4:5) + 3 stacked text blocks right
9.  Lifestyle Block — full-bleed image, text bottom-left, single link
10. Reviews — centered heading, single review visible with arrows + dots
11. Journal Teaser — 3 cards in a row
12. Newsletter — centered block on Cream background
13. Footer — dark, 5 columns + bottom row

RULE: No two adjacent sections share the same composition.
Alternate image-heavy / type-heavy, Ivory / Cream, full-bleed / contained.

================================================================
SECTION 7 — HOMEPAGE / MOBILE (390)
================================================================

Same sections, recomposed:

1.  Announcement bar — truncated single line
2.  Navbar — hamburger left, wordmark center, cart right (h 64)
3.  Hero — vertical image, text bottom, CTA full-width
4.  Brand Story — image above text, stacked
5.  Media Moment — full-bleed portrait
6.  Category Grid — single column, gap 16
7.  Bestsellers — horizontal scroll with snap, 1.5 cards visible
8.  Product Story — image above text
9.  Lifestyle Block — image with overlaid text bottom
10. Reviews — single card, swipeable
11. Journal Teaser — single column stacked
12. Newsletter — input + button stacked vertically
13. Footer — brand mark + accordion groups + legal row

================================================================
SECTION 8 — SHOP LISTING
================================================================

DESKTOP (1440)
Breadcrumb → heading (heading/lg) + result count → two-column layout:
  Left: filter sidebar 280 wide
    Groups: Category (checkboxes), Price (range slider), Availability (toggle)
  Right: product grid 3 columns, gap 24
Sort dropdown above grid (right-aligned)
Pagination below grid (centered)

MOBILE (390)
Breadcrumb → heading → sticky toolbar: Filters (left) + Sort (right)
Grid: 2 columns, gap 16
Product card uses Quick-Add-Visible variant
Filter drawer: bottom sheet 80% viewport height, drag handle,
  scrollable body, fixed footer with "Clear all" + "Apply"

================================================================
SECTION 9 — PRODUCT DETAIL PAGE
================================================================

DESKTOP (1440)

Section 1 — Product Hero (min-h 800)
  Left (60%): main image 4:5 + vertical thumbnails strip (80 wide)
  Right (40%, sticky): breadcrumb, name (heading/lg), descriptor,
    rating row, price (sale if applicable), variant chips, quantity
    stepper, Primary "Add to cart" (full-width), wishlist ghost,
    shipping note (body/sm)

Section 2 — The Story (image + paragraph, two-column)
Section 3 — Why You'll Love It (numbered list, centered)
Section 4 — How to Use (numbered steps)
Section 5 — What's Inside (definition list)
Section 6 — Shipping & Returns (two accordions)
Section 7 — Reviews (full-width carousel)
Section 8 — Related Products (4 product cards)
Section 9 — Newsletter
Section 10 — Footer

MOBILE (390)
Gallery swipe + dots, info stacked, variant chips horizontal scroll,
sticky add-to-cart bar appears on scroll, all story sections stacked.

================================================================
SECTION 10 — OVERLAYS
================================================================

CART DRAWER
Desktop: 420 wide, right-aligned, full height, backdrop Scrim/Dark
Mobile: 100vw full-screen

SEARCH MODAL
Desktop: 640 wide centered
Mobile: full-screen

MOBILE MENU
Full-screen Ivory

Each overlay must have:
- An open state frame
- A closed state (default page)
- Prototype connection between them
- Backdrop frame behind

================================================================
SECTION 11 — EMPTY & ERROR STATES
================================================================

Design each as a standalone screen:

- Cart empty
- Search no results
- Shop no results (after filtering)
- Newsletter error
- Newsletter success
- 404 page
- 500 page

Each: centered icon (48px, Ink/Muted), heading (heading/md),
one line of body copy (body/md, Ink/Muted), single Primary CTA.

================================================================
SECTION 12 — PROTOTYPE FLOWS
================================================================

Wire these flows in Prototype mode:

FLOW A — Discover to purchase
Homepage → Category tile → Shop (filtered) → Product card →
PDP → Add to cart → Cart drawer → Checkout

FLOW B — Search to product
Any page → Search icon → Search modal opens → Type query →
Results appear → Arrow + Enter → PDP

FLOW C — Mobile navigation
Mobile page → Hamburger → Menu slides in → Tap "Shop" →
Shop mobile loads → Menu closes

FLOW D — Cart round trip
PDP → Add to cart → Drawer opens → Change quantity →
Remove item → Continue shopping → Drawer closes

FLOW E — Newsletter
Homepage → Newsletter section → Invalid email → Error state →
Valid email → Success state

FLOW F — Filters
Shop mobile → Open filter drawer → Select category + price →
Apply → Grid updates → Chips visible → Remove chip → Grid updates

All overlay animations: Smart Animate
Duration: 260ms for overlays, 400ms for page-level transitions
Easing: cubic-bezier(0.22, 1, 0.36, 1)

================================================================
SECTION 13 — MOTION SPECS
================================================================

Document each of these as a motion spec frame with annotated states:

NAVBAR SCROLL
  Transparent → Solid
  400ms ease-out
  Animate: background-color, border, backdrop-blur

MOBILE MENU
  Slide from left, 260ms ease/zen
  Content fades in, 100ms delay

CART DRAWER
  Slide from right, 300ms ease/zen
  Backdrop fade, 200ms in parallel

SEARCH MODAL
  Scale 0.96 → 1, opacity 0 → 1, 220ms ease/zen

PRODUCT CARD HOVER
  Image 1.00 → 1.03, 400ms ease-out
  Quick-add fade + slide-up 8px, 200ms ease-out

BUTTON HOVER
  Background crossfade, 180ms linear

LINK HOVER
  Underline slide right-to-left, 240ms ease/zen

SECTION ENTRANCE
  Fade up 24px, 700ms ease/zen, once per section

CART BADGE POP
  Scale 1 → 1.2 → 1, 260ms

ACCORDION EXPAND
  Height transition, 240ms ease-out
  Chevron rotate 0 → 180

REDUCED-MOTION
  All animations become 0ms. Note this in a side panel.

================================================================
SECTION 14 — ACCESSIBILITY NOTES
================================================================

For every interactive frame, add a redlined side panel with:

- Tab order (numbered)
- Alt text for every image
- ARIA role for custom components
  drawer = dialog
  modal = dialog
  mobile menu = navigation
- Focus ring style: 2px Accent/Base at 60%, offset 2px

CONTRAST CHECKS (annotate pass/fail)
Ink/Default on Ivory      — must pass AA
Ink/Muted on Ivory        — must pass AA
Ivory on Ink/Default      — must pass AA
Ivory on Accent/Base      — must pass AA
Danger on Ivory           — must pass AA

================================================================
SECTION 15 — HANDOFF
================================================================

Create a Handoff page containing:

- Table mapping Figma Variables → CSS variable names
- Table mapping components → React component file paths
- Motion tokens with cubic-bezier values
- Breakpoints: 375 / 768 / 1024 / 1280 / 1440
- Component variants matrix
- Dev notes for any deviation from this spec

================================================================
QUALITY CHECKLIST — verify before finishing
================================================================

VISUAL
[ ] Only variables used — no hardcoded hex
[ ] Typography follows the scale exactly
[ ] Spacing follows base-4 scale
[ ] Only three shadow styles present
[ ] Whitespace is generous — sections breathe

COMPONENTS
[ ] Every component has all variants
[ ] Every variant has all states
[ ] Every fill/stroke/text references a Style or Variable
[ ] Instances used everywhere, no detachments

SCREENS
[ ] All sections of homepage exist (desktop + mobile)
[ ] Shop desktop + mobile
[ ] PDP desktop + mobile
[ ] Cart drawer, search modal, mobile menu
[ ] Empty states for cart, search, shop, 404
[ ] Error + success states for newsletter

PROTOTYPE
[ ] All six flows wired
[ ] Overlay animations specified
[ ] Backdrop behavior documented

ACCESSIBILITY
[ ] Tab order documented on every screen
[ ] Alt text written for every image
[ ] ARIA roles noted
[ ] Focus ring specified
[ ] Reduced-motion variant noted

HANDOFF
[ ] Dev notes page complete
[ ] Naming is consistent
[ ] No orphan layers or unused styles

================================================================
FINAL RULE
================================================================

A premium design file is premium because of restraint. When in doubt:

- Remove, don't add.
- Choose the smaller type size.
- Use less color.
- Increase whitespace.

Every screen should feel like it could belong to a brand that sells
one thoughtful product and does it perfectly. That is the bar.
Nothing less.

================================================================
END OF FIGMA AI PROMPT
================================================================