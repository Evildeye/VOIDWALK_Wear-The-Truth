document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    const searchInput = document.getElementById('searchInput');
    
    const products = [
        { 
            name: 'Voidwalk - Ourrity Tee Black', 
            price: 150000,
            images: [
                'img/image1.jpg',
                'img/image1-2.jpg'
            ],
            link: 'https://shopee.co.id/ourrity-tee'
        },
        { 
            name: 'Voidwalk - Mortsin Tee Black', 
            price: 150000,
            images: [
                'img/image2.jpg',
                'img/image2-2.jpg'
            ],
            link: 'https://shopee.co.id/mortsin-tee'
        }
    ];

    function initSwiper(container) {
        new Swiper(container, {
            loop: true,
            navigation: {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            },
            resistanceRatio: 0.6,
            grabCursor: true,
            observer: true,
            observeParents: true,
            speed: 500
        });
    }

    function renderProducts(productsArray) {
        productsGrid.innerHTML = '';
        productsArray.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        ${product.images.map(img => `
                            <div class="swiper-slide">
                                <img src="${img}" alt="${product.name}">
                            </div>
                        `).join('')}
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">IDR ${product.price.toLocaleString()}</p>
                    <a href="${product.link}" target="_blank" class="order-text">Click T-Shirt for Order</a>
                </div>
            `;

            productsGrid.appendChild(productCard);
            initSwiper(productCard.querySelector('.swiper-container'));
        });
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    }

    searchInput.addEventListener('input', handleSearch);
    renderProducts(products);
});
