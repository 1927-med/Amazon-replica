// main.js

// main.js

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    let scrollAmount = 0;

    const scrollStep = 240; // Set the amount of pixels to scroll with each click

    // Sample product data
    const productData = [
        { imgSrc: "images/Product1.jpg", title: "Magic Pen", description: "Everything you write in this pen becomes real.", price: "$1999.99" },
        { imgSrc: "images/Product2.jpg", title: "Product Title 2", description: "Short description of the product.", price: "$29.99" },
        { imgSrc: "images/Product3.jpg", title: "Product Title 3", description: "Short description of the product.", price: "$39.99" },
        { imgSrc: "images/Product4.jpg", title: "Product Title 4", description: "Short description of the product.", price: "$49.99" },
        { imgSrc: "images/Product5.jpg", title: "Product Title 5", description: "Short description of the product.", price: "$59.99" },
        { imgSrc: "images/Product6.jpg", title: "Product Title 6", description: "Short description of the product.", price: "$69.99" }
        // Add more products as needed
    ];

    // Function to generate product items
    function generateProducts() {
        productData.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            productItem.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            `;

            carousel.appendChild(productItem);
        });
    }

    // Call the function to generate products
    generateProducts();

    // Update maxScroll after products are generated
    const updatedMaxScroll = carousel.scrollWidth - carousel.clientWidth;

    // Scroll right
    rightArrow.addEventListener("click", function () {
        if (scrollAmount < updatedMaxScroll) {
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

