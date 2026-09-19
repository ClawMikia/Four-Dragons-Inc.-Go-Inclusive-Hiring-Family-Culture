# Four Dragons Inc. Go (演劇) — Inclusive Hiring & Family Culture

A static single-page website for **Four Dragons Inc. Go**, presenting the company's inclusive hiring process, character-first standards, constitution, culture, creative philosophy, and product portfolio.

## Stack

- **HTML5** — semantic single-page markup
- **CSS3** — custom properties, theme system, responsive layout, animations
- **Vanilla JavaScript** — no frameworks or build step

## Project Structure

```
├── index.html          # Single-page markup, sections, and content
├── style.css           # Design tokens, themes, layout, responsive rules
├── script.js           # Theme, nav position, language, drawer, scroll-spy
├── assets/
│   ├── app_icon.png        # Emblem used throughout the site
│   ├── company_logo.png    # Dragon head logo
│   ├── favicon-512.png     # Favicon (512×512)
│   ├── favicon-32.png      # Favicon (32×32)
│   ├── favicon-192.png     # Favicon (192×192)
│   └── apple-touch-icon.png # iOS home-screen icon
├── README.md
└── .gitignore
```

## Running Locally

Open `index.html` in any modern browser, or use a local server such as **Live Server** (VS Code extension) on port 5501.

## Site Sections

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#hero` | Full-viewport hero with animated glow, emblem, founder name, and hiring CTA |
| Our Creations | `#creations` | Product portfolio (games, anime, film, music, books) — children & teen audience |
| Content Standards | `#standards` | Permitted and prohibited themes across all products |
| Hiring Process | `#hiring` | Resume support, informal interviews, and character-first selection |
| Hiring Standards | `#hiring-standards` | Inclusive standards, rejection boundaries, hiring-manager policy, and prohibited scripts |
| Constitution | `#constitution` | Ten non-negotiable corporate articles |
| Culture | `#culture` | Core values, rejected behaviors, and positive reframing |
| Creative Philosophy | `#philosophy` | No deadlines — just great work (Leonardo da Vinci proof) |

Some sections are present in the source but hidden by default (`hidden` attribute) and can be unhidden as content is finalized.

## Hiring Process

1. **Resume:** Every applicant is asked to submit a resume. Applicants who cannot create one are still welcome and receive support.
2. **Informal interview:** The interview is 100% informal. Applicants say hello, tell their story politely and friendly, and are not judged by skills, knowledge, achievements, education, life status, or background.
3. **Character:** Character matters most. Skills can be taught and patiently developed; toxic behavior that damages human dignity is not accepted.
4. **No skill assessments:** No skills assessment, test, examination, assignment, or practical demonstration is required at any stage of hiring.

Not everything can be taught in schools or universities. Character, attitude, willingness, and humanity are lived and learned through life.

## Hiring Standards

Four Dragons welcomes anyone who is willing, interested, and excited to join the family. The company does not reject people solely for lacking skills, qualifications, achievements, experience, education, physical appearance, personal status, or life circumstances. It does not tolerate actions that destroy a person's career, passions, or future.

The founder's current policy does not appoint Filipino applicants as hiring managers, based on the founder's experiences with harmful hiring practices in the Philippines. Filipino applicants remain welcome in every other role.

The following rejection scripts and email subjects represent inappropriate and unprofessional hiring communication and are not used:

- “After careful review of your qualifications, we regret to inform you that we are moving forward with other candidates whose profiles more closely align with the current requirements of this role.”
- “While we were highly impressed by your background, we have decided to move forward with another candidate who possesses more specialized experience in [mention specific skill, e.g., advanced developer].”
  - This script's true meaning is unprofessionalism. It is unreasonable to reduce a person to a narrow comparison of specialized experience.
- “Unfortunately, we are not able to offer you an interview for the [Position Title] role.”
- Email subject: “Not Selected”

The word “unfortunately” is not part of the company's hiring dictionary and is not tolerated in hiring.

## UI & Features

### Themes
- **Dark** (default) and **Light** — persisted in `localStorage`
- System `prefers-color-scheme` respected on first load

### Navigation
- Repositionable navbar: **Top** bar, **Left** sidebar, or **Right** sidebar — preference persisted
- Below **960px**, the navbar becomes a slide-out drawer with burger toggle, scrim overlay, and `Escape` key support
- Scroll-spy via `IntersectionObserver` highlights the active section

### Language
- Toggle between **English (EN)** and **Japanese (日本語)** — all strings in `script.js`
- Language preference persisted in `localStorage`

### Typography & Layout
- **Cinzel** (Google Fonts) for display and body text
- Smooth scrolling; `prefers-reduced-motion` respected
- Breakpoints: ≥960px (desktop nav), <860px (hiring grids collapse), <520px (scaled hero)

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Skip-to-content link
- `aria-label`, `aria-expanded`, `aria-controls`, `role="radiogroup"`, `role="radio"`, `aria-checked`
- Focus-visible outlines in brand blue (`#0703fc`)

### Brand Colors
```
--dragon-blue  #0703fc
--dragon-red   #fc0303
```
All other colors are neutral black/white shades for surfaces and text.

## Browser Support

Targets modern evergreen browsers (Chrome, Edge, Firefox, Safari).

## License

© Four Dragons Inc. Go — All rights reserved.
