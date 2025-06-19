const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const pictures = [
    {
        pictureName: "Baking",
        imageUrl: "images/baking-home.webp",
        linkUrl: "recipes.html"

    },
    {
        pictureName: "Cooking",
        imageUrl: "images/cooking-home.webp",
        linkUrl: "recipes.html"

    },

    {
        pictureName: "Desserts",
        imageUrl: "images/dessert4.webp",
        linkUrl: "recipes.html"

    }

]

function createPictureCard(filteredPictures) {
    clearPictureCards();
    const container = document.querySelector("#picture-cards");
    filteredPictures.forEach(picture => {
        let card = document.createElement("section");
        let link = document.createElement("a");
        let name = document.createElement("h2");
        let img = document.createElement("img");

        link.setAttribute("href", picture.linkUrl);
        link.appendChild(img);

        // Set content
        name.textContent = picture.pictureName;
        img.setAttribute("src", picture.imageUrl);
        img.setAttribute("alt", `${picture.pictureName} Picture`);
        img.setAttribute("loading", "lazy");

        // Append elements to card
        card.appendChild(name);
        card.appendChild(link);

        container.appendChild(card);

        // Append card to container
        document.querySelector("#picture-cards").appendChild(card);

    });


}
function getYear(dateString) {
    return parseInt(dateString.split(',')[0]);
}

function clearPictureCards() {
    document.querySelector("#picture-cards").innerHTML = "";
}
// Initial display
createPictureCard(pictures);
