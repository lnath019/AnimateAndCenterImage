================================================================
ZENIVA — PHASE 1: DESIGN SYSTEM + HOMEPAGE LOCK
================================================================

CONTEXT
The file currently has a homepage with 13 sections built directly
from raw layers. Nothing has been formalised into Variables or
Components. This phase fixes that and locks the homepage as the
visual reference for every later screen.

GOAL
1. Extract every visual decision into Figma Variables.
2. Extract every repeated element into a Component.
3. Rebuild the homepage using only Variables + Component instances.
4. Keep the visual result identical to what exists now — this is a
   refactor, not a redesign.

================================================================
PART A — VARIABLES
================================================================

Create as Color Variables with scopes:

SURFACES
  surface/ivory    #FAF7F2
  surface/cream    #F4EFE7
  surface/sand     #E8E0D2
  surface/paper    #FFFFFF

INK
  ink/default      #1C1917
  ink/soft         #3F3A36
  ink/muted        #7C726B
  ink/faint        #A89E95

ACCENT
  accent/base      #8B6F52
  accent/soft      #B89878
  accent/wash      #EFE4D4

BORDER
  line/default     #E1D8CA
  line/soft        #EDE6DB

FEEDBACK
  feedback/success #4A7C59
  feedback/danger  #B03A3A

OVERLAY
  scrim/dark       rgba(28,25,23,0.48)
  scrim/light      rgba(28,25,23,0.24)

Create as Number Variables:

SPACING  4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
RADIUS   xs=4, sm=6, md=10, lg=16, pill=999
DURATION fast=150, normal=260, slow=480
LAYOUT   container=1320, header-desktop=72, header-mobile=64,
         announcement=36, sidebar=280, drawer=420

Create as String Variable:
  ease/zen = cubic-bezier(0.22, 1, 0.36, 1)

Create as Effect Styles:
  shadow/soft   0 1 2 rgba(28,25,23,0.04)
  shadow/card   0 4 16 -4 rgba(28,25,23,0.06)
  shadow/lift   0 12 32 -8 rgba(28,25,23,0.10)

Apply each variable to every existing layer that currently uses a
hardcoded value. When done, searching the file for `#` should return
zero results in the homepage frame.

================================================================
PART B — TYPOGRAPHY STYLES
================================================================

Fonts: Fraunces (display) + Inter (sans). Both must be loaded in
the Figma file (Figma → Assets → Fonts).

Create text styles:

  display/lg    Fraunces  72 / 0.94 / -0.03em / 400
  display/md    Fraunces  56 / 0.98 / -0.025em / 400
  display/sm    Fraunces  40 / 1.02 / -0.02em / 400
  heading/lg    Fraunces  32 / 1.15 / -0.015em / 400
  heading/md    Fraunces  24 / 1.2  / -0.01em / 400
  heading/sm    Fraunces  20 / 1.3  / 0 / 500
  body/lg       Inter     16 / 1.6  / 0 / 400
  body/md       Inter     14 / 1.6  / 0 / 400
  body/sm       Inter     13 / 1.5  / 0 / 400
  label/eyebrow Inter     11 / 1.0  / 0.18em / 500 / UPPERCASE
  label/nav     Inter     13 / 1.0  / 0.02em / 500
  label/button  Inter     13 / 1.0  / 0.02em / 500
  label/meta    Inter     12 / 1.4  / 0 / 400
  price/regular Inter     15 / 1.2  / 0 / 500 / tabular
  price/sale    Inter     15 / 1.2  / 0 / 500 / tabular / accent

Apply to every text layer in the homepage. Verify by opening the
Typography panel — every text layer must show a style name, not
"Mixed" or a manual override.

================================================================
PART C — COMPONENTS
================================================================

Extract these from the homepage. Each must be a Figma Component
with Variants. Name them:

  Button             variants: primary / secondary / ghost
                     sizes: sm / md / lg
                     states: default / hover / focus / disabled

  SectionHeading     variants: left / center

  ProductCard        variants: default / sale
                     sizes: desktop / mobile

  CategoryCard       variants: desktop / mobile

  ReviewCard

  JournalCard

  NewsletterBlock    variants: default / success / error

  FooterColumn

  NavLink            states: default / active / hover

  AnnouncementBar    variants: visible / dismissed

  Navbar             variants: transparent / solid / mobile

Rules:
- Every color fill in a component must be a Variable, not a hex.
- Every text in a component must be a Text Style.
- Every size and spacing must reference a Number Variable.
- Variants must be built with Figma's Variant system — no duplicate
  components with different names.

================================================================
PART D — REBUILD THE HOMEPAGE
================================================================

Rebuild the homepage frame using ONLY:
- Component instances (no detached copies)
- Variables for every fill, stroke, and size
- Text Styles for every text layer

Keep the exact visual result. The rebuild should look identical
to the current homepage — if it doesn't, revert and try again.

Section order (unchanged):
  1.  Announcement bar
  2.  Navbar (transparent)
  3.  Hero
  4.  Brand Story
  5.  Media Moment
  6.  Category Grid
  7.  Bestsellers
  8.  Product Story
  9.  Lifestyle Block
 10.  Reviews
 11.  Journal Teaser
 12.  Newsletter
 13.  Footer

================================================================
DELIVERABLE
================================================================

At the end of this phase the file must have:
- A "Tokens" page listing every Variable in a table
- A "Components" page listing every Component with its variants
- A "Homepage" frame that uses only instances and variables
- Zero hardcoded hex values in the homepage
- Zero "Mixed" text styles

Do not add any new section, screen, or element.
Do not redesign anything.

STOP after the homepage rebuild. Do not build Shop, PDP, or overlays.

================================================================
END OF PHASE 1 PROMPT
================================================================