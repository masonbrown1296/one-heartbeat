# One Heartbeat Warriors — Design System

A reference guide for creating graphics, social posts, flyers, presentations,
and any visual content that matches the One Heartbeat Warriors brand.

**How to use this document:** Paste it into Claude, ChatGPT, or any AI design
tool as context, then describe what you want designed. The AI will produce
on-brand visuals automatically.

---

## 1 · Brand Identity

**Name:** One Heartbeat Warriors
**Founder:** Coach Tommy Brown
**Domain:** oneheartbeatwarriors.com

**What it is:** Mental toughness, leadership, and warrior culture training
for athletic teams, coaches, and organizations. Built by a former NCAA head
coach with 30+ years in the gym.

**Voice in three words:** Direct. Confident. Grounded.

**The feeling the brand should evoke:**
- Discipline and mental strength — not hype
- Built-in-the-gym authority — not corporate
- Warrior energy — but never cartoonish or aggressive
- Grit + empathy, both sides of the coin

**What this brand is NOT:**
- Not flashy motivational-poster energy
- Not Instagram-influencer bright
- Not military/tactical aesthetic
- Not academic or therapy-softened

---

## 2 · Color Palette

### Primary — Deep Navy
The dominant color. Used for backgrounds, heading text, structural elements.
Authoritative, grounded, serious.

| Name       | Hex       | Use                                        |
|------------|-----------|--------------------------------------------|
| Navy 950   | `#040D1A` | Deepest background, hero overlays          |
| Navy 900   | `#081424` | Primary dark background                    |
| Navy 800   | `#0B1829` | Dark section backgrounds                   |
| Navy 700   | `#0F2040` | Cards on dark surfaces                     |
| Navy 600   | `#152B52` | Lighter navy for accents                   |
| Navy 500   | `#1C3464` | Lightest navy                              |

### Accent — Orange
Used sparingly. Never fills a whole background. Reserved for CTAs,
highlights, accent bars, and the sword in the logo.

| Name        | Hex       | Use                                      |
|-------------|-----------|------------------------------------------|
| Orange 700  | `#C2500A` | Deepest orange, gradient endpoints       |
| Orange 600  | `#E0620C` | Hover states                             |
| Orange 500  | `#F97316` | **Primary orange — buttons, accents**    |
| Orange 400  | `#FB923C` | Lighter orange, gradients                |
| Orange 300  | `#FCA26B` | Soft orange                              |
| Orange 100  | `#FFF0E6` | Orange tint background                   |

### Neutrals
| Name      | Hex       | Use                               |
|-----------|-----------|-----------------------------------|
| White     | `#FFFFFF` | Clean backgrounds, white text     |
| Gray 50   | `#F8FAFC` | Off-white section backgrounds     |
| Gray 100  | `#F1F5F9` | Subtle dividers                   |
| Gray 400  | `#94A3B8` | Muted text                        |
| Gray 500  | `#64748B` | Body text on light                |
| Gray 600  | `#475569` | Secondary body text               |
| Gray 800  | `#1E293B` | Primary body text on light        |

### Color Usage Rules
- **60–30–10 rule:** ~60% navy or white backgrounds, ~30% neutrals and
  supporting navy variants, ~10% orange accents.
- **Never use orange as a full background** except in one deliberate
  gradient block (orange-600 → orange-500).
- Navy + white is the default pair. Orange is the spice, not the meal.
- Dark navy on light surfaces and white on dark navy. Keep contrast high.

---

## 3 · Typography

### Display Font — Barlow Condensed
Used for all headlines, section titles, buttons, and anywhere the brand
voice needs to feel bold and condensed.

- **Weight 900 (Black)** — Hero headlines, section titles
- **Weight 800 (Extra Bold)** — Sub-headlines, card titles
- **Weight 700 (Bold)** — Button text, labels
- **UPPERCASE** for all display text — always.
- **Letter-spacing:** slightly wider for small text (eyebrow labels: +4px to +6px), tighter or default for huge headlines.
- **Line-height:** 1.05–1.15 for headlines.

### Body Font — Inter
Used for all body copy, descriptions, and any sentence-case text.
Clean, modern, readable.

- **Weight 500** — Default body text
- **Weight 700** — Emphasis, small labels
- Sentence case, not uppercase, unless it's a label.
- **Line-height:** 1.6–1.75 for readable paragraphs.

### Typography Hierarchy Example
```
EYEBROW LABEL           ← Barlow Condensed 700, uppercase, orange, small
BIG BOLD HEADLINE       ← Barlow Condensed 900, uppercase, navy or white
Normal supporting copy  ← Inter 500, gray/white, sentence case
CREDIT OR METADATA      ← Inter 700, uppercase, small, muted
```

### Rules
- Never mix serif fonts in.
- Italics only for *quoted testimonials*, never for emphasis in body.
- Number-heavy content uses Inter, not Barlow.

---

## 4 · Logo

### The Mark (Sword Symbol)
A vertical crown-and-sword icon in navy with a vertical orange gradient
blade (top `#F5782B` → bottom `#FF4700`). SVG files in the site's
`/public/` folder:

- `ohb-symbol-color.svg` — full-color logo symbol
- `ohb-logo-white-colorsword.svg` — white wordmark with colored sword
- `ohb-logo-white.svg` — all-white version for dark backgrounds

### Usage
- **Minimum size:** 24px tall (symbol only)
- **Clear space:** At least the height of the sword's crown all around
- **Never:** recolor the orange blade, stretch, rotate, add effects, drop
  shadow, or place on a busy photo without a solid backdrop
- **On navy backgrounds:** use the white version
- **On white/light backgrounds:** use the navy/color version

---

## 5 · Visual Patterns

### The Orange Accent Bar
A 3rem × 4px pure orange rectangle placed directly below a section label
or headline. Signature element — use it often.
- Color: `#F97316`
- Dimensions: ~48px × 4px
- Placement: below eyebrow labels, above or below headlines

### Diagonal Texture
Subtle -45° diagonal stripes at very low opacity (`rgba(255,255,255,0.015)`
to `0.03`) over navy backgrounds. Adds texture without noise. Don't overuse.

### Gradients
- **Navy gradient:** `#0F2040 → #152B52 → #1C3464` at 135° (for placeholder
  backgrounds)
- **Orange gradient:** `#E0620C → #F97316` or `#F5782B → #FF4700` at 135°
  (reserved for the one "warm" section, the sword, and button shadows)

### Card Style
- White background, 12px border-radius, soft shadow
- On hover: lifts 5px, shadow grows
- Dark variant: navy-700 with 1px white-5% border

### Buttons
- **Primary:** orange fill, white text, orange glow shadow. For the main action.
- **Outline:** transparent with orange border and orange text. Secondary.
- **White:** white fill with navy text. Used on orange/dark sections only.
- All buttons: uppercase Barlow Condensed 700, 0.08em letter spacing.

### Shadows
- `shadow-sm` — barely-there subtle depth
- `shadow-md` — cards at rest
- `shadow-lg` — elevated cards, modals, hover states
- `shadow-orange` — around primary buttons only (orange glow)

---

## 6 · Photography Style

When using real photos (team sessions, portraits, etc.):

- **Composition:** Straightforward and honest. No heavily staged stock shots.
- **Color treatment:** Natural color. Occasionally darkened with a navy
  gradient overlay for text legibility.
- **Subjects:** Real teams, real coaches, real moments. Never posed smiling
  stock models.
- **Cropping:** Landscape-heavy. Wide shots that show scale (a gym, a team
  huddle, a speaking stage).
- **Overlay:** When placing text over a photo, use a navy-900 gradient at
  70–85% opacity from the text side so the image fades behind the copy.

---

## 7 · Voice & Messaging

### Core themes (use these in headlines):
- Warrior Culture
- Mental Toughness
- The 10 Qualities of a Warrior
- Grit and Empathy
- Team First, The Mind Leads
- Pitbull Mentality
- One Heartbeat

### Headline tone
Short. Declarative. Often ends in a period. No em-dashes in headlines.
No question marks. No cliché sports phrases ("grind", "level up", "elite").

**Good headline examples:**
- "Warrior Culture."
- "Build Warriors. Not Just Athletes."
- "The Mind Leads. The Body Follows."
- "Mental Toughness Isn't a Buzzword."
- "Grit. Empathy. Both."

**Bad headline examples (avoid):**
- "Unleash Your Inner Champion!" (too hype)
- "Transform Your Team Today" (corporate speak)
- "Are You Ready to WIN?" (hype + question)
- "Level Up Your Mental Game 💪" (cliché + emoji)

### Body copy tone
Direct. Confident. No filler. Contractions okay. Writes like a coach talks.
If a sentence doesn't need to be there, delete it.

---

## 8 · Common Graphic Templates

### Social post — Quote card (1080 × 1080)
- Navy 900 background
- Orange accent bar top-left
- Large quote in Barlow Condensed 900 uppercase (white)
- Attribution: "— COACH TOMMY BROWN" in Inter 700 uppercase, orange, bottom-left
- Small logo in bottom-right

### Social post — Event announcement (1080 × 1080)
- Split layout: left half navy, right half white
- Left: Event type label (orange, small caps), date in giant Barlow 900
- Right: Event name, location, CTA in Inter
- Orange accent bar between halves

### Flyer / poster (portrait)
- Top 2/3: Hero photo with navy gradient overlay from bottom
- Bottom 1/3: Navy 900 panel with headline + details
- Orange bar connecting the two halves
- Logo top-left or bottom-right

### Presentation slide
- Navy 900 background OR pure white
- Max 7 words per title
- Headline uses Barlow Condensed 900, one orange accent word
- Sub-points use Inter 500
- Logo bottom-right, small

### Book / product mockup
- White or light gray background
- Product centered with soft shadow
- Headline above or beside in Barlow Condensed
- Orange CTA button below

---

## 9 · Spacing & Layout

- **Container max-width:** 1200px
- **Section padding:** 80–112px vertical, 20–40px horizontal
- **Border radius:** 4px (buttons) / 8px (inputs) / 12px (cards) / 20px (big containers)
- **Grid gap:** 16–24px between items
- Generous whitespace above and below headlines. Don't cram.

---

## 10 · Quick Reference — AI Prompt Template

When asking Claude or another AI to create a graphic, start with:

> *"Create a [social post / flyer / slide / etc.] for One Heartbeat Warriors,
> a mental toughness and leadership training brand. Use the attached design
> system. The graphic should say [headline]. Include [any specific elements].
> Use Barlow Condensed for display text and Inter for body. Navy (#0B1829)
> dominant, orange (#F97316) as accent only. Editorial, confident tone —
> not flashy or hype-y."*

Attach this document as context and the output will be on-brand.

---

*Version 1 — April 2026*
