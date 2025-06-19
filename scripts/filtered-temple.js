const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      
    },

    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 10700,
        imageUrl:
            "images/durban-south-africa-temple-7923.webp"

    },
    {
        templeName: "Detroit Michigan",
        location: "Detroit, Michigan, United states",
        dedicated: "1999, October, 23 - 24",
        area: 19860,
        imageUrl:
            "images/detroit-michigan-temple-30608.webp"
    },

    {
        templeName: "Perth Australia",
        location: "Perth, Australia",
        dedicated: "2001, May, 20",
        area: 10700,
        imageUrl:
            "images/perth-australia-temple-16295-thumb.webp"
    },
    
  ];
function createTempleCard(filteredTemples) {
    clearTempleCards();
    const container = document.querySelector("#temple-cards");

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Set content
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML =`<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label"> Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        // Append elements to card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        // Append card to container
        document.querySelector("#temple-cards").appendChild(card);
    
    });
       
   
}


function getYear(dateString) {
    return parseInt(dateString.split(',')[0]);
}

function clearTempleCards() {
    document.querySelector("#temple-cards").innerHTML = "";
}
// Initial display
createTempleCard(temples);

// Navigation filters
document.getElementById("home").addEventListener("click", () => createTempleCard(temples));
document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    createTempleCard(oldTemples);
});
document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    createTempleCard(newTemples);
});
document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    createTempleCard(largeTemples);
});
document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    createTempleCard(smallTemples);
});

window.addEventListener("pagehide", function (event) {
    if (!event.persisted) {
        // Run cleanup only if not using bfcache
    }
});
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
