document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects-container");
  if (!projectsContainer) return;

  fetch("data/projects.json")
    .then(res => res.json())
    .then(projects => {
      projectsContainer.innerHTML = projects
        .filter(project => project.disabled !== true)
        .map(project => `
          <div class="project-card">
            <div class="project-text">
              <h3>${project.title}</h3>
              <p class="project-subtitle">${project.subtitle}</p>

              <ul>
                ${project.points.map(p => `<li>${p}</li>`).join("")}
              </ul>

              <div class="project-links">
                ${project.demo ? `<a href="${project.demo}" target="_blank">Video Demo</a>` : ""}
                ${project.source ? `<a href="${project.source}" target="_blank">GitHub</a>` : ""}
              </div>
            </div>

            ${project.image ? `
              <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
              </div>
            ` : ""}
          </div>
        `)
        .join("");
    })
    .catch(err => console.error("Projects load error:", err));
});
