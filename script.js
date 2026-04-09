const themeToggle = document.getElementById("themeToggle");
const yearNode = document.getElementById("currentYear");

function syncThemeButton() {
  if (!themeToggle) {
    return;
  }

  themeToggle.textContent = document.body.classList.contains("dark")
    ? "切换到浅色"
    : "切换到深色";
}

if (themeToggle) {
  const savedTheme = localStorage.getItem("academic-homepage-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  syncThemeButton();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("academic-homepage-theme", theme);
    syncThemeButton();
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
