// Food Data
const foodData = [
    // Pizza
    {
        id: 1,
        name: "Margherita Pizza",
        category: "pizza",
        description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil",
        price: 12.99,
        rating: 4.8,
        preparationTime: 25,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "pizza",
        description: "Loaded with pepperoni and extra cheese",
        price: 14.99,
        rating: 4.7,
        preparationTime: 30,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 3,
        name: "BBQ Chicken Pizza",
        category: "pizza",
        description: "Grilled chicken with BBQ sauce and red onions",
        price: 16.99,
        rating: 4.6,
        preparationTime: 30,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 4,
        name: "Veggie Supreme Pizza",
        category: "pizza",
        description: "Loaded with fresh vegetables and herbs",
        price: 13.99,
        rating: 4.5,
        preparationTime: 25,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    // Burgers
    {
        id: 5,
        name: "Classic Cheeseburger",
        category: "burgers",
        description: "Juicy beef patty with cheddar cheese and fresh vegetables",
        price: 9.99,
        rating: 4.7,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 6,
        name: "Bacon Burger",
        category: "burgers",
        description: "Crispy bacon with beef patty and special sauce",
        price: 11.99,
        rating: 4.6,
        preparationTime: 18,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 7,
        name: "Veggie Burger",
        category: "burgers",
        description: "Plant-based patty with fresh vegetables",
        price: 10.99,
        rating: 4.4,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 8,
        name: "Double Burger",
        category: "burgers",
        description: "Two beef patties with double cheese",
        price: 13.99,
        rating: 4.8,
        preparationTime: 20,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    // Chicken
    {
        id: 9,
        name: "Grilled Chicken",
        category: "chicken",
        description: "Tender grilled chicken with herbs and spices",
        price: 11.99,
        rating: 4.5,
        preparationTime: 20,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 10,
        name: "Fried Chicken",
        category: "chicken",
        description: "Crispy fried chicken with secret spices",
        price: 10.99,
        rating: 4.7,
        preparationTime: 25,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 11,
        name: "Chicken Wings",
        category: "chicken",
        description: "Spicy buffalo wings with ranch dip",
        price: 9.99,
        rating: 4.6,
        preparationTime: 20,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 12,
        name: "Chicken Tenders",
        category: "chicken",
        description: "Crispy chicken tenders with honey mustard",
        price: 8.99,
        rating: 4.4,
        preparationTime: 18,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    // Fast Food
    {
        id: 13,
        name: "Tacos",
        category: "fastfood",
        description: "Crispy tacos with beef, lettuce, and cheese",
        price: 8.99,
        rating: 4.5,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 14,
        name: "Burrito",
        category: "fastfood",
        description: "Large burrito with rice, beans, and meat",
        price: 10.99,
        rating: 4.6,
        preparationTime: 18,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 15,
        name: "Nachos",
        category: "fastfood",
        description: "Loaded nachos with cheese, salsa, and guacamole",
        price: 9.99,
        rating: 4.4,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 16,
        name: "Quesadilla",
        category: "fastfood",
        description: "Cheese quesadilla with chicken and peppers",
        price: 8.99,
        rating: 4.3,
        preparationTime: 12,
        image: "https://images.unsplash.com/photo-1604334218200-bd6b8f5d4a6d?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    // Pasta
    {
        id: 17,
        name: "Spaghetti Carbonara",
        category: "pasta",
        description: "Classic Italian pasta with eggs, cheese, and bacon",
        price: 13.99,
        rating: 4.7,
        preparationTime: 20,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 18,
        name: "Fettuccine Alfredo",
        category: "pasta",
        description: "Creamy pasta with parmesan and herbs",
        price: 12.99,
        rating: 4.6,
        preparationTime: 18,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 19,
        name: "Penne Arrabbiata",
        category: "pasta",
        description: "Spicy tomato sauce with garlic and chili",
        price: 11.99,
        rating: 4.4,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 20,
        name: "Lasagna",
        category: "pasta",
        description: "Layers of pasta, meat, and cheese",
        price: 14.99,
        rating: 4.8,
        preparationTime: 30,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    // Salads
    {
        id: 21,
        name: "Caesar Salad",
        category: "salads",
        description: "Crispy romaine with parmesan and croutons",
        price: 8.99,
        rating: 4.5,
        preparationTime: 10,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 22,
        name: "Greek Salad",
        category: "salads",
        description: "Fresh vegetables with feta cheese and olives",
        price: 9.99,
        rating: 4.4,
        preparationTime: 10,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 23,
        name: "Chef Salad",
        category: "salads",
        description: "Mixed greens with ham, cheese, and eggs",
        price: 10.99,
        rating: 4.3,
        preparationTime: 12,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 24,
        name: "Fruit Salad",
        category: "salads",
        description: "Fresh seasonal fruits with honey dressing",
        price: 7.99,
        rating: 4.6,
        preparationTime: 8,
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=300&fit=crop",
        featured: false,
        special: true
    },
    // Desserts
    {
        id: 25,
        name: "Chocolate Cake",
        category: "desserts",
        description: "Rich chocolate cake with ganache",
        price: 6.99,
        rating: 4.8,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 26,
        name: "Cheesecake",
        category: "desserts",
        description: "New York style cheesecake with berry topping",
        price: 7.99,
        rating: 4.7,
        preparationTime: 10,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 27,
        name: "Ice Cream Sundae",
        category: "desserts",
        description: "Vanilla ice cream with chocolate sauce and toppings",
        price: 5.99,
        rating: 4.5,
        preparationTime: 5,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 28,
        name: "Apple Pie",
        category: "desserts",
        description: "Warm apple pie with vanilla ice cream",
        price: 6.99,
        rating: 4.6,
        preparationTime: 15,
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    // Drinks
    {
        id: 29,
        name: "Fresh Lemonade",
        category: "drinks",
        description: "Freshly squeezed lemonade with mint",
        price: 3.99,
        rating: 4.5,
        preparationTime: 5,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
        featured: true,
        special: false
    },
    {
        id: 30,
        name: "Iced Coffee",
        category: "drinks",
        description: "Cold brew coffee with cream",
        price: 4.99,
        rating: 4.6,
        preparationTime: 5,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
        featured: true,
        special: true
    },
    {
        id: 31,
        name: "Smoothie",
        category: "drinks",
        description: "Mixed fruit smoothie with yogurt",
        price: 5.99,
        rating: 4.4,
        preparationTime: 8,
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=400&h=300&fit=crop",
        featured: false,
        special: false
    },
    {
        id: 32,
        name: "Milkshake",
        category: "drinks",
        description: "Creamy chocolate milkshake",
        price: 5.99,
        rating: 4.7,
        preparationTime: 5,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
        featured: true,
        special: false
    }
];

// Customer Reviews
const reviews = [
    {
        name: "John Doe",
        rating: 5,
        comment: "Amazing food! The pizza was delicious and delivery was super fast.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
        name: "Sarah Smith",
        rating: 4,
        comment: "Great variety of food. The burgers are my favorite!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
        name: "Mike Johnson",
        rating: 5,
        comment: "Best restaurant in town! Highly recommend the chicken wings.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
];

// Categories
const categories = [
    { name: "Pizza", emoji: "🍕", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=200&fit=crop" },
    { name: "Burgers", emoji: "🍔", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
    { name: "Chicken", emoji: "🍗", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
    { name: "Fast Food", emoji: "🌮", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop" },
    { name: "Pasta", emoji: "🍝", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=200&fit=crop" },
    { name: "Salads", emoji: "🥗", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=200&fit=crop" },
    { name: "Desserts", emoji: "🍰", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop" },
    { name: "Drinks", emoji: "☕", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" }
];

// Best Selling Items (Dummy Data)
const bestSellingItems = [
    { name: "Margherita Pizza", sales: 156 },
    { name: "Classic Cheeseburger", sales: 142 },
    { name: "Fried Chicken", sales: 128 },
    { name: "Spaghetti Carbonara", sales: 115 },
    { name: "Chocolate Cake", sales: 98 }
];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    UI.initTheme();
    
    // Update cart badge
    UI.updateCartBadge();
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', UI.toggleTheme);
    }
    
    // Load home page content
    if (document.getElementById('specialItems')) {
        loadSpecialItems();
    }
    
    if (document.getElementById('featuredItems')) {
        loadFeaturedItems();
    }
    
    if (document.getElementById('categories')) {
        loadCategories();
    }
    
    if (document.getElementById('reviews')) {
        loadReviews();
    }
    
    if (document.getElementById('totalItems')) {
        loadDashboard();
    }
});

// Load Special Items
function loadSpecialItems() {
    const container = document.getElementById('specialItems');
    const specialItems = foodData.filter(item => item.special).slice(0, 3);
    
    container.innerHTML = specialItems.map(item => `
        <div class="col-md-4">
            <div class="card food-card h-100">
                <div class="position-relative">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <span class="special-badge">🔥 Special</span>
                    <span class="delivery-badge">${item.preparationTime} min</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text text-muted small">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price">${UI.formatPrice(item.price)}</span>
                        <div class="rating-stars text-warning">
                            ${UI.generateStars(item.rating)} <small class="text-muted">(${item.rating})</small>
                        </div>
                    </div>
                    <button class="btn btn-primary w-100 mt-3 add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Featured Items
function loadFeaturedItems() {
    const container = document.getElementById('featuredItems');
    const featuredItems = foodData.filter(item => item.featured).slice(0, 6);
    
    container.innerHTML = featuredItems.map(item => `
        <div class="col-md-4 col-sm-6">
            <div class="card food-card h-100">
                <div class="position-relative">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <span class="delivery-badge">${item.preparationTime} min</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text text-muted small">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price">${UI.formatPrice(item.price)}</span>
                        <div class="rating-stars text-warning">
                            ${UI.generateStars(item.rating)} <small class="text-muted">(${item.rating})</small>
                        </div>
                    </div>
                    <button class="btn btn-primary w-100 mt-3 add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Categories
function loadCategories() {
    const container = document.getElementById('categories');
    
    container.innerHTML = categories.map(cat => `
        <div class="col-md-3 col-sm-6">
            <div class="category-card" style="background-image: url('${cat.image}')" onclick="window.location.href='menu.html'">
                <span>${cat.emoji} ${cat.name}</span>
            </div>
        </div>
    `).join('');
}

// Load Reviews
function loadReviews() {
    const container = document.getElementById('reviews');
    
    container.innerHTML = reviews.map(review => `
        <div class="col-md-4">
            <div class="review-card">
                <div class="d-flex align-items-center mb-3">
                    <img src="${review.avatar}" class="review-avatar me-3" alt="${review.name}">
                    <div>
                        <h6 class="mb-0">${review.name}</h6>
                        <div class="rating-stars text-warning small">
                            ${UI.generateStars(review.rating)}
                        </div>
                    </div>
                </div>
                <p class="text-muted mb-0">"${review.comment}"</p>
            </div>
        </div>
    `).join('');
}

// Load Dashboard
function loadDashboard() {
    document.getElementById('totalItems').textContent = foodData.length;
    
    const bestSellingContainer = document.getElementById('bestSellingItems');
    if (bestSellingContainer) {
        bestSellingContainer.innerHTML = bestSellingItems.map((item, index) => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${index + 1}. ${item.name}</span>
                <span class="badge bg-primary rounded-pill">${item.sales} orders</span>
            </li>
        `).join('');
    }
}

// Add to Cart (Global function)
function addToCart(itemId) {
    const item = foodData.find(f => f.id === itemId);
    if (!item) return;
    
    const cart = Storage.getCart();
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    Storage.saveCart(cart);
    UI.updateCartBadge();
    UI.showToast(`${item.name} added to cart!`);
    
    // Add animation to button
    const btn = event.target;
    UI.addAnimation(btn, 'pulse');
}
