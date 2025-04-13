document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    const searchInput = document.getElementById('searchInput');
    
    const products = [
        { 
            name: 'Black Oversized Tee', 
            price: 249000,
            image: 'https://source.unsplash.com/random/600x800/?fashion,black,shirt',
            link: 'https://shopee.co.id/black-oversized-tee'
        },
        { 
            name: 'White Minimalist Dress', 
            price: 599000,
            image: 'https://source.unsplash.com/random/600x800/?dress,white',
            link: 'https://shopee.co.id/white-minimalist-dress'
        },
        { 
            name: 'Monochrome Blazer', 
            price: 899000,
            image: 'https://source.unsplash.com/random/600x800/?blazer',
            link: 'https://shopee.co.id/monochrome-blazer'
        },
        { 
            name: 'Graphic Print Hoodie', 
            price: 399000,
            image: 'https://source.unsplash.com/random/600x800/?hoodie',
            link: 'https://shopee.co.id/graphic-print-hoodie'
        },
        { 
            name: 'Classic White Sneakers', 
            price: 799000,
            image: 'https://source.unsplash.com/random/600x800/?sneakers,white',
            link: 'https://shopee.co.id/classic-white-sneakers'
        },
        { 
            name: 'Black Leather Jacket', 
            price: 1299000,
            image: 'https://source.unsplash.com/random/600x800/?jacket,leather',
            link: 'https://shopee.co.id/black-leather-jacket'
        },
        { 
            name: 'Striped Long Sleeve', 
            price: 349000,
            image: 'https://source.unsplash.com/random/600x800/?shirt,striped',
            link: 'https://shopee.co.id/striped-long-sleeve'
        },
        { 
            name: 'Wide Leg Pants', 
            price: 549000,
            image: 'https://source.unsplash.com/random/600x800/?pants',
            link: 'https://shopee.co.id/wide-leg-pants'
        }
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
