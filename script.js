document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    
    const products = [
        { 
            name: 'Black Oversized Tee', 
            price: 'IDR 249K',
            image: 'https://source.unsplash.com/random/600x800/?fashion,black,shirt'
        },
        { 
            name: 'White Minimalist Dress', 
            price: 'IDR 599K',
            image: 'https://source.unsplash.com/random/600x800/?dress,white'
        },
        { 
            name: 'Monochrome Blazer', 
            price: 'IDR 899K',
            image: 'https://source.unsplash.com/random/600x800/?blazer'
        },
        { 
            name: 'Graphic Print Hoodie', 
            price: 'IDR 399K',
            image: 'https://source.unsplash.com/random/600x800/?hoodie'
        },
        { 
            name: 'Classic White Sneakers', 
            price: 'IDR 799K',
            image: 'https://source.unsplash.com/random/600x800/?sneakers,white'
        },
        { 
            name: 'Black Leather Jacket', 
            price: 'IDR 1.299K',
            image: 'https://source.unsplash.com/random/600x800/?jacket,leather'
        },
        { 
            name: 'Striped Long Sleeve', 
            price: 'IDR 349K',
            image: 'https://source.unsplash.com/random/600x800/?shirt,striped'
        },
        { 
            name: 'Wide Leg Pants', 
            price: 'IDR 549K',
            image: 'https://source.unsplash.com/random/600x800/?pants'
        }
    ];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
});
