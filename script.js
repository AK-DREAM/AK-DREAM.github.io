const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
updateThemeLabel();

function updateThemeLabel() {
  const label = document.querySelector(".theme-label");
  if (label) {
    label.textContent = html.getAttribute("data-theme") === "dark" ? "Light" : "Dark";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeLabel();
  });
}

document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof USER_CONFIG === "undefined") return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
  populateContact(USER_CONFIG);
  document.getElementById("current-year").textContent = new Date().getFullYear();
});

function setSectionVisibility(id, visible) {
  const section = document.getElementById(id);
  if (section) section.hidden = !visible;
  document.querySelectorAll(`a[href="#${id}"]`).forEach((link) => {
    link.hidden = !visible;
  });
}

function populateSimpleFields(cfg) {
  document.querySelectorAll("[data-config]").forEach((element) => {
    const key = element.dataset.config;
    if (key === "role_university") {
      element.textContent = [cfg.role, cfg.university].filter(Boolean).join(" at ");
    } else if (cfg[key] !== undefined) {
      element.textContent = cfg[key];
    }
  });

  if (cfg.name) document.title = `${cfg.name} | Personal Homepage`;

  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");
  if (cfg.photo) {
    if (heroImage) heroImage.hidden = false;
    const avatar = document.querySelector(".image-placeholder, .hero-photo");
    if (avatar) {
      avatar.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
    }
  } else {
    if (heroImage) heroImage.hidden = true;
    if (heroContent) heroContent.classList.add("no-photo");
  }

  const stats = document.querySelector(".hero-stats");
  if (stats) {
    if (cfg.stats?.length) {
      stats.hidden = false;
      stats.innerHTML = cfg.stats
        .map(
          (stat) =>
            `<div class="stat"><span class="stat-number">${stat.value}</span><span class="stat-label">${stat.label}</span></div>`,
        )
        .join("");
    } else {
      stats.hidden = true;
    }
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

function populateLists(cfg) {
  const publications = cfg.publications || [];
  const projects = cfg.projects || [];
  const news = cfg.news || [];
  const education = cfg.education || [];
  const experience = cfg.experience || [];

  setSectionVisibility("publications", publications.length > 0);
  setSectionVisibility("projects", projects.length > 0);
  setSectionVisibility("news", news.length > 0);
  setSectionVisibility("experience", education.length + experience.length > 0);

  const publicationsList = document.getElementById("cfg-publications");
  if (publicationsList && publications.length) {
    publicationsList.innerHTML = publications
      .map(
        (publication) => `
          <article class="pub-card" data-year="${publication.year}">
            <div class="pub-year">${publication.year}</div>
            <div class="pub-content">
              <div class="pub-header">
                <h3 class="pub-title">${publication.title}</h3>
                <div class="pub-links">${Object.entries(publication.links || {})
                  .map(([label, url]) => `<a href="${url}" class="pub-link">${label.toUpperCase()}</a>`)
                  .join("")}</div>
              </div>
              <p class="pub-authors">${boldName(publication.authors, cfg.name)}</p>
              <p class="pub-venue">${publication.venue}</p>
            </div>
          </article>`,
      )
      .join("");
  }

  const projectsGrid = document.getElementById("cfg-projects");
  if (projectsGrid && projects.length) {
    projectsGrid.innerHTML = projects
      .map(
        (project) => `
          <article class="project-card">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.desc}</p>
            <div class="project-tags">${(project.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </article>`,
      )
      .join("");
  }

  const newsList = document.getElementById("cfg-news");
  if (newsList && news.length) {
    newsList.innerHTML = news
      .map(
        (item) => `
          <div class="news-item">
            <span class="news-date">${item.date}</span>
            <div class="news-content"><span class="news-badge">${item.badge}</span><span class="news-text">${item.text}</span></div>
          </div>`,
      )
      .join("");
  }

  const experienceGrid = document.getElementById("cfg-experience");
  if (experienceGrid && education.length + experience.length) {
    let content = "";
    if (education.length) {
      content += `<div class="exp-category"><h3>Education</h3>${education
        .map(
          (item) =>
            `<div class="exp-item"><div class="exp-period">${item.period}</div><div class="exp-details"><h4>${item.degree}</h4><p>${item.institution}</p></div></div>`,
        )
        .join("")}</div>`;
    }
    if (experience.length) {
      content += `<div class="exp-category"><h3>Experience</h3>${experience
        .map(
          (item) =>
            `<div class="exp-item"><div class="exp-period">${item.period}</div><div class="exp-details"><h4>${item.role}</h4><p>${item.institution}</p></div></div>`,
        )
        .join("")}</div>`;
    }
    experienceGrid.innerHTML = content;
  }
}

function populateContact(cfg) {
  const contact = document.getElementById("cfg-contact");
  const links = [];

  if (cfg.email) links.push({ label: "Email", url: `mailto:${cfg.email}` });
  if (cfg.links?.github) links.push({ label: "GitHub", url: cfg.links.github });
  if (cfg.links?.scholar) links.push({ label: "Google Scholar", url: cfg.links.scholar });
  if (cfg.links?.twitter) links.push({ label: "X / Twitter", url: cfg.links.twitter });
  if (cfg.links?.cv) links.push({ label: "CV", url: cfg.links.cv });

  setSectionVisibility("contact", links.length > 0);
  if (!contact || !links.length) return;

  const linksContainer = contact.querySelector(".contact-links");
  linksContainer.innerHTML = links
    .map(({ label, url }) => `<a class="contact-item" href="${url}">${label}</a>`)
    .join("");
}
