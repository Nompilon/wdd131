window.addEventListener("DOMContentLoaded", () => {
    // Get the review count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // If exists, increment it, else start at 1
    if (reviewCount) {
        reviewCount = parseInt(reviewCount) + 1;
    } else {
        reviewCount = 1;
    }

    // Save it back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display on the page (optional)
    const counterDisplay = document.createElement("p");
    counterDisplay.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;
    document.body.appendChild(counterDisplay);
});