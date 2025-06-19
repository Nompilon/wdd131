document.addEventListener("DOMContentLoaded", () => {
    // Populate recipe-type dropdown
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
    select.innerHTML = '<option value="" disabled selected>Select Type ▼</option>';
    recipeTypes.forEach(type => {
        const option = document.createElement("option");
        option.value = type.toLowerCase().replace(/\s+/g, "-");
        option.textContent = type;
        select.appendChild(option);
    });

    // Form handling
    const form = document.querySelector("form.rev");
    if (!form) {
        console.error("Form with class 'rev' not found");
        return;
    }
    form.addEventListener("submit", event => {
        event.preventDefault();

        const firstName = form.elements["fname"].value.trim();
        const lastName = form.elements["lname"].value.trim();
        const recipeType = form.elements["product"].value;
        const difficulty = form.querySelector('input[name="rating"]:checked')?.value || "";
        const recipeText = form.elements["writtenReview"].value.trim();

        if (!firstName || !lastName || !recipeType || !difficulty || !recipeText) {
            alert("Please fill in all required fields.");
            return;
        }

        const newRecipe = {
            firstName,
            lastName,
            recipeType,
            difficulty,
            recipeText,
            dateSubmitted: new Date().toISOString()
        };

        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        alert("Thanks for sharing your recipe!");
        form.reset();
        window.location.href = "recipes.html";
    });
});
  