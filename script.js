// Select the toggle button
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "🌙";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  toggleBtn.textContent = isLight ? "🌙" : "☀️";

  // Save preference
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
