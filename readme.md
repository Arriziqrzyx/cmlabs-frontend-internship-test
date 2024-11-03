# Meal Wise

Meal Wise is a web application designed to help users explore a wide variety of meal recipes and their categories. This application features a clean and intuitive interface that allows users to browse meals, view detailed recipes, and discover new culinary ideas easily.

## Tech Stack:

- **HTML/CSS**: For the structure and presentation of the web pages.
- **JavaScript**: For the core functionality and interactivity of the app.
- **jQuery**: To simplify DOM manipulation and handle events.
- **Tailwind CSS**: For styling the application with a responsive and modern design.
- **Axios**: For making HTTP requests to fetch meal data from an external API.
- **Font Awesome**: For adding scalable vector icons to enhance the user interface.
- **The Meal DB API**: For accessing a variety of meal recipes categorized by type, ingredients, and regions.

## Features:

- **Browse Meals by Category**: Users can explore different categories of meals and find recipes that interest them.
- **Detailed Recipe View**: Each meal includes a detailed view with ingredients, instructions, and an embedded tutorial video (if available).
- **Responsive Design**: The application is fully responsive and works seamlessly on both mobile and desktop devices.
- **Dark/Light Theme Toggle**: Users can switch between dark and light themes based on their preference.
- **Breadcrumb Navigation**: Easy navigation that helps users keep track of their location within the app.
- **Tutorials with Videos**: Some meals include video tutorials that provide step-by-step instructions on how to prepare the dish.

## Setup:

1. Clone the repository:

   ```bash
   git clone https://github.com/Arriziqrzyx/cmlabs-frontend-internship-test.git
   cd cmlabs-frontend-internship-test
   ```

2. Install dependencies:

   - **npm install**: This command is necessary to install all the dependencies listed in the `package.json` file of the project. Without running this command, the application will not have access to the libraries and packages required to function properly, such as Tailwind CSS.

   ```bash
   npm install
   ```

3. **Run the app**:

   - To run the Tailwind CSS build process, use the following command:

     ```bash
     npm run dev
     ```

   - **Option 1**: Use the **Live Server** extension in your code editor (like Visual Studio Code) to serve the application. This allows for live reloading as you make changes.

   - **Option 2**: Alternatively, you can open the `index.html` file directly in your web browser. However, this may not reflect real-time changes as effectively as using Live Server.

4. **Demo**:

   - You can check out the live demo of Meal Wise here: [Meal Wise Live Demo](https://cmlabs-mealwise.vercel.app/).
   - This demo provides a complete overview of the application's functionality and how users can explore various meal recipes. Feel free to try it out and enjoy!
