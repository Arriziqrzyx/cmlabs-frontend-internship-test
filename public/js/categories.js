// Ambil data kategori makanan dari API menggunakan Axios
axios
  .get("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => {
    const categoriesContainer = document.getElementById("categories");

    response.data.categories.forEach((category) => {
      // Buat elemen untuk setiap kategori
      const categoryCard = document.createElement("div");
      categoryCard.classList.add(
        "bg-white",
        "shadow",
        "rounded-lg",
        "p-4",
        "text-center",
        "dark:bg-gray-800",
        "dark:text-gray-300",
        "cursor-pointer",
        "transition-all",
        "transform",
        "hover:shadow-lg",
        "hover:scale-105"
      );

      // Elemen anchor untuk navigasi
      const categoryLink = document.createElement("a");
      categoryLink.href = `category-detail.html?category=${category.strCategory}`;
      categoryLink.classList.add("block");

      // gambar kategori
      const categoryImage = document.createElement("img");
      categoryImage.src = category.strCategoryThumb;
      categoryImage.alt = category.strCategory;
      categoryImage.classList.add("w-full", "rounded", "mb-2");

      // Nama kategori
      const categoryName = document.createElement("h3");
      categoryName.classList.add("text-xl", "font-semibold");
      categoryName.textContent = category.strCategory;

      // Gabungkan elemen
      categoryLink.appendChild(categoryImage);
      categoryLink.appendChild(categoryName);
      categoryCard.appendChild(categoryLink);
      categoriesContainer.appendChild(categoryCard);
    });
  })
  .catch((error) => console.error("Error fetching categories:", error));
