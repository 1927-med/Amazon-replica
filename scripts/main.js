document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    const relatedCarousel = document.querySelector(".related-carousel");
    const relatedLeftArrow = document.getElementById("related-left-arrow");
    const relatedRightArrow = document.getElementById("related-right-arrow");


    let scrollAmount = 0;
    let relatedScrollAmount = 0;

    const scrollStep = 240; // Set the amount of pixels to scroll with each click

    // Sample product data
    const productData = [
        { imgSrc: "images/Product1.jpg", title: "Magic Pen", description: "Everything you write in this pen becomes real.", price: "$1999.99" },
        { imgSrc: "images/Product2.jpg", title: "Product Title 2", description: "Drink from the bottle that can make you younger", price: "$2999.99" },
        { imgSrc: "images/Product3.jpg", title: "Product Title 3", description: "This is not just a light its a future teller", price: "$3999.99" },
        { imgSrc: "images/Product4.jpg", title: "Product Title 4", description: "Short description of the product.", price: "$49.99" },
        { imgSrc: "https://via.placeholder.com/220x320?text=Product+5", title: "Product Title 5", description: "Short description of the product.", price: "$59.99" },
        { imgSrc: "https://via.placeholder.com/220x320?text=Product+6", title: "Product Title 6", description: "Short description of the product.", price: "$69.99" },
        { imgSrc: "https://via.placeholder.com/220x320?text=Product+7", title: "Product Title 7", description: "Short description of the product.", price: "$79.99" },
        { imgSrc: "https://via.placeholder.com/220x320?text=Product+8", title: "Product Title 8", description: "Short description of the product.", price: "$89.99" }
        
        //TODO: Add more products as needed for later and find a way to make it auto
    ];

    // Sample category data
    const categoryData = [
        { name: "Electronics", imgSrc: "https://via.placeholder.com/150?text=Electronics" },
        { name: "Books", imgSrc: "https://via.placeholder.com/150?text=Books" },
        { name: "Clothing", imgSrc: "https://via.placeholder.com/150?text=Clothing" },
        { name: "Home & Kitchen", imgSrc: "https://via.placeholder.com/150?text=Home+%26+Kitchen" },
        { name: "Toys", imgSrc: "https://via.placeholder.com/150?text=Toys" },
        { name: "Sports", imgSrc: "https://via.placeholder.com/150?text=Sports" }
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

     // Function to generate related products
     function generateRelatedProducts() {
        productData.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            productItem.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            `;

            relatedCarousel.appendChild(productItem);
        });
    }

    // Function to generate categories
    function generateCategories() {
        const categoriesContainer = document.querySelector(".categories");
        categoryData.forEach(category => {
            const categoryItem = document.createElement("div");
            categoryItem.className = "category-item";

            categoryItem.innerHTML = `
                <img src="${category.imgSrc}" alt="${category.name}">
                <h3>${category.name}</h3>
            `;

            categoriesContainer.appendChild(categoryItem);
        });
    }

    // Call the function to generate products
    generateProducts();
    generateRelatedProducts();
    generateCategories();

    // Update maxScroll after products are generated
    const updatedMaxScroll = carousel.scrollWidth - carousel.clientWidth;
    const updatedRelatedMaxScroll = relatedCarousel.scrollWidth - relatedCarousel.clientWidth;
    
    // Debounce function to limit the rate of function execution
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Scroll right
    rightArrow.addEventListener("click", debounce(function () {
        if (scrollAmount < updatedMaxScroll) {
            scrollAmount += scrollStep;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }, 100));

    // Scroll left
    leftArrow.addEventListener("click", debounce(function () {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }, 100));

     // Scroll right for related products
     relatedRightArrow.addEventListener("click", debounce(function () {
        if (relatedScrollAmount < updatedRelatedMaxScroll) {
            relatedScrollAmount += scrollStep;
            relatedCarousel.style.transform = `translateX(-${relatedScrollAmount}px)`;
        }
    }, 100));

     // Scroll left for related products
     relatedLeftArrow.addEventListener("click", debounce(function () {
        if (relatedScrollAmount > 0) {
            relatedScrollAmount -= scrollStep;
            relatedCarousel.style.transform = `translateX(-${relatedScrollAmount}px)`;
        }
    }, 100));



    // Auto-scroll functionality
    setInterval(() => {
        if (scrollAmount < updatedMaxScroll) {
            scrollAmount += scrollStep;
        } else {
            scrollAmount = 0;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }, 3000); // Auto-scroll every 3 seconds

    // Add aria-labels for accessibility
    leftArrow.setAttribute('aria-label', 'Scroll left');
    rightArrow.setAttribute('aria-label', 'Scroll right');
    relatedLeftArrow.setAttribute('aria-label', 'Scroll left');
    relatedRightArrow.setAttribute('aria-label', 'Scroll right');
});