document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("education-container");
  if (!container) return;

  fetch("data/timeline.json")
    .then(res => res.json())
    .then(items => {
      container.innerHTML = items
        .filter(item => item.disabled !== true)
        .map(item => `
          <div class="timeline-card">
            <div class="timeline-text">
              <h3>${item.title}</h3>
              <div class="timeline-header">
                <p class="timeline-subtitle">${item.subtitle}</p>
                <span class="timeline-meta">${item.meta}</span>
              </div>
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
