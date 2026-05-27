const projects = [
  {
    title: "Zippie World",
    url: "https://zippieworld.in/",
    category: "EdTech",
    stack: ["React", "Supabase", "Kids Learning"],
    summary:
      "A learning universe for children with interactive educational experiences and playful exploration.",
  },
  {
    title: "Zippie English",
    url: "https://english.zippieworld.in/",
    category: "EdTech",
    stack: ["Vite", "Capacitor", "Spaced Repetition"],
    summary:
      "English learning platform with gamified practice, child-safe UX, and multi-skill language improvement.",
  },
  {
    title: "Pixie Babe",
    url: "https://pixiebabe.com/",
    category: "Creative",
    stack: ["Creative AI", "Image UX", "SaaS"],
    summary:
      "Creative AI product experience focused on visual generation, identity, and user-friendly creative workflows.",
  },
  {
    title: "Soul Confess",
    url: "https://soulconfess.in/",
    category: "AI",
    stack: ["Privacy UX", "AI", "Community"],
    summary:
      "Anonymous confession and emotional expression platform designed around privacy, trust, and simple UX.",
  },
  {
    title: "Nakshatra Cloud",
    url: "https://nakshatra.cloud/",
    category: "AI",
    stack: ["Astro API", "Cloud", "Decision UX"],
    summary:
      "Astrology and birth-chart API/product platform powering horoscope, chart, and matching experiences.",
  },
  {
    title: "Nakshatra Love",
    url: "https://love.nakshatra.cloud/",
    category: "AI",
    stack: ["Compatibility", "Astro AI", "Product UX"],
    summary:
      "Relationship and compatibility experience built on Nakshatra Cloud astrology intelligence.",
  },
  {
    title: "RebarPro AI",
    url: "https://rebarproai.com/",
    category: "AI",
    stack: ["Civil Tech", "AI Workflow", "Engineering"],
    summary:
      "Civil and construction technology product for reinforcement-bar planning and AI-assisted engineering workflows.",
  },
  {
    title: "Roomify AI",
    url: "https://roomifyai.in/",
    category: "Creative",
    stack: ["Interior AI", "Vision UX", "React"],
    summary:
      "Interior design AI app for room transformation, visual redesign, and fast creative concept generation.",
  },
  {
    title: "Neon Drift",
    url: "https://neondrift.in/",
    category: "Creative",
    stack: ["Animation", "Game UX", "Frontend"],
    summary:
      "High-energy interactive/game-style web experience showcasing front-end animation and product polish.",
  },
  {
    title: "GREEKS",
    url: "https://greeks.in/",
    category: "Web3",
    stack: ["Web3", "Options", "Community"],
    summary:
      "Web3 and options community product tied to trading utilities, token workflows, and market education.",
  },
  {
    title: "OptionKing AI",
    url: "https://optionkingai.com",
    category: "FinTech",
    stack: ["Options", "Charts", "AI Analytics"],
    summary:
      "AI-assisted options trading platform focused on analytics, strategy, Greeks, and trader decision support.",
  },
  {
    title: "MechX Garage",
    url: "https://mechxgarage.com/",
    category: "AI",
    stack: ["Automotive", "Service UX", "AI"],
    summary:
      "Automotive service and garage technology product with modern web UX for vehicle and workshop workflows.",
  },
];

const grid = document.querySelector("#projectGrid");
const filters = document.querySelectorAll(".filter");

function projectInitials(title) {
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function renderProjects(category = "all") {
  const visible =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  grid.innerHTML = visible
    .map(
      (project) => `
      <article class="project-card" data-category="${project.category}">
        <a class="screenshot-wrap project-visual" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.title}">
          <span class="visual-orb">${projectInitials(project.title)}</span>
          <span class="visual-title">${project.title}</span>
          <span class="visual-domain">${new URL(project.url).hostname.replace(/^www\./, "")}</span>
        </a>
        <div class="project-content">
          <div class="project-top">
            <h3 class="project-title">${project.title}</h3>
            <span class="tag">${project.category}</span>
          </div>
          <p class="project-body">${project.summary}</p>
          <div class="project-meta">
            ${project.stack.map((item) => `<span class="meta-pill">${item}</span>`).join("")}
          </div>
          <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">
            Open live app
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
