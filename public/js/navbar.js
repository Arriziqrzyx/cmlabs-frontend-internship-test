// Toggle mobile menu visibility
document.getElementById("menu-button").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const isHidden = mobileMenu.classList.contains("hidden");

  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.remove("slide-up");
    mobileMenu.classList.add("slide-down");

    // set max-height untuk memulai animasi turun
    mobileMenu.style.maxHeight = "300px";
  } else {
    // ketika menu disembunyikan
    mobileMenu.classList.remove("slide-down");
    mobileMenu.classList.add("slide-up");

    // hapus class `hidden` setelah animasi selesai
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      mobileMenu.style.maxHeight = "0";
    }, 500);
  }
});

// toggleController
document.addEventListener("DOMContentLoaded", function () {
  const themeToggles = document.querySelectorAll(".theme-toggle");
  const themeIcons = document.querySelectorAll(".theme-icon");

  // Check localStorage for theme
  const currentTheme = localStorage.getItem("theme");

  // Set initial theme
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    themeIcons.forEach((icon) => {
      icon.classList.replace("fa-sun", "fa-moon");
    });
  }

  // Function to toggle theme
  function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");

    // Save theme to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Change icon
    themeIcons.forEach((icon) => {
      if (isDark) {
        icon.classList.replace("fa-sun", "fa-moon");
      } else {
        icon.classList.replace("fa-moon", "fa-sun");
      }
    });
  }

  // Event listener for toggle button
  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleTheme);
  });
});
