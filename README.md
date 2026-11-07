# Pankaj Dumka - Developer Portfolio

A responsive, dark editorial portfolio built with semantic HTML, CSS, and vanilla JavaScript. It has no framework, package install, or build step.

## Portfolio

This site presents Pankaj Dumka's background, skills, projects, achievements, education, certifications, and contact links. Editable portfolio content is centralized in `js/config.js`.

Highlights:

- Responsive layouts from desktop through 320px mobile widths.
- Download links to the supplied resume PDF in the header, hero, and About section, plus a View Resume link.
- Scroll reveals, active section navigation, reduced-motion support, and a mobile menu.
- Medium-sized GitHub, LinkedIn, and LeetCode cards with recognizable icons.
- Illustrative project previews rendered in the page. They are not screenshots of deployed applications.

## Files

```text
portfolio/
  index.html
  css/style.css
  js/config.js
  js/script.js
  assets/profile.jpg
  assets/resume.pdf
  assets/favicon.svg
  assets/projects/README.md
```

The portrait is the supplied photograph converted to JPEG without retouching or cropping. The resume is the supplied PDF. Both are included under `assets/`.

## Run locally

Open `index.html` in a modern browser, or serve the directory over HTTP:

```bash
python -m http.server 8000
```

Visit <http://localhost:8000>.

## Update portfolio content

Edit `js/config.js` to update personal information, social links, skills, projects, achievements, education, certifications, and copy. Project `github` and `demo` values are intentionally blank because no project URLs were supplied. Add verified URLs there to display those links.

The contact section links directly to GitHub, LinkedIn, LeetCode, and email. There is no contact form or backend.

## Deploy

This is a static site. Upload the contents of this directory to a static hosting service. For GitHub Pages, push these files to a repository, then enable Pages for the `main` branch and repository root in the repository's Pages settings. Keep the relative paths intact so the stylesheet, scripts, portrait, and resume load correctly.

Google Fonts are requested remotely. The site falls back to system sans-serif fonts if they are unavailable. Semantic landmarks, keyboard focus styles, and `prefers-reduced-motion` support are included.
