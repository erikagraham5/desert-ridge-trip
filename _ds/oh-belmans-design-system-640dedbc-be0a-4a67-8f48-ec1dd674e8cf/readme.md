# Oh Belmans — Design System

A vibrant **claymation-meets-data** design system for Oh Belmans, a GTM data-orchestration platform. The system anchors on a warm cream canvas, near-black ink and CTAs, a rounded display voice, and saturated single-color feature cards that punctuate long-scroll explainer pages.

> **Source note.** This system was built from a written brand/design specification (tokens, type scale, component inventory) — no codebase or Figma file was attached. The aesthetic direction (warm cream canvas + saturated feature cards + 3D claymation art) is inspired by the GTM-data category; all brand assets here (logo, wordmark, illustrations) are **original placeholders** for Oh Belmans, not reproductions of any third party. Replace the claymation illustration placeholders with commissioned 3D renders.

---

## The system at a glance

- **Canvas:** warm cream `#fffaf0` — the single most defining choice. Never cool gray. Even the footer stays cream.
- **Ink & CTAs:** near-black `#0a0a0a`, buttons rounded 12px.
- **Feature cards:** 6 saturated surfaces (pink, teal, lavender, peach, ochre, cream). Cycle them down a page; never repeat one twice in a row.
- **Type:** rounded display voice (Plain Black → substituted with Inter 500 + negative tracking) for headlines; Inter for everything else.
- **Depth:** almost no shadow. Depth comes from saturated color against cream.
- **Illustration:** 3D claymation mountains/characters as hero artifacts — the brand's loudest signal.

---

## Content fundamentals

**Voice.** Confident, plainspoken, operator-to-operator. Short declarative headlines ("Go to market with unique data", "Start free. Scale when you do."). Benefit-first, never feature-listy in the hero.

**Person.** Speaks to **you** (the GTM team); the product is **Oh Belmans** / "Belmans". First person plural ("we") only in legal/footer.

**Casing.** Sentence case everywhere except the tracked uppercase eyebrow labels (`caption-uppercase`, e.g. "ONE PLATFORM", "FEATURED"). Never title-case headlines.

**Tone words.** Fast, unique, automatic, in one canvas, on autopilot. Avoids hype-adjacent filler and exclamation marks.

**Emoji.** None. The warmth comes from color and illustration, not emoji.

**Numbers.** Used sparingly and only when real ("Trusted by 5,000+ teams", "100+ data providers"). No invented stat-slop.

**Examples.**
- Hero h1: *"Go to market with unique data"*
- Sub: *"Oh Belmans pulls every signal about every account into one canvas — then lets agents enrich, score and sequence it automatically."*
- CTA band: *"Turn your growth ideas into reality today"*
- Buttons: *"Start for free"*, *"Book a demo"*, *"Contact sales"*

---

## Visual foundations

**Color.** Cream canvas floor (`--canvas`), cream surface ramp (`--surface-soft` → `--surface-strong`) for bands and footers, near-black ink. Brand voltage is 6 saturated feature-card fills plus mint/coral accents. Text auto-flips to white on pink/teal; stays ink on lavender/peach/ochre/cream.

**Type.** Display = `--font-display` (Inter 500 substitute) at 32–72px with **negative letter-spacing** (-0.5 to -2.5px) — never heavier than 500. Body/UI = Inter 400/500/600. The display-vs-body split is a hard rule: display weight stays 500, body never borrows display tracking.

**Spacing.** 4px base unit; 96px (`--space-section`) rhythm between major bands; 32px feature-card padding, 24px for testimonial/mockup cards. Max content width 1280px, centered.

**Backgrounds.** Flat cream — no gradients, no full-bleed photos, no repeating texture. The "imagery" is 3D claymation art (warm-lit, rounded, hand-crafted look) placed as discrete artifacts, not backgrounds.

**Corner radii.** Generous and tied to scale: 12px buttons/inputs, 16px content cards, 24px feature cards, pill for tabs/badges. The big radius matches the rounded display character.

**Borders.** 1px hairline `#e5e5e5` on inputs and light content cards only. Saturated cards have no border.

**Shadows.** Essentially none. `--shadow-hover` (low-alpha, 8% black) exists for the rare hover lift; otherwise depth = color contrast.

**Cards.** Saturated feature card = colored fill, 24px radius, 32px padding, no shadow, no border. Cream/content card = `--surface-card` fill or cream + hairline, 16px radius.

**Hover.** Buttons darken (primary → `--primary-active`) or shift to a soft cream; text links drop to ~0.7 opacity; nav links move muted→ink. No scale, no glow.

**Press.** Color shift only (no shrink animation documented).

**Animation.** Quiet. 120ms ease color/border transitions on interactive elements. The only documented motion is subtle. No bounce, no decorative loops. (3D illustration parallax exists on the real site but is out of token scope.)

**Transparency / blur.** Used only inside saturated cards (white at low alpha for embedded UI fragments). No glassmorphism on the page chrome.

**Imagery vibe.** Warm, saturated, rounded, hand-crafted 3D. No black-and-white, no grain, no cool tones.

---

## Iconography

- **Approach:** simple line icons at ~2px stroke, rounded caps/joins — matching the warm-but-clean character. No filled/duotone icon system, no emoji, no unicode-as-icon.
- **In this system:** inline SVG line icons are used directly in cards and components (arrow, plus, mail, check). There is no bundled icon font.
- **Recommendation for consumers:** use **Lucide** (https://lucide.dev) — 2px stroke, rounded joins — as the closest CDN-available match to the in-house line style. *(Substitution flagged: no proprietary icon set was provided.)*
- **Logo/illustration:** `assets/logo.svg` (mark) and `assets/wordmark.svg` are original Oh Belmans placeholders. Claymation hero/footer art is represented by CSS placeholders in the UI kit — swap for commissioned renders.

---

## Font substitution (action needed)

Plain Black is licensed and not publicly available. Display type is substituted with **Inter weight 500 + negative tracking** (the spec's documented fallback). If you have a Plain Black (or Söhne Breit / Recoleta) license, drop the `.woff2` files into `tokens/` and update the `@font-face` / `--font-display` in `tokens/fonts.css`.

---

## Index / manifest

**Tokens** (`tokens/`, all imported by root `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css`

**Components** (`components/`)
- `buttons/` — Button, IconButton
- `forms/` — Input, Field
- `display/` — Badge, CategoryTab, Avatar
- `cards/` — FeatureCard, TestimonialCard, PricingCard
- `navigation/` — TopNav

**Foundation cards** (`guidelines/*.card.html`) — Colors, Type, Spacing, Brand specimen cards shown in the Design System tab.

**UI kits** (`ui_kits/`)
- `marketing/` — full landing page (Hero, FeatureGrid, Testimonials, Pricing, CtaFooter).

**Templates** (`templates/`)
- `landing-page/` — a starter landing page DC consuming this system.

**Assets** (`assets/`) — `logo.svg`, `wordmark.svg`.

**Other** — `SKILL.md` (Agent Skill wrapper), `styles.css` (consumer entry point).

> Component API and usage live in each component's `.prompt.md`. The compiler generates `_ds_bundle.js` / `_ds_manifest.json` — do not edit those.
