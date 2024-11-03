$(document).ready(() => {
  // Ambil parameter kategori dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoryName = urlParams.get("category-name");

  // Ambil data makanan berdasarkan kategori dari API
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then((response) => {
      const $mealsContainer = $("#meals");
      const $categoryHeading = $("#category-heading");
      const $categoryBreadcrumb = $("#category-breadcrumb");

      // Set heading dan breadcrumbs
      $categoryHeading.text(`${categoryName} Meals`);
      $categoryBreadcrumb.text(categoryName);

      $.each(response.data.meals, (index, meal) => {
        // Buat elemen untuk setiap makanan
        const $mealCard = $("<div>").addClass(
          "bg-white shadow rounded-lg p-4 text-center dark:bg-gray-800 dark:text-gray-300 cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg max-w-xs"
        );

        // Tambahkan gambar makanan
        const $mealImage = $("<img>")
          .attr("src", meal.strMealThumb)
          .attr("alt", meal.strMeal)
          .addClass("w-full rounded mb-2");

        // Tambahkan nama makanan
        const $mealName = $("<h3>")
          .addClass("text-xl font-semibold")
          .text(meal.strMeal);

        // Gabungkan elemen
        $mealCard.append($mealImage).append($mealName);
        $mealsContainer.append($mealCard);

        // Tambahkan event listener untuk mengarahkan ke halaman detail meal
        $mealCard.on("click", () => {
          const mealId = meal.idMeal;
          window.location.href = `mealsDetail.html?meal-id=${mealId}`;
        });
      });
    })
    .catch((error) => console.error("Error fetching meals:", error));
});
