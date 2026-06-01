# Design System: MPU Safe Demo Website

## 1. Visual Theme & Atmosphere
MPU Safe should feel like an after-dark mobility command room: cinematic, disciplined, private, and focused on getting a person's license path back under control. Density is Daily App Balanced 6/10, variance is Offset Asymmetric 8/10, and motion is Fluid CSS 7/10. The site uses wide roadway imagery, translucent license-card artifacts, clipped dashboard panels, and route-line ornaments to turn "MPU preparation" into a concrete journey from case uncertainty to a verified plan.

The tone is direct and trustworthy. The design must avoid cheap success promises. It should communicate analysis, preparation, evidence, and training with a calm, technical visual language.

## 2. Color Palette & Roles
- **Night Asphalt** (#03070A) - Primary dark canvas, never pure black.
- **Carbon Cabin** (#071017) - Deep section background and glass-panel depth.
- **Graphite Rail** (#16222B) - Structural bands, card underlayers, dark dividers.
- **Fog Glass** (rgba(247,251,252,0.86)) - Light glass panels over image and dark surfaces.
- **Signal Mist** (#EAF5F7) - Light section background and high-legibility cards.
- **Soft White** (#F7FBFC) - Primary text on dark surfaces.
- **Muted Steel** (#8FA4AD) - Secondary text, explanations, metadata.
- **Hairline Glass** (rgba(234,245,247,0.16)) - 1px borders, separators, subtle grid lines.
- **Glacier Cyan** (#5CE1E6) - The only UI accent. Used for CTAs, focus rings, active states, route highlights, and small status marks. No other saturated accent colors in UI.

## 3. Typography Rules
- **Display:** Outfit - weight 800-950, compact uppercase or sentence case, tight but never negative letter spacing. Headline scale via `clamp()`, not viewport-width-only scaling.
- **Body:** Outfit - 1rem minimum, relaxed 1.65 leading, max-width 65ch.
- **Mono:** JetBrains Mono fallback stack - product numbers, steps, route IDs, diagnostic metrics, and certificate metadata.
- **Banned:** Inter, pure system-font premium defaults, generic serif fonts, neon purple/blue gradients, and excessive gradient text.

## 4. Component Stylings
* **Buttons:** Flat tactile surfaces with a -1px active press. Primary buttons use Glacier Cyan fill or cyan-outline glass depending on background. No outer neon glow; use restrained inner light and image-driven glow only.
* **Cards:** 8px radius unless the object is a literal license/document artifact. Cards need a job: diagnosis, timeline, product choice, proof/certificate detail. No cards nested inside cards.
* **Inputs:** Label above, helper or status text below. Dark glass fields on dark sections, light fields on light sections. Focus ring in Glacier Cyan.
* **Program Tiles:** Product choices are app-like purchasing panels with transparent scope, duration, and payment notes. No fake discount pressure.
* **Proof Blocks:** Certificate, topic checklist, and evidence planning should feel like real operational documents, using mono metadata and crisp dividers.
* **Image Frames:** Use cinematic photo bands, angled license-card cutouts, transparent route scribbles, and glass-map images. Do not recreate signature scribbles or ornamental arrows in CSS/SVG; use generated bitmap assets.

## 5. Layout Principles
Use a grid-first page with asymmetry. The hero is split: direct copy and CTA on the left, floating license/product artifact on the right, with a hint of the next diagnostic band visible. Avoid centered hero composition. Feature rows should be asymmetric bento, zig-zag process lanes, or horizontal product rails, never three equal generic cards.

Desktop sections use max-width containment up to 1480px. Mobile collapses to one column below 768px with no horizontal scroll. Fixed-format UI elements such as mini dashboards, route boards, and case checkers must have stable aspect ratios and min/max constraints.

## 6. Motion & Interaction
Motion uses spring-like cubic easing: `cubic-bezier(.16,1,.3,1)`. Lists reveal in cascades. Active diagnostic elements use soft perpetual micro-loops: route pulse, license float, shimmer line, and progress sweep. Animate only transform and opacity. Respect `prefers-reduced-motion`.

Key interactions:
- Sticky, compact nav that gains structure on scroll.
- Hero license card floats subtly and tracks pointer on desktop.
- Case selector updates the diagnostic summary and form reason.
- Journey timeline reveals steps as they enter view.
- Program cards can be selected, updating a payment clarity strip.
- Contact form shows a demo success state without sending data.

## 7. Anti-Patterns (Banned)
No emojis anywhere. No Inter. No pure black. No neon purple, blue-purple, or outer glow shadows. No oversaturated multi-accent palette. No generic 3-column equal card feature row. No generic names like John Doe or Acme. No fake precision metrics such as 99.99%. No overpromising success guarantees. No AI copywriting clichés such as Elevate, Seamless, Unleash, Next-Gen. No filler scroll prompts, bouncing chevrons, broken image links, or centered hero layout.
