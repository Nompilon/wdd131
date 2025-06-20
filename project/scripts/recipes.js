const pictures = [
    {
        imageUrl: "images/cooking1.webp",
        recipeUrl: "images/cooking1recipe.pdf"

    },
    {
        imageUrl: "images/cooking2.webp",
        recipeUrl: "images/cooking2recipe.pdf"

    },

    {
        imageUrl: "images/cooking3.webp",
        recipeUrl: "images/cooking3recipe.pdf"

    },
    {
        imageUrl: "images/cooking4.jpg",
        recipeUrl: "images/cooking4recipe.pdf"

    },
    {
        imageUrl: "images/cooking5.webp",
        recipeUrl: "images/cooking5recipe.pdf"
    },

    {
        imageUrl: "images/baking1.webp",
        recipeUrl: "images/baking1recipe.pdf"

    },
    {
        imageUrl: "images/baking2.webp",
        recipeUrl: "images/baking2recipe.pdf"

    },
    {
        imageUrl: "images/baking3.webp",
        recipeUrl: "images/baking3recipe.pdf"
    },

    {
        imageUrl: "images/baking4.webp",
        recipeUrl: "images/baking4recipe.pdf"

    },
    {
        imageUrl: "images/dessert1.webp",
        recipeUrl: "images/dessert1recipe.pdf"

    },
    {
        imageUrl: "images/dessert2.webp",
        recipeUrl: "images/dessert1recipe.pdf"

    },

    {
        imageUrl: "images/dessert3.webp",
        recipeUrl: "images/dessert1recipe.pdf"

    },
    {
        imageUrl: "images/dessert4.webp",
        recipeUrl: "images/dessert4recipe.pdf"

    },

    {
        imageUrl: "images/dessert5.webp",
        recipeUrl: "images/dessert5recipe.pdf"

    }

];

document.addEventListener("DOMContentLoaded", () => {
    const recipesDiv = document.getElementById("recipes-pictures");

    function displayImages(filter = "all") {
        recipesDiv.innerHTML = "";

        const filtered = pictures.filter(p => {
            if (filter === "all") return true;
            if (filter === "baking") return p.imageUrl.includes("baking");
            if (filter === "full-meal") return p.imageUrl.includes("cooking") || p.imageUrl.includes("soup");
            if (filter === "dessert") return p.imageUrl.includes("dessert");
        });

        filtered.forEach(pic => {
            const link = document.createElement("a");
            link.href = pic.recipeUrl;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            const img = document.createElement("img");
            img.src = pic.imageUrl;
            img.alt = "Recipe image";
            img.loading = "lazy";

            link.appendChild(img);
            recipesDiv.appendChild(link);
        });
    }

    // ✅ Get filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get("filter") || "all";

    // ✅ Apply filter on load
    displayImages(filterParam);

    // Button click filters (still work as usual)
    document.getElementById("all-btn").addEventListener("click", () => displayImages("all"));
    document.getElementById("baking-btn").addEventListener("click", () => displayImages("baking"));
    document.getElementById("full-meal-btn").addEventListener("click", () => displayImages("full-meal"));
    document.getElementById("dessert-btn").addEventListener("click", () => displayImages("dessert"));
});
