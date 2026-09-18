================================================================
ZENIVA — PHASE 2: SHOP, PDP, OVERLAYS
================================================================

PREREQUISITE
Phase 1 is complete. Tokens, Text Styles, and Components exist.
The homepage uses only instances and variables.

GOAL
Build the three screens the brief requires but the current file
does not have: Shop listing, Product Detail, and the three
overlay surfaces.

All three must reuse the components from Phase 1. Do not create
new components unless a piece doesn't exist yet.

================================================================
SCREEN 1 — SHOP LISTING
================================================================

Desktop frame 1440, sections top to bottom:

  Breadcrumb (Home / Shop)
  Section heading — "Shop" (heading/lg) + result count (body/md)
  Two-column layout:
    Left: Filter sidebar (280 wide)
      Groups:
        Category  — 4 checkboxes, gap 12
        Price     — range slider + min/max labels
        Availability — single toggle
      Each group: label/eyebrow heading + list
    Right: Product grid
      3 columns, gap 24
      Reuse ProductCard (default variant) instances
  Sort row above grid: right-aligned dropdown
  Pagination below grid: centered, 5 numbered buttons + arrows

Mobile frame 390:
  Breadcrumb
  Heading (stacked)
  Sticky toolbar: Filters button left, Sort button right
  Grid: 2 columns, gap 16
  Reuse ProductCard (mobile variant) instances
  Filter drawer as a separate component frame:
    Bottom sheet, 80% viewport height
    Drag handle at top
    Scrollable body with same 3 groups
    Fixed footer: "Clear all" ghost + "Apply" primary

================================================================
SCREEN 2 — PRODUCT DETAIL
================================================================

Desktop frame 1440, sections top to bottom:

  Section 1 — Product Hero (min-height 800)
    Left 60%:
      Main image 4:5
      Vertical thumbnail strip (80 wide, 4 thumbs)
    Right 40% (sticky when scrolled):
      Breadcrumb
      Product name (heading/lg)
      Descriptor (body/md)
      Rating row — 5 stars + count
      Price (price/regular), sale price if applicable
      Variant chips — 3 options
      Quantity stepper — reuse component
      Primary Button "Add to cart" (full width of panel)
      Ghost Button "Save to wishlist"
      Shipping note (body/sm)

  Section 2 — The Story
    Two-column: image 4:5 left, paragraph right

  Section 3 — Why You'll Love It
    Centered, 3 numbered items

  Section 4 — How to Use
    4 numbered steps, stacked

  Section 5 — What's Inside
    Definition list, 6 rows

  Section 6 — Shipping & Returns
    Two Accordion components stacked

  Section 7 — Reviews
    Centered heading + 2 ReviewCard instances side by side

  Section 8 — Related Products
    4 ProductCard instances in a row

  Section 9 — Newsletter
    Reuse NewsletterBlock component

  Section 10 — Footer
    Reuse Footer component

Mobile frame 390:
  Gallery swipe carousel, 4:5, dots below
  Info stacked below gallery
  Variant chips horizontal scroll
  Sticky Add-to-cart bar (build as new component):
    Fixed bottom, h 72, surface/paper, shadow/soft top
    Left: product name (body/md) + price
    Right: primary Button "Add to cart" h 44

================================================================
SCREEN 3 — OVERLAYS
================================================================

Build each as a standalone frame with an accompanying backdrop frame.

CART DRAWER
  Desktop: 420 wide, right-aligned, full viewport height
  Mobile: 100vw, full-screen
  Header h 72: "Cart" heading/md + item count + close icon
  Line items (build as component CartLineItem):
    Image 80×80, radius sm
    Name (body/md) + variant (body/sm, ink/muted)
    Quantity stepper (reuse)
    Price right-aligned (price/regular)
  Footer sticky:
    Subtotal row
    Shipping note
    Primary Button "Checkout" (lg, full width)
    Ghost Button "Continue shopping"
  Show 3 variants:
    cart-empty
    cart-one-item
    cart-multiple-items

SEARCH MODAL
  Desktop: 640 wide, centered, radius lg
  Mobile: full-screen
  Input with search icon at top (auto-focused state shown)
  Results grouped: Products / Collections / Articles
  Recent searches: chip row when empty
  Show 3 variants:
    search-empty (recent searches visible)
    search-results (populated)
    search-no-results (empty message + link)

MOBILE MENU
  Full-screen overlay, surface/ivory
  Logo top-left, close top-right
  Nav links stacked, heading/md, gap 24
  Divider
  Row at bottom: Account, Search, Cart

================================================================
DELIVERABLE
================================================================

- Shop desktop frame
- Shop mobile frame + filter drawer frame
- PDP desktop frame
- PDP mobile frame + sticky add-to-cart component
- Cart drawer with 3 state variants
- Search modal with 3 state variants
- Mobile menu frame

All frames must use only Variables and Component instances from
Phase 1. Any new component you build must follow the same rules
(variants, variables, text styles).

STOP after these screens. Do not build prototype wiring yet.

================================================================
END OF PHASE 2 PROMPT
================================================================