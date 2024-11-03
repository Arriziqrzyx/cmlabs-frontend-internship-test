// Toggle mobile menu visibility
$(document).ready(function () {
  $("#menu-button").click(function () {
    const mobileMenu = $("#mobile-menu");

    if (mobileMenu.hasClass("hidden")) {
      mobileMenu
        .removeClass("hidden")
        .removeClass("slide-up")
        .addClass("slide-down");
      mobileMenu.css("max-height", "300px");
    } else {
      mobileMenu.removeClass("slide-down").addClass("slide-up");

      // Hapus class `hidden` setelah animasi selesai
      setTimeout(() => {
        mobileMenu.addClass("hidden").css("max-height", "0");
      }, 500);
    }
  });
});

// Theme Controller
$(document).ready(function () {
  const themeToggles = $(".theme-toggle");
  const themeIcons = $(".theme-icon");

  // Check localStorage for theme
  const currentTheme = localStorage.getItem("theme");

  // Set initial theme
  if (currentTheme === "dark") {
    $("body").addClass("dark");
    themeIcons.each(function () {
      $(this).removeClass("fa-sun").addClass("fa-moon");
    });
  }

  // Function to toggle theme
  function toggleTheme() {
    const isDark = $("body").toggleClass("dark").hasClass("dark");

    // Save theme to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Change icon
    themeIcons.each(function () {
      if (isDark) {
        $(this).removeClass("fa-sun").addClass("fa-moon");
      } else {
        $(this).removeClass("fa-moon").addClass("fa-sun");
      }
    });
  }

  // Event listener for toggle button
  themeToggles.click(toggleTheme);
});
