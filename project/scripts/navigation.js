document.addEventListener("DOMContentLoaded", () => {
    // ————— Nav toggle —————
    const mainnav = document.querySelector(".navigation");
    const hambutton = document.querySelector("#menu");
    if (!mainnav || !hambutton) {
        console.error("Nav or menu button not found");
    } else {
        hambutton.addEventListener("click", e => {
            e.preventDefault();
            mainnav.classList.toggle("show");
            hambutton.classList.toggle("show");
        });
    }

    // ————— Picture cards —————
    const pictures = [
        { pictureName: "Baking", imageUrl: "images/baking-home.webp", linkUrl: "recipes.html" },
        { pictureName: "Cooking", imageUrl: "images/cooking-home.webp", linkUrl: "recipes.html" },
        { pictureName: "Desserts", imageUrl: "images/dessert4.webp", linkUrl: "recipes.html" }
    ];

    const container = document.querySelector("#picture-cards");
    if (!container) {
        console.error("#picture-cards container not found");
        return;
    }

    function createPictureCards(items) {
        container.innerHTML = "";
        items.forEach(item => {
            const card = document.createElement("section");
            const name = document.createElement("h2");
            const link = document.createElement("a");
            const img = document.createElement("img");

            name.textContent = item.pictureName;

            link.href = item.linkUrl;
            img.src = item.imageUrl;
            img.alt = `${item.pictureName} picture`;
            img.loading = "lazy";

            link.appendChild(img);
            card.appendChild(name);
            card.appendChild(link);
            container.appendChild(card);
        });
    }

    createPictureCards(pictures);
});