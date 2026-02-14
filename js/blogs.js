const container = document.getElementById("blogs-container");
const filtersContainer = document.getElementById("blog-filters");

let allBlogs = [];
let activeCategory = "All";

fetch("data/blogs.json")
  .then((res) => res.json())
  .then((data) => {
    // remove disabled blogs globally
    allBlogs = data.filter((b) => b.disabled !== true);
    renderFilters(allBlogs);
    renderBlogs(allBlogs);
  });

function renderFilters(data) {
  const categories = ["All", ...new Set(data.map((b) => b.category))];

  filtersContainer.innerHTML = categories
    .map(
      (cat) => `
    <span class="blog-filter ${cat === "All" ? "active" : ""}"
          data-category="${cat}">
      ${cat}
    </span>
  `,
    )
    .join("");

  document.querySelectorAll(".blog-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".blog-filter")
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");
      activeCategory = btn.dataset.category;

      const filtered =
        activeCategory === "All"
          ? allBlogs
          : allBlogs.filter((b) => b.category === activeCategory);

      renderBlogs(filtered);
    });
  });
}

function renderBlogs(blogs) {
  container.innerHTML = blogs.map(blog => `
    <a class="card" href="blogs.html?post=blogs/${blog.file}">
      <div class="card-text">
        <h3 class="card-title">${blog.title}</h3>
        <p class="card-subtitle">${blog.subtitle}</p>
      </div>
      <span class="card-date">${blog.date}</span>
    </a>
  `).join("");
}
