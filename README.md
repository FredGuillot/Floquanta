# Floquanta Corporate Website

The first production-quality visual prototype for floquanta.com, representing Floquanta Inc. and primarily presenting Floquanta for Business. The site communicates a focused approach to quantitative decision intelligence: simplified mathematical models, simulation, and scenario analysis for decisions under uncertainty.

## Structure

- `index.html` — homepage and all primary sections
- `css/styles.css` — design system, layout, diagrams, and responsive rules
- `js/main.js` — accessible mobile navigation and small interaction enhancements
- `legal/` — corporate website legal placeholders
- `references/` — supplied visual references; do not modify

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. The site can also be opened directly from `index.html`, though an HTTP server best matches production behavior.

## Design philosophy

The visual system translates the supplied concept PDF into a responsive web experience: Midnight Navy fields, restrained teal accents, cool neutral surfaces, generous whitespace, and simplified quantitative diagrams. The site uses a system font stack and no remote assets.

Core colors:

- Midnight Navy: `#102A43`
- Deep Navy: `#071D2E`
- Floquanta Teal: `#0C8A94`
- Pale Aqua: `#E1F2F3`
- Cool Surface: `#F2F6F8`

## Hosting

The project is plain HTML, CSS, and JavaScript with relative paths and is compatible with static hosting, including a future GitHub Pages deployment. No deployment is configured in Version 1.

