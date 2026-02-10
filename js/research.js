fetch("data/research.json")
  .then(res => res.json())
  .then(papers => {
    const container = document.getElementById("research-container");
    if (!container) return;

    papers.forEach(paper => {

      if (paper.disabled === true) return;
      const card = document.createElement("a");
      card.className = "card";
      card.href = paper.link || "#";
      card.target = paper.link ? "_blank" : "_self";

      card.innerHTML = `
        <div>
          <h3>${paper.title}</h3>
          <p>${paper.subtitle}</p>
        </div>
        <span>${paper.status}</span>
      `;

      container.appendChild(card);
    });
  });
