# Povkh.Dev Russian type system

## Direction

The Russian site uses IBM Plex Sans Variable as its primary reading and display face. Its Cyrillic set, broad weight range, and open counters support long Russian words without turning the interface into a technical dashboard. Unbounded Variable is reserved for the Povkh.Dev wordmark only; using it sparingly gives the studio a recognisable signature without reducing readability.

Both families are self-hosted, cover Cyrillic and Latin, use variable `wght` axes, and are distributed under the SIL Open Font License. IBM Plex Mono remains available only where fixed-width alignment conveys real information. It is not a default label style.

## Scale

The scale follows a fluid major-third rhythm, adjusted optically at display sizes.

| Role | Family | Weight | Responsive size | Line height | Tracking | Use |
| --- | --- | ---: | --- | ---: | ---: | --- |
| Hero | IBM Plex Sans Variable | 470 | `clamp(3.25rem, 6.35vw, 6.75rem)` | 0.88 | -0.068em | Homepage promise |
| Page H1 | IBM Plex Sans Variable | 480 | `clamp(3rem, 8vw, 8rem)` | 0.90 | -0.065em | Interior-page title |
| Section H2 | IBM Plex Sans Variable | 460 | `clamp(2.625rem, 6.6vw, 6.5625rem)` | 0.90 | -0.060em | Major section transition |
| Card H3 | IBM Plex Sans Variable | 510 | `clamp(1.5rem, 2.6vw, 2.625rem)` | 1.00 | -0.040em | Problem, service, and result cards |
| Lead | IBM Plex Sans Variable | 400 | `clamp(1.0625rem, 1.3vw, 1.25rem)` | 1.55 | 0 | Introductory copy, max 38rem |
| Body | IBM Plex Sans Variable | 400 | `clamp(1rem, .95rem + .2vw, 1.125rem)` | 1.55 | 0 | Reading text, target 45–75 characters |
| Navigation | IBM Plex Sans Variable | 480 | 0.875rem | 1.2 | -0.01em | Mixed-case navigation |
| Button | IBM Plex Sans Variable | 610 | 0.875–0.9375rem | 1.1 | -0.012em | Primary and secondary actions |
| Eyebrow | IBM Plex Sans Variable | 520 | 0.8125rem | 1.4 | 0 | Meaningful category only; no decorative numbering |
| Wordmark | Unbounded Variable | 560 | 0.8125–0.9375rem | 1 | -0.055em | Povkh.Dev brand mark only |

## Rules

- Body copy stays within 38–44rem, preserving a 45–75 character measure.
- Mono uppercase is reserved for data that benefits from fixed-width alignment; decorative labels such as `00 / Введение` are removed.
- Heading hierarchy uses size, weight, and spacing together; color is an accent, not the only differentiator.
- Buttons use sentence case, at least 48px height, and a distinct circular arrow affordance.
- Fallback stacks remain `"IBM Plex Sans Variable", Arial, sans-serif`, `"Unbounded Variable", "IBM Plex Sans Variable", sans-serif`, and `"IBM Plex Mono", "Courier New", monospace`.

## Self-review

- Cyrillic coverage: confirmed for both local variable families.
- Licensing: SIL OFL; fonts are already self-hosted in the repository.
- Readability: body line-height is 1.55 and text measures are bounded.
- Consistency: mono labels no longer define the primary hierarchy; navigation, buttons, and headings share one sans-serif skeleton.
