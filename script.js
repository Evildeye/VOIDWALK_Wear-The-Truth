document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    const cartIcon = document.getElementById('cartIcon');
    const cartPanel = document.querySelector('.cart-panel');
    const searchInput = document.getElementById('searchInput');
    
    // Data produk dengan link Shopee
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

    // Inisialisasi keranjang
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Fungsi render produk
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
                    <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product).replace(/</g, '\\u003c')})">
                        Tambahkan ke Keranjang
                    </button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }

    // Fungsi pencarian
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    }

    // Fungsi keranjang
    function saveCartToStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(product) {
        const existingItem = cart.find(item => item.name === product.name);
        if(existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCart();
        saveCartToStorage();
    }

    function updateCart() {
        const cartItems = document.querySelector('.cart-items');
        const cartCount = document.querySelector('.cart-count');
        const cartTotal = document.querySelector('.cart-total span');
        
        cartItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <p>IDR ${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity('${item.name}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('${item.name}', 1)">+</button>
                    </div>
                </div>
            `;
        });
        
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartTotal.textContent = `IDR ${total.toLocaleString()}`;
    }

    window.changeQuantity = function(productName, amount) {
        const item = cart.find(item => item.name === productName);
        if(item) {
            item.quantity += amount;
            if(item.quantity < 1) {
                cart = cart.filter(i => i !== item);
            }
            updateCart();
            saveCartToStorage();
        }
    }

    // Event Listeners
    searchInput.addEventListener('input', handleSearch);
    cartIcon.addEventListener('click', () => cartPanel.classList.add('active'));
    document.querySelector('.close-cart').addEventListener('click', () => 
        cartPanel.classList.remove('active')
    );

    // Initial render
    renderProducts(products);
    updateCart();

    // Tutup panel keranjang saat klik di luar
    document.addEventListener('click', (e) => {
        if(!cartPanel.contains(e.target) && !cartIcon.contains(e.target)) {
            cartPanel.classList.remove('active');
        }
    });
});

// Handle klik di dalam panel keranjang
document.querySelector('.cart-panel').addEventListener('click', (e) => {
    e.stopPropagation();
});
