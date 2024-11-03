// Ambil data kategori makanan dari API menggunakan Axios
$(document).ready(() => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => {
      const $categoriesContainer = $("#categories");

      $.each(response.data.categories, function (index, category) {
        // Buat elemen untuk setiap kategori
        const $categoryCard = $("<div>").addClass(
          "bg-white shadow rounded-lg p-4 text-center dark:bg-gray-800 dark:text-gray-300 cursor-pointer transition-all transform hover:shadow-lg hover:scale-105"
        );

        // Elemen anchor untuk navigasi
        const $categoryLink = $("<a>")
          .attr(
            "href",
            `categoryDetail.html?category-name=${category.strCategory}`
          )
          .addClass("block");

        // Gambar kategori
        const $categoryImage = $("<img>")
          .attr("src", category.strCategoryThumb)
          .attr("alt", category.strCategory)
          .addClass("w-full rounded mb-2");

        // Nama kategori
        const $categoryName = $("<h3>")
          .addClass("text-xl font-semibold")
          .text(category.strCategory);

        // Gabungkan elemen
        $categoryLink.append($categoryImage).append($categoryName);
        $categoryCard.append($categoryLink);
        $categoriesContainer.append($categoryCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
});
