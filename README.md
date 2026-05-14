# Universal Language Access Prototype

Static concept for a multilingual volunteer-intake and emergency-alert mirror.

This is not an official American Red Cross form or alerting product. It is a local
prototype showing how a Red Cross-style workflow could ask for language first,
accept volunteer applications in a preferred language, and stage emergency alert
translations with a review gate.

## Open

Open `index.html` in a browser.

Standalone pages:

- `volunteer-intake.html`
- `emergency-alert-mirror.html`

## Source facts checked

- The public Red Cross volunteer path points first-time applicants to Volunteer
  Connection and lists application support by email/phone.
- The Red Cross Emergency app public page describes the app as available in
  English and Spanish.

## Prototype behavior

- 135 selectable languages in the left rail.
- The standalone volunteer and emergency demos both expose the same Census/MPI-priority starter list: English, Spanish, Chinese, Tagalog, Vietnamese, Arabic, French, Korean, Portuguese, Hindi, Haitian Creole, Russian, German, Telugu, Urdu, Italian, Polish, Bengali, Gujarati, Japanese, and Farsi/Persian.
- Human-reviewed starter packs for English, Korean, Spanish, Arabic, French,
  Haitian Creole, Vietnamese, Simplified Chinese, Portuguese, Russian, Tagalog,
  Hindi, and Ukrainian.
- Long-tail languages are selectable and routed to an "AI draft + human review"
  lane rather than being blocked at the first screen.
- Emergency alerts keep English source text attached and require operator review
  before release.
