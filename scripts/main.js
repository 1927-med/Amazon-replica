// main.js

// main.js

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    let scrollAmount = 0;

    const scrollStep = 220; // Set the amount of pixels to scroll with each click
    const maxScroll = carousel.scrollWidth - carousel.clientWidth; // Max scroll width

    // Scroll right
    rightArrow.addEventListener("click", function () {
        if (scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    // Scroll left
    leftArrow.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});

