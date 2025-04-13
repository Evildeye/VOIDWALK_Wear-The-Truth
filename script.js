document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    const searchInput = document.getElementById('searchInput');
    
    const products = [
        { 
            name: 'Voidwalk - Ourrity Tee Black', 
            price: 150000,
            image: 'img/image1.jpg',
            link: 'https://shopee.co.id/black-oversized-tee'
        },
        { 
            name: 'Voidwalk - Mortsin', 
            price: 150000,
            image: 'img/image2.jpg',
            link: 'https://shopee.co.id/white-minimalist-dress'
        },
        
        
    ];

    function renderProducts(productsArray) {
        productsGrid.innerHTML = '';
        productsArray.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <a href="${product.link}" target="_blank">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </a>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">IDR ${product.price.toLocaleString()}</p>
                    <a href="${product.link}" target="_blank" class="order-text">Click T-Shirt for Order</a>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
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
