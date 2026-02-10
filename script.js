document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("themeToggle");
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".content-section");

  // const toggle = document.getElementById("themeToggle");

  /* APPLY SAVED THEME */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀︎"; 
    toggle.classList.remove("light");
    toggle.classList.add("dark");
  } else {
    toggle.textContent = "◐";
    toggle.classList.remove("dark");
    toggle.classList.add("light");
  }

  /* THEME TOGGLE */
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    toggle.textContent = isDark ? "☀︎" : "◐";
    toggle.classList.toggle("dark", isDark);
    toggle.classList.toggle("light", !isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  /* TAB SWITCHING */
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.dataset.section;
      if (!targetId) return;

      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach((section) => {
        section.classList.toggle("active", section.id === targetId);
      });
    });
  });

  /* DEFAULT TAB */
  const defaultTab = document.querySelector('nav a[data-section="blogs"]');
  if (defaultTab) {
    defaultTab.click();
  } else {
    const firstTab = document.querySelector("nav a[data-section]");
    if (firstTab) firstTab.click();
  }

  /* VISITOR COUNTER */
  fetch(
    "https://api.counterapi.dev/v1/abhinav-joshis-team/portfolio-visits/up",
    {
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .then((data) => {
      const el = document.getElementById("visit-count");
      if (el) el.textContent = data.count;
    })
    .catch(() => {
      const el = document.getElementById("visit-count");
      if (el) el.textContent = "—";
    });
});
