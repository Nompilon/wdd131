const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
  ];
window.addEventListener("DOMContentLoaded", () => {
    // 👉 Populate the select dropdown
    const select = document.getElementById("product");
    select.innerHTML = '<option value="" disabled selected>Select a Product &#9662;</option>';

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    // 👉 Increment review count only if on review.html
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount");
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem("reviewCount", reviewCount);

        // Optional: Display it on the page
        const counterDisplay = document.createElement("p");
        counterDisplay.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;
        document.body.appendChild(counterDisplay);
    }
});