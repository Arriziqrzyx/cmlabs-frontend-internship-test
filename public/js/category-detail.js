// Ambil parameter kategori dari URL
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("category-name");

// Ambil data makanan berdasarkan kategori dari API
axios
  .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
  .then((response) => {
    const mealsContainer = document.getElementById("meals");
    const categoryHeading = document.getElementById("category-heading");
    const categoryBreadcrumb = document.getElementById("category-breadcrumb");

    // Set heading dan breadcrumbs
    categoryHeading.textContent = `${categoryName} Meals`;
    categoryBreadcrumb.textContent = categoryName;

    response.data.meals.forEach((meal) => {
      // Buat elemen untuk setiap makanan
      const mealCard = document.createElement("div");
      mealCard.classList.add(
        "bg-white",
        "shadow",
        "rounded-lg",
        "p-4",
        "text-center",
        "dark:bg-gray-800",
        "dark:text-gray-300",
        "cursor-pointer",
        "transition-transform",
        "duration-200",
        "hover:scale-105",
        "hover:shadow-lg",
        "max-w-xs"
      );

      // Tambahkan gambar makanan
      const mealImage = document.createElement("img");
      mealImage.src = meal.strMealThumb;
      mealImage.alt = meal.strMeal;
      mealImage.classList.add("w-full", "rounded", "mb-2");

      // Tambahkan nama makanan
      const mealName = document.createElement("h3");
      mealName.classList.add("text-xl", "font-semibold");
      mealName.textContent = meal.strMeal;

      // Gabungkan elemen
      mealCard.appendChild(mealImage);
      mealCard.appendChild(mealName);
      mealsContainer.appendChild(mealCard);
    });
  })
  .catch((error) => console.error("Error fetching meals:", error));
