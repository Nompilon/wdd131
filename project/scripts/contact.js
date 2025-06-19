document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form.rev");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop normal form submission

        // Collect form values
        const firstName = form.elements["fname"].value.trim();
        const lastName = form.elements["lname"].value.trim();
        const email = form.elements["email"].value.trim();
        const recipeType = form.elements["product"].value;
        const difficulty = form.querySelector('input[name="rating"]:checked')?.value || "";
        const recipeText = form.elements["writtenReview"].value.trim();

        if (!firstName || !lastName || !email || !recipeType || !difficulty || !recipeText) {
            alert("Please fill in all required fields.");
            return;
        }

        // Create recipe object
        const newRecipe = {
            firstName,
            lastName,
            email,
            recipeType,
            difficulty,
            recipeText,
            dateSubmitted: new Date().toISOString()
        };

        // Get existing recipes from localStorage or empty array
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

        // Add new recipe and save back
        recipes.push(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        alert("Thanks for sharing your recipe!");

        form.reset();

        // Optional: redirect to recipes.html to see all recipes
        window.location.href = "recipes.html";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const recipeTypes = [
        "Appetizer",
        "Main Course",
        "Dessert",
        "Baking",
        "Salad",
        "Soup",
        "Snack",
        "Beverage"
    ];

    const select = document.getElementById("product");

    // Clear existing options except the placeholder
    select.innerHTML = '<option value="" disabled selected>Select Product ▼</option>';

    // Add options from the array
    recipeTypes.forEach(type => {
        const option = document.createElement("option");
        option.value = type.toLowerCase().replace(/\s+/g, "-"); // e.g. "Main Course" -> "main-course"
        option.textContent = type;
        select.appendChild(option);
    });
});