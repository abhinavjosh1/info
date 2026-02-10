document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("education-container");
  if (!container) return;

  fetch("data/timeline.json")
    .then(res => res.json())
    .then(items => {
      container.innerHTML = items
        .filter(item => item.disabled !== true)
        .map(item => `
          <div class="project-card">
            <div class="project-text">
              <h3>${item.title}</h3>
              <p class="project-subtitle">${item.subtitle}</p>
              <span class="project-meta">${item.meta}</span>

              ${item.points?.length
                ? `<ul>
                    ${item.points.map(p => `<li>${p}</li>`).join("")}
                   </ul>`
                : ""}
            </div>
          </div>
        `)
        .join("");
    })
    .catch(err => console.error("Education load error:", err));
});
