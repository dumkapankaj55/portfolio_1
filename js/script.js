(() => {
  "use strict";

  const data = window.PORTFOLIO_CONFIG;
  const root = document.querySelector("#portfolio-content");
  if (!data || !root) return;

  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const icon = (name) => {
    const paths = {
      github: '<path d="M12 .9a11.1 11.1 0 0 0-3.51 21.64c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.14 1.7 1.14 1 .1.79 2.47 3.29 1.88.1-.73.4-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.43 3.04-1.13 3.04-1.13.61 1.53.23 2.67.12 2.95.71.77 1.13 1.76 1.13 2.97 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>',
      linkedin: '<path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 18H5V9h3ZM6.5 7.77a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-2.63-3-2.43-3 0V18h-3V9h3v1.44c1.4-2.58 6-2.77 6 2.47Z"/>',
      leetcode: '<path d="m8.2 17.8-3-3.1a1.1 1.1 0 0 1 0-1.5l7.3-7.5a1.1 1.1 0 0 1 1.6 1.5L7.5 14l2.3 2.3a1.1 1.1 0 0 1-1.6 1.5Zm5.4 3.1a1.1 1.1 0 0 1 0-2.2h5.2a1.1 1.1 0 0 1 0 2.2Zm0-5.1a1.1 1.1 0 0 1 0-2.2h5.2a1.1 1.1 0 0 1 0 2.2Zm-1.7 5.3 2.1-2.2-1.6-1.6-2 2.2a1.1 1.1 0 0 0 1.5 1.6Zm.8-15.4-1.6-1.6-1.8 1.9 1.6 1.6Z"/>',
      mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.7 7h14.6ZM4 17V8.4l7.4 5.1a1 1 0 0 0 1.2 0L20 8.4V17Z"/>',
      arrow: '<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
    };
    return `<svg aria-hidden="true" viewBox="0 0 24 24" class="icon icon-${name}" focusable="false">${paths[name] || paths.arrow}</svg>`;
  };

  const resumeFilename = `${data.name.trim().replace(/\s+/g, "-")}-Resume.pdf`;
  const resumeLink = (text, extraClass = "") => `<a class="button ${extraClass}" href="${escapeHTML(data.assets.resume)}" download="${escapeHTML(resumeFilename)}"><span>${escapeHTML(text)}</span><span class="arrow" aria-hidden="true">↘</span></a>`;
  const external = (url, label, iconName, className = "") => url
    ? `<a class="social-link ${className}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${icon(iconName)}<span>${escapeHTML(label)}</span><span class="social-arrow" aria-hidden="true">↗</span></a>`
    : "";
  const tags = (items) => items.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("");

  function projectVisual(visual, number) {
    if (visual === "crime") return `<div class="visual-screen crime-screen" aria-hidden="true">
      <div class="screen-top"><span class="screen-brand"><i></i> CRIMELENS</span><span class="screen-dots">•••</span></div>
      <div class="crime-body"><div class="screen-rail"><b></b><i></i><i></i><i></i></div><div class="crime-content"><div class="screen-kicker">INCIDENT OVERVIEW</div><div class="screen-title">Case activity</div><div class="case-stats"><span><b>Reports</b><small>Incident intake</small></span><span><b>Cases</b><small>Review status</small></span></div><div class="map-art"><svg viewBox="0 0 360 115"><path d="M0 70 56 49l42 12 44-33 39 19 53-18 44 25 82-19M2 101l51-29 39 19 57-41 35 26 48-15 41 19 84-28M52 0l19 38-16 34m71-72 16 28-6 17m91-40-16 33 26 14m55-41-4 37 35 13"/><path class="route" d="M81 74c41-31 70-13 99-29 30-16 53 13 86-3"/><circle cx="81" cy="74" r="4"/><circle cx="266" cy="42" r="4"/></svg><span>CASE LOCATION MAP</span></div></div></div>
      <span class="visual-caption">Illustrative interface preview</span></div>`;
    if (visual === "farm") return `<div class="visual-screen farm-screen" aria-hidden="true">
      <div class="farm-orbit orbit-one"></div><div class="farm-orbit orbit-two"></div><div class="farm-leaf"><svg viewBox="0 0 240 240"><path d="M120 202c2-43 1-92-5-152M116 145c-38 1-63-17-71-57 40 0 66 16 71 57Zm3-34c8-43 35-65 77-65-7 42-32 64-77 65Zm-1 65c-22 2-44-9-57-30 29-5 49 4 57 30Z"/><path d="M116 145 53 88m66 23 72-65m-73 134-44-36"/></svg></div>
      <div class="farm-data"><span class="screen-kicker">FARMING ASSISTANCE</span><strong>Good soil,<br/>better growing.</strong><span class="farm-chip">CROP GUIDANCE <i>↗</i></span></div><span class="visual-caption">Illustrative interface preview</span></div>`;
    return `<div class="visual-screen schedule-screen" aria-hidden="true">
      <div class="schedule-head"><span class="screen-kicker">CPU LAB / 01</span><span class="schedule-live"><i></i> SIMULATION</span></div><div class="schedule-title">Scheduling<br/><em>in motion.</em></div><div class="schedule-chart"><div class="chart-row"><span>P1</span><i class="bar bar-a"></i><i class="bar bar-b"></i></div><div class="chart-row"><span>P2</span><i class="bar bar-c"></i><i class="bar bar-d"></i></div><div class="chart-row"><span>P3</span><i class="bar bar-e"></i><i class="bar bar-f"></i></div><div class="chart-ticks"><span>0</span><span>4</span><span>8</span><span>12</span><span>16</span></div></div><span class="visual-caption">Illustrative interface preview</span></div>`;
  }

  function renderNav() {
    const nav = document.querySelector("#primary-nav");
    nav.innerHTML = `<div class="nav-links">${data.navigation.map((item) => `<a class="nav-link" href="${escapeHTML(item.href)}">${escapeHTML(item.label)}</a>`).join("")}</div>`;
  }

  function renderHero() {
    const hero = data.hero;
    const headingParts = hero.heading.replace(/\.$/, "").split(/\s+/);
    return `<section class="hero section-wrap" id="intro" aria-labelledby="hero-title">
      <div class="hero-copy" data-reveal><p class="eyebrow"><span class="eyebrow-line"></span>${escapeHTML(hero.eyebrow)}</p>
        <h1 id="hero-title">${escapeHTML(headingParts[0] || data.name)}<br/><span>${escapeHTML(headingParts.slice(1).join(" "))}<span class="accent-dot">.</span></span></h1>
        <p class="hero-role">${escapeHTML(hero.role)}<span class="role-divider">/</span><span>AI-powered applications</span></p>
        <p class="hero-description">${escapeHTML(hero.description)}</p>
        <p class="hero-supporting">${escapeHTML(hero.supporting)}</p>
        <div class="hero-actions"><a class="button button-primary" href="#work"><span>${escapeHTML(hero.primaryAction)}</span><span class="arrow" aria-hidden="true">↘</span></a>${resumeLink(hero.resumeAction, "button-outline")}<a class="text-link" href="#contact">${escapeHTML(hero.contactAction)} <span aria-hidden="true">↗</span></a></div>
        <div class="hero-meta"><span class="availability"><i></i>${escapeHTML(hero.availability)}</span><span class="meta-separator"></span><span>${escapeHTML(data.location)}</span></div>
      </div>
      <div class="hero-visual" data-reveal data-reveal-delay="150"><div class="portrait-index"><span>01 / THE DEVELOPER</span><span>INDIA · 2026</span></div>
        <figure class="portrait-frame"><div class="portrait-backdrop"></div><img class="portrait-image" src="${escapeHTML(data.assets.profile)}" alt="Professional portrait of ${escapeHTML(data.name)}" fetchpriority="high"/><div class="portrait-missing" hidden><span class="missing-symbol">PD<span>.</span></span><strong>Portrait goes here.</strong><small>Add your original photo at<br/><code>assets/profile.jpg</code></small></div><figcaption><span>${escapeHTML(data.name)}</span><span>DEVELOPER · BUILDER · LEARNER</span></figcaption></figure>
        <span class="visual-side-note">BUILDING WITH INTENTION — 2026</span>
      </div>
      <a class="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i aria-hidden="true"></i></a>
    </section>`;
  }

  function renderAbout() {
    const headingParts = data.about.heading.replace(/\.$/, "").split(/\s+/);
    return `<section class="about section-wrap section-space" id="about" aria-labelledby="about-title"><div class="section-heading" data-reveal><p class="eyebrow"><span class="eyebrow-line"></span>01 — ${escapeHTML(data.about.eyebrow)}</p><h2 id="about-title">${escapeHTML(headingParts[0] || "About")}<br/><span>${escapeHTML(headingParts.slice(1).join(" "))}<span class="accent-dot">.</span></span></h2></div>
      <div class="about-content" data-reveal data-reveal-delay="100"><p class="about-lead">${escapeHTML(data.about.paragraphs[0])}</p><div class="about-copy">${data.about.paragraphs.slice(1).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}</div><div class="about-summary"><span class="mini-label">A LITTLE CONTEXT</span><p>${escapeHTML(data.summary)}</p></div>${resumeLink("Download My Resume", "button-outline about-resume")} <a class="resume-view" href="${escapeHTML(data.assets.resume)}" target="_blank" rel="noopener noreferrer">View resume in a new tab <span aria-hidden="true">↗</span></a></div>
      <div class="facts-grid" data-reveal>${data.about.facts.map((fact, index) => `<div class="fact"><span class="fact-index">0${index + 1}</span><strong>${escapeHTML(fact.value)}</strong><span>${escapeHTML(fact.label)}</span></div>`).join("")}</div>
    </section>`;
  }

  function renderSkills() {
    const title = escapeHTML(data.labels.expertise).replace(/\.$/, '<span class="accent-dot">.</span>');
    return `<section class="expertise section-wrap section-space" id="expertise" aria-labelledby="expertise-title"><div class="section-head-row" data-reveal><div><p class="eyebrow"><span class="eyebrow-line"></span>02 — WHAT I WORK WITH</p><h2 id="expertise-title">${title}</h2></div><p class="section-aside">Tools, languages &amp; concepts<br/>I use to turn ideas into products.</p></div>
      <div class="skills-list">${data.skills.map((group, index) => `<div class="skill-row" data-reveal data-reveal-delay="${Math.min(index * 45, 220)}"><span class="skill-index">0${index + 1}</span><h3>${escapeHTML(group.category)}</h3><div class="skill-items">${group.items.map((item) => `<span class="skill-item"><i aria-hidden="true">${escapeHTML(item.split(/[.+ ]/).filter(Boolean).map((word) => word[0]).join("").slice(0, 2).toUpperCase())}</i>${escapeHTML(item)}</span>`).join("")}</div></div>`).join("")}</div>
    </section>`;
  }

  function renderProjects() {
    const headingParts = data.labels.work.replace(/\.$/, "").split(/\s+/);
    return `<section class="work section-wrap section-space" id="work" aria-labelledby="work-title"><div class="section-head-row work-heading" data-reveal><div><p class="eyebrow"><span class="eyebrow-line"></span>03 — SELECTED PROJECTS</p><h2 id="work-title">${escapeHTML(headingParts[0] || "Selected")}<br/>${escapeHTML(headingParts.slice(1).join(" "))}<span class="accent-dot">.</span></h2></div><p class="section-aside">A few things I've built while<br/>learning, experimenting, and solving.</p></div>
      <div class="project-list">${data.projects.map((project, index) => `<article class="project project-${escapeHTML(project.visual)}" data-reveal><div class="project-visual project-visual-${escapeHTML(project.visual)}"><div class="project-number">${escapeHTML(project.number)} <span>— 03</span></div>${projectVisual(project.visual, project.number)}</div><div class="project-copy"><p class="project-kind">${escapeHTML(project.descriptor)}</p><h3>${escapeHTML(project.name)}<span class="accent-dot">.</span></h3><p class="project-description">${escapeHTML(project.description)}</p><div class="project-tags">${tags(project.technologies)}</div><details class="project-details"><summary>What it does <span aria-hidden="true">+</span></summary><ul>${project.features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join("")}</ul></details><div class="project-links">${project.github ? external(project.github, "GitHub", "github", "project-link") : "<span class=\"link-pending\">GitHub URL not provided</span>"}${project.demo ? `<a class="project-demo" href="${escapeHTML(project.demo)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : "<span class=\"link-pending\">Demo URL not provided</span>"}</div></div></article>`).join("")}</div>
      <p class="project-note"><span>✳</span> Previews are original interface illustrations, not screenshots of deployed applications.</p>
    </section>`;
  }

  function renderAchievements() {
    const headingParts = data.labels.achievements.replace(/\.$/, "").split(/\s+/);
    return `<section class="achievements section-wrap section-space" id="achievements" aria-labelledby="achievements-title"><div class="section-head-row" data-reveal><div><p class="eyebrow"><span class="eyebrow-line"></span>04 — PROGRESS, NOT PERFECTION</p><h2 id="achievements-title">${escapeHTML(headingParts[0] || "Milestones")}<br/>${escapeHTML(headingParts.slice(1).join(" "))}<span class="accent-dot">.</span></h2></div><p class="section-aside">Small markers on a longer<br/>journey of getting better.</p></div><div class="achievement-list">${data.achievements.map((item, index) => `<article class="achievement-row" data-reveal data-reveal-delay="${index * 70}"><span class="achievement-index">0${index + 1}</span><strong class="achievement-marker">${escapeHTML(item.marker)}</strong><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p></div><span class="achievement-mark" aria-hidden="true">↗</span></article>`).join("")}</div></section>`;
  }

  function renderJourney() {
    const headingParts = data.labels.journey.replace(/\.$/, "").split(/\s+/);
    return `<section class="journey section-wrap section-space" id="journey" aria-labelledby="journey-title"><div class="section-head-row" data-reveal><div><p class="eyebrow"><span class="eyebrow-line"></span>05 — EDUCATION &amp; CERTIFICATIONS</p><h2 id="journey-title">${escapeHTML(headingParts[0] || "Journey")}<br/>${escapeHTML(headingParts.slice(1).join(" "))}<span class="accent-dot">.</span></h2></div><p class="section-aside">Learning the fundamentals<br/>and building from there.</p></div>
      <div class="journey-grid"><div class="education-block" data-reveal><span class="mini-label">EDUCATION</span><div class="timeline-entry"><span class="timeline-dot"></span><span class="timeline-date">${escapeHTML(data.education.years)}</span><h3>${escapeHTML(data.education.school)}</h3><p>${escapeHTML(data.education.degree)}</p><div class="education-meta"><span>${escapeHTML(data.education.grade)}</span><span>${escapeHTML(data.education.location)}</span></div></div></div>
      <div class="certifications-block" data-reveal data-reveal-delay="120"><span class="mini-label">CERTIFICATIONS &amp; TRAINING</span><div class="cert-list">${data.certifications.map((cert, index) => `<article class="cert-entry"><span class="cert-index">0${index + 1}</span><div><h3>${escapeHTML(cert.name)}</h3><p>${escapeHTML(cert.detail)}</p></div></article>`).join("")}</div></div></div>
    </section>`;
  }

  function renderContact() {
    const links = [external(data.social.github, "GitHub", "github"), external(data.social.linkedin, "LinkedIn", "linkedin"), external(data.social.leetcode, "LeetCode", "leetcode")].join("");
    const contactHeading = escapeHTML(data.contact.heading).replace("great.", "<em>great.</em>");
    return `<section class="contact section-wrap section-space" id="contact" aria-labelledby="contact-title"><div class="contact-top" data-reveal><p class="eyebrow"><span class="eyebrow-line"></span>06 — ${escapeHTML(data.contact.eyebrow)}</p><h2 id="contact-title">${contactHeading}</h2><p class="contact-description">${escapeHTML(data.contact.description)}</p></div>
      <div class="contact-grid"><div class="connect-column" data-reveal><p class="mini-label">LET'S CONNECT</p><div class="social-list">${links}</div><div class="contact-direct"><span>BASED IN</span><p>${escapeHTML(data.location)}</p><span>EMAIL</span><a href="mailto:${escapeHTML(data.email)}">${escapeHTML(data.email)} ↗</a></div></div></div>
    </section>`;
  }

  renderNav();
  root.innerHTML = `${renderHero()}${renderAbout()}${renderSkills()}${renderProjects()}${renderAchievements()}${renderJourney()}${renderContact()}`;
  const nameParts = data.name.trim().split(/\s+/).filter(Boolean);
  const initials = nameParts.map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  document.querySelectorAll(".brand").forEach((brand) => {
    brand.setAttribute("aria-label", `${data.name}, home`);
    brand.querySelector(".brand-mark").innerHTML = `${escapeHTML(initials.slice(0, 1))}<span>.</span>${escapeHTML(initials.slice(1))}`;
    brand.querySelector(".brand-name").textContent = data.name;
  });
  const headerResume = document.querySelector(".header-resume");
  headerResume.href = data.assets.resume;
  headerResume.download = resumeFilename;
  document.title = `${data.name} — ${data.title.split("|")[0].trim()}`;
  document.querySelector('meta[name="description"]').setAttribute("content", `${data.name} — ${data.summary}`);
  document.querySelector("#footer").innerHTML = `<div class="footer-inner"><a class="brand footer-brand" href="#top"><span class="brand-mark">P<span>.</span>D</span><span class="brand-name">${escapeHTML(data.name)}</span></a><p>${escapeHTML(data.footerNote)}</p><span class="footer-year">© ${new Date().getFullYear()} · ${escapeHTML(data.location)}</span></div>`;

  const portrait = document.querySelector(".portrait-image");
  const showMissingPortrait = () => {
    portrait.closest(".portrait-frame").classList.add("portrait-frame--missing");
    document.querySelector(".portrait-missing").hidden = false;
    portrait.hidden = true;
  };
  portrait.addEventListener("error", showMissingPortrait, { once: true });
  if (portrait.complete && portrait.naturalWidth === 0) showMissingPortrait();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };
  menuButton.addEventListener("click", () => {
    const opening = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", opening);
    document.body.classList.toggle("menu-open", opening);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const revealItems = document.querySelectorAll("[data-reveal]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = `#${entry.target.id}`;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === activeId));
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach((section) => activeObserver.observe(section));
  }

  const topButton = document.querySelector(".back-to-top");
  const updateTopButton = () => topButton.classList.toggle("is-visible", window.scrollY > 650);
  window.addEventListener("scroll", updateTopButton, { passive: true });
  updateTopButton();

  const photo = document.querySelector(".portrait-frame");
  let parallaxFrame = 0;
  const updateParallax = () => {
    cancelAnimationFrame(parallaxFrame);
    parallaxFrame = requestAnimationFrame(() => {
      const bounds = photo.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      const offset = Math.max(-7, Math.min(7, (center - window.innerHeight / 2) * -0.012));
      photo.style.setProperty("--portrait-shift", `${offset}px`);
    });
  };
  if (!reducedMotion.matches && window.matchMedia("(min-width: 861px)").matches) {
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();
  }

})();
