$(document).ready(() => {
  // Ambil parameter meal-id dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const mealId = urlParams.get("meal-id");

  // Ambil data meal berdasarkan meal-id dari API
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((response) => {
      const meal = response.data.meals[0];

      // Set heading dan breadcrumbs
      $("#meal-heading").text(meal.strMeal);
      $("#meal-breadcrumb").text(meal.strMeal);

      // Set kategori
      const categoryName = meal.strCategory;
      $("#category-breadcrumb").text(categoryName);
      $("#category-breadcrumb").attr(
        "href",
        `categoryDetail.html?category-name=${categoryName.toLowerCase()}`
      );

      // Set image
      $("#meal-image").attr("src", meal.strMealThumb);
      // Set instructions
      $("#meal-instructions").text(meal.strInstructions);

      // Set recipes
      const $mealIngredients = $("#meal-ingredients");
      $mealIngredients.empty();
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
          const listItem = $("<li>").text(`${ingredient} - ${measure}`);
          $mealIngredients.append(listItem);
        }
      }

      // Set tutorial embed
      const $mealTutorial = $("#meal-tutorial");

      if (meal.strYoutube) {
        const videoId = meal.strYoutube.split("v=")[1];
        const $iframe = $("<iframe>", {
          src: `https://www.youtube.com/embed/${videoId}`,
          title: "YouTube video player",
          frameborder: "0",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: true,
          class: "w-full h-full absolute",
        });

        // Tambahkan kontainer untuk iframe
        const $container = $("<div>", {
          class: "relative pb-[56.25%] h-0 overflow-hidden",
        });

        // Menambahkan iframe ke dalam kontainer
        $container.append($iframe);
        $mealTutorial.append($container);
      } else {
        // Jika tidak ada video tutorial, sembunyikan elemen tutorial
        $mealTutorial.text("No tutorial available for this meal.");
      }
    })
    .catch((error) => console.error("Error fetching meal details:", error));
});
