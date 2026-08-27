# Povkh.Dev Russian design system

Date: 2026-08-27  
Status: approved by user on 2026-08-27  
Scope: Russian surface first; English and Italian synchronization remains a later packet

## 1. Outcome

Redesign the complete Russian Povkh.Dev surface as one authorial black-and-pink system that feels precise, premium and unmistakably digital. The system combines an evidence-led content structure with a controlled experimental layer.

The redesign must preserve every existing public route, text, fact, link, CTA, case and case asset. It may change hierarchy, layout, typography, color, components, navigation presentation, responsive behavior and motion. It must not rewrite, shorten, remove or invent content.

The visual balance is:

- 55% evidence system: legibility, hierarchy, real case material, clear sequence and restrained components.
- 45% digital punk: scale shifts, hot-pink signals, the signature mark and the homepage glyph interaction.

## 2. Approved decisions

### Identity

The primary mark is a strict geometric symbol:

- one open visual node represented by a circular ring;
- one solid core inside the ring;
- three asymmetric signal strokes on the right: short upper, horizontal middle and longer lower diagonal;
- no strokes on the left;
- no resemblance-building additions such as a handle, bowl or enclosing eye.

The static mark is a clean vector. It must work in one color at favicon size before any motion is considered. The existing `Povkh.Dev` wordmark remains available as the textual brand identifier.

Palantir is a reference for elemental clarity, whitespace and silhouette strength, not a shape source. The Palantir circle-over-bowl composition must not be copied.

### Homepage signature interaction

The homepage includes a separate interactive art zone containing a three-dimensional field of tiny glyphs. Users drag the field to rotate it. Near the intended viewing angle, a soft snap aligns the layers into the approved mark. The interaction is optional and never blocks reading, navigation or conversion.

The glyph field follows these material rules:

- use dense microtypography, not evenly spaced circular particles;
- use ASCII characters such as `+`, `/`, `\\`, `|`, `:`, `.`, `*`, `#` and `%`;
- vary character, opacity, scale and depth to create a printed volume rather than an LED outline;
- use off-white as the main glyph color and hot pink selectively;
- do not apply strong neon glow;
- do not place loose decorative ASCII strings around the object;
- do not add labels such as `FIELD DEPTH`, `ANGLE LOCK`, coordinates, statuses, commands or fictitious metrics;
- when aligned, the glyph volume must form a clear silhouette; the central core remains a simple solid shape.

### Protected reading zone

Primary text and decorative graphics must never overlap.

- Desktop: the hero uses two explicit areas. Existing copy and CTA occupy the left area; the interactive object occupies the right area.
- Mobile: existing copy and CTA appear first; the interactive object becomes a separate block below them.
- No glyph, line, image, glow or motion may pass behind the heading, paragraph, CTA or navigation.
- The copy area keeps an opaque background and remains readable when the interaction fails or is disabled.

### Distribution across the site

The full interaction appears only on `/ru/`. Inner pages use the static mark and restrained derivations: cropped glyph texture, line fragments or small transitions contained inside non-text regions. Inner pages must not repeat the draggable hero.

## 3. References and reference lock

Primary quality reference: [POVKH LAB](https://alessandropovkh.github.io/POVKH-LAB/). Preserve its confidence, interface density and disciplined relationship between a large visual object and small technical typography. Do not copy its music HUD, red palette, labels, coordinate rails or audio interface.

Identity reference: [Palantir](https://www.palantir.com/). Preserve elemental geometry, a memorable one-color silhouette and generous negative space. Do not copy its symbol geometry.

Supporting references:

- [Koto](https://koto.studio/): bold brand scale and controlled visual energy.
- [COLLINS](https://wearecollins.com/): concise confidence and strong typographic hierarchy.
- [Locomotive](https://locomotive.ca/en): case-led storytelling and interaction used as a narrative device.

Refero MCP was unavailable during exploration. The direction is therefore locked from public primary references, the live POVKH LAB surface, the current Povkh.Dev implementation and the user's selected visual comparisons.

Reject:

- generic dark SaaS cards;
- rounded glassmorphism as the dominant system;
- endless card grids;
- LED dots, particle beads and gaming glow;
- fake data-interface microcopy;
- decorative graphics under text;
- copying a single reference's signature composition.

## 4. Visual system

### Color roles

Use a restrained role-based palette:

| Role | Token direction | Use |
|---|---|---|
| Canvas | `#080608` | Main background |
| Raised dark | `#110A0E` | Rare separated surfaces |
| Primary text | `#F4EEF1` | Headings and body |
| Muted text | `#A99CA3` | Secondary content only |
| Signal pink | `#FF3194` | Mark core, links, selected states and controlled accents |
| Hairline | translucent off-white/pink | Section boundaries and evidence frames |

Pink is a signal, not a large default fill. Off-white carries most text and most glyph mass. Gradients are allowed only as subtle depth inside the interactive art zone.

### Typography

Reuse the fonts already licensed and shipped by the project:

- IBM Plex Sans Variable: display and reading text, including Cyrillic.
- IBM Plex Mono: metadata that already exists in approved content and interface controls.
- Unbounded Variable: Povkh.Dev wordmark only.

Do not create new decorative text to justify the mono font. Existing labels may retain their wording and be restyled. New visible copy is outside this packet.

Display headings use tight leading and strong scale. Body text retains comfortable line length and line height. Mobile headings must wrap intentionally without clipping or forced overlap.

### Layout and surfaces

- Desktop uses a 12-column grid with stable gutters and a wide editorial measure.
- Hero composition uses approximately 7 columns for copy and 5 for art, adjusted by actual text wrapping.
- Sections may use borders, full-width media and editorial whitespace; cards are not the default container.
- Evidence pages favor large real screenshots, explicit sequence and captions already present in content.
- Corners stay mostly square or modestly rounded. Pill geometry is reserved for compact controls and CTAs.
- Shadows are rare. Separation comes from spacing, contrast and hairlines.

## 5. Page system

### `/ru/` — homepage

- Preserve the existing funnel and all existing copy.
- Use the split hero with protected reading and interaction zones.
- Make solution, proof and sale visually distinct.
- Present cases as evidence, with real media and a readable sequence rather than decorative cards.
- Use the complete glyph interaction only here.

### `/ru/services/` and `/ru/process/`

- Present services and stages as connected systems using lines, scale and spacing.
- Keep all existing headings, descriptions, inclusions, exclusions and CTAs.
- Use static fragments of the mark only in empty visual zones.
- Do not add technical captions or invented diagram labels.

### `/ru/work/`

- Preserve all listed cases: KZMS, ENDOkey, POVKH LAB and Giulia Povkh.
- Use large case rows or editorial panels with real images, existing facts and clear actions.
- Avoid reducing cases to identical small cards.

### Case pages

Routes:

- `/ru/work/kzms/`
- `/ru/work/endokey/`
- `/ru/work/povkh-lab/`

Requirements:

- retain every existing case text, disclosure, evidence boundary, link and media item;
- preserve the KZMS before/after comparison;
- keep ENDOkey product imagery and website proof separate where the current content requires it;
- keep POVKH LAB captures identified as project evidence rather than external performance proof;
- use a consistent evidence sequence while allowing media-specific layouts.

### `/ru/studio/`

Use a quieter editorial expression. The static mark may anchor the page, but the team and collaboration content remain primary. Preserve all current wording and FAQ content.

### `/ru/contact/`

Keep the form and its current operational boundaries. Give inputs clear focus, validation, pending, success and error states without inventing public promises. Decorative graphics stay outside the form reading and interaction area.

### `/ru/blog/`, legal and 404

Routes:

- `/ru/blog/`
- `/ru/privacy/`
- `/ru/cookies/`
- `/ru/404/` or the current Astro 404 behavior

These pages use the same typography, color, header, footer, focus states and static identity. They remain calmer than the homepage. Legal text must prioritize reading comfort over visual effects.

## 6. Interaction architecture

### Recommended approach

Implement the glyph field with Canvas 2D and a small project-local TypeScript module. Do not add a 3D dependency.

The module owns:

1. a deterministic set of glyph points sampled from the approved vector geometry;
2. a three-dimensional position and home/aligned target for each point;
3. pointer-drag rotation state;
4. perspective projection to the canvas;
5. soft-snap interpolation near the target angle;
6. adaptive quality and lifecycle management.

The render loop projects each glyph point to two dimensions and draws a character with Canvas text. Depth controls scale, opacity and draw order. The aligned state is derived from the same vector geometry as the static SVG mark so the two cannot drift into different logos.

### Interaction behavior

- Pointer and touch drag rotate the field directly.
- No device-orientation or gyroscope permission is requested.
- No scroll hijacking is allowed.
- When the rotation enters a small target threshold, the field eases into exact alignment.
- The aligned state remains until the user drags again; it does not reset on a timer.
- A short restrained pink emphasis may mark successful alignment, but it must not glow continuously.
- The interaction has no score, instruction copy, completion requirement or hidden content.

### Progressive enhancement and failure

- The existing copy, CTA and navigation render before JavaScript.
- A static SVG mark is present as fallback.
- Canvas initialization replaces or visually layers over the fallback only after successful setup.
- A script error, missing Canvas API or low-power mode leaves the static mark visible and does not create an empty hero column.
- When the canvas leaves the viewport, animation pauses.

### Performance budget

- No new runtime dependency for the field.
- Cap device pixel ratio for the canvas at an implementation-defined value no higher than 1.5 unless profiling proves a higher value safe.
- Use an adaptive glyph count, with a lower mobile count.
- Update only through `requestAnimationFrame` while visible or interacting.
- Avoid per-frame DOM writes and object allocation.
- Load the interaction only on the Russian homepage during the RU phase.

## 7. Accessibility and responsive behavior

- `prefers-reduced-motion: reduce` renders the static aligned mark without continuous animation or snap motion.
- The interaction carries no unique content; screen-reader users receive the existing copy and an accessible static brand mark.
- The decorative canvas may be hidden from the accessibility tree because it does not expose an action required to use the page.
- Pointer interaction must not capture vertical page scrolling on touch until a deliberate horizontal or multidirectional drag is detected within the art zone.
- Focus indicators use strong visible contrast and are never removed.
- Text contrast must meet WCAG AA for normal text.
- At narrow widths the art zone follows the complete copy and CTA; it never sits behind them.
- Very small screens may use the static mark when the interactive field cannot maintain quality or touch ergonomics.

## 8. Component boundaries for implementation

Suggested boundaries, subject to the existing Astro naming conventions:

- `BrandMark`: canonical static SVG geometry and color variants.
- `GlyphField`: progressive-enhancement shell, fallback mark and canvas lifecycle.
- `glyph-field.ts`: glyph sampling, rotation, projection, snap and rendering.
- `HomeHero`: existing hero content plus separate art slot; it does not own rendering internals.
- shared header/footer and page-section primitives: visual system only, without content mutation.

The canonical mark geometry must live in one source or be generated from one shared path definition. Do not maintain unrelated SVG and Canvas versions by hand.

## 9. Approaches considered

### A. CSS/SVG dotted outline

Smallest implementation, but rejected. Evenly spaced circles made the mark look like an LED sign and produced the cheap visual effect identified by the user.

### B. Static SVG glyph mask

Useful as a visual fallback and screenshot state. Rejected as the full interaction because it cannot provide convincing spatial rotation without becoming a collection of CSS tricks.

### C. Canvas-projected glyph volume

Selected. It provides real depth, direct drag, controlled alignment, adaptive performance and a dependency-free implementation while retaining a static SVG fallback.

## 10. Content integrity

The build must treat the current public content as immutable input.

- Do not rewrite, shorten, remove, translate or invent public text.
- Do not remove or replace existing cases.
- Do not change case claims, disclosures or evidence scope.
- Do not add decorative English labels, commands, metrics or statuses.
- Layout code must accommodate the complete existing text rather than trimming it to fit.
- RU approval precedes any EN or IT synchronization.

Implementation verification must include a content-contract test or snapshot comparison proving that the approved text and case inventory did not change.

## 11. Verification and acceptance

The future RU implementation is acceptable only when all of the following are true:

1. Every current Russian route remains reachable.
2. Every existing text, link, CTA, case and case asset remains represented.
3. The static mark matches the approved circle/core/three-right-signals geometry at large and favicon sizes.
4. The homepage field uses dense glyphs rather than round particles.
5. No fake HUD copy or decorative metrics appear anywhere.
6. No graphic overlaps primary text on desktop or mobile.
7. Drag rotation and soft snap work with pointer and touch without blocking page scroll.
8. Reduced-motion and no-JavaScript states show a clean static mark.
9. Inner pages do not duplicate the full draggable interaction.
10. Representative desktop and mobile screenshots cover homepage, services/process, work index, a case page, contact and a reading page.
11. Focus, contrast, overflow and form states pass targeted accessibility checks.
12. Performance profiling shows no persistent offscreen animation and no material regression to page responsiveness.

## 12. Delivery boundary

This document records the user-approved design target. It does not authorize implementation, dependency changes, commits to `main`, push, PR, merge, deployment or release.

The next route after written-spec approval is a bounded RU implementation delivery. Because it spans shared primitives, the homepage interaction and multiple page families, delivery should be decomposed into vertical increments rather than treated as one unreviewed rewrite.
