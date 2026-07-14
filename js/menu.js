// Menu Page JavaScript
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
    
    // Load food items
    loadFoodItems();
    
    // Setup search and filters
    setupFilters();
    
    // Setup category pills
    setupCategoryPills();
    
    // Load dashboard
    if (document.getElementById('totalItems')) {
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
    
    // Setup food detail modal
    setupFoodDetailModal();
    
    // Check if on favorites page
    if (window.location.pathname.includes('favorites.html')) {
        loadFavorites();
    }
});

// Load Food Items
function loadFoodItems(items = foodData) {
    const container = document.getElementById('foodItems');
    const noResults = document.getElementById('noResults');
    
    if (items.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('d-none');
        return;
    }
    
    noResults.classList.add('d-none');
    
    const favorites = Storage.getFavorites();
    
    container.innerHTML = items.map(item => {
        const isFavorite = favorites.includes(item.id);
        return `
            <div class="col-md-4 col-sm-6">
                <div class="card food-item-card fade-in">
                    <div class="card-img-wrapper">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}">
                        <span class="delivery-time-badge">
                            <i class="bi bi-clock"></i> ${item.preparationTime} min
                        </span>
                        ${item.featured ? '<span class="featured-badge"><i class="bi bi-star-fill"></i> Featured</span>' : ''}
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${item.id}, this)">
                            <i class="bi bi-heart${isFavorite ? '-fill' : ''}"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="food-name">${item.name}</h5>
                        <p class="food-description">${item.description}</p>
                        <div class="food-meta">
                            <span class="badge bg-warning text-dark">
                                <i class="bi bi-star-fill"></i> ${item.rating}
                            </span>
                            <span class="badge bg-info">
                                <i class="bi bi-tag"></i> ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                            </span>
                        </div>
                        <div class="food-price">${UI.formatPrice(item.price)}</div>
                        <div class="food-actions">
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                                <i class="bi bi-cart-plus"></i> Add to Cart
                            </button>
                            <button class="btn btn-outline-primary" onclick="showFoodDetail(${item.id})">
                                <i class="bi bi-eye"></i> View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Setup Filters
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const featuredOnly = document.getElementById('featuredOnly');
    const resetFilters = document.getElementById('resetFilters');
    
    if (searchInput) {
        searchInput.addEventListener('input', UI.debounce(applyFilters, 300));
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
    
    if (featuredOnly) {
        featuredOnly.addEventListener('change', applyFilters);
    }
    
    if (resetFilters) {
        resetFilters.addEventListener('click', resetAllFilters);
    }
}

// Apply Filters
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const featuredOnly = document.getElementById('featuredOnly');
    
    let filteredItems = [...foodData];
    
    // Search filter
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === categoryFilter.value);
    }
    
    // Featured only filter
    if (featuredOnly && featuredOnly.checked) {
        filteredItems = filteredItems.filter(item => item.featured);
    }
    
    // Sort
    if (sortFilter && sortFilter.value !== 'default') {
        switch (sortFilter.value) {
            case 'price-low':
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredItems.sort((a, b) => b.rating - a.rating);
                break;
            case 'time':
                filteredItems.sort((a, b) => a.preparationTime - b.preparationTime);
                break;
        }
    }
    
    loadFoodItems(filteredItems);
}

// Reset All Filters
function resetAllFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const featuredOnly = document.getElementById('featuredOnly');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (sortFilter) sortFilter.value = 'default';
    if (featuredOnly) featuredOnly.checked = false;
    
    // Reset category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.dataset.category === 'all') {
            pill.classList.add('active');
        }
    });
    
    loadFoodItems(foodData);
}

// Setup Category Pills
function setupCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update active state
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            // Update dropdown
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = pill.dataset.category;
            }
            
            // Apply filters
            applyFilters();
        });
    });
}

// Toggle Favorite
function toggleFavorite(itemId, btn) {
    const favorites = Storage.getFavorites();
    const index = favorites.indexOf(itemId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="bi bi-heart"></i>';
        UI.showToast('Removed from favorites');
    } else {
        favorites.push(itemId);
        btn.classList.add('active');
        btn.innerHTML = '<i class="bi bi-heart-fill"></i>';
        UI.showToast('Added to favorites');
    }
    
    Storage.saveFavorites(favorites);
    
    // If on favorites page, reload
    if (window.location.pathname.includes('favorites.html')) {
        loadFavorites();
    }
}

// Show Food Detail Modal
function showFoodDetail(itemId) {
    const item = foodData.find(f => f.id === itemId);
    if (!item) return;
    
    const modal = document.getElementById('foodDetailModal');
    const favorites = Storage.getFavorites();
    const isFavorite = favorites.includes(itemId);
    
    document.getElementById('foodDetailImage').src = item.image;
    document.getElementById('foodDetailName').textContent = item.name;
    document.getElementById('foodDetailDescription').textContent = item.description;
    document.getElementById('foodDetailRating').textContent = item.rating;
    document.getElementById('foodDetailTime').textContent = item.preparationTime;
    document.getElementById('foodDetailPrice').textContent = UI.formatPrice(item.price);
    
    const favoriteBtn = document.getElementById('foodDetailFavorite');
    favoriteBtn.innerHTML = `<i class="bi bi-heart${isFavorite ? '-fill' : ''}"></i>`;
    favoriteBtn.classList.toggle('active', isFavorite);
    favoriteBtn.onclick = () => {
        toggleFavorite(itemId, favoriteBtn);
    };
    
    const addToCartBtn = document.getElementById('foodDetailAddToCart');
    addToCartBtn.onclick = () => {
        addToCart(itemId);
        bootstrap.Modal.getInstance(modal).hide();
    };
    
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Setup Food Detail Modal
function setupFoodDetailModal() {
    const modal = document.getElementById('foodDetailModal');
    if (!modal) return;
    
    modal.addEventListener('hidden.bs.modal', () => {
        // Clean up when modal is closed
    });
}

// Load Favorites
function loadFavorites() {
    const container = document.getElementById('favoritesItems');
    const emptyFavorites = document.getElementById('emptyFavorites');
    const favorites = Storage.getFavorites();
    
    const favoriteItems = foodData.filter(item => favorites.includes(item.id));
    
    if (favoriteItems.length === 0) {
        container.innerHTML = '';
        emptyFavorites.classList.remove('d-none');
        return;
    }
    
    emptyFavorites.classList.add('d-none');
    
    container.innerHTML = favoriteItems.map(item => `
        <div class="col-md-4 col-sm-6">
            <div class="card food-item-card fade-in">
                <div class="card-img-wrapper">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <span class="delivery-time-badge">
                        <i class="bi bi-clock"></i> ${item.preparationTime} min
                    </span>
                    <button class="favorite-btn active" onclick="toggleFavorite(${item.id}, this)">
                        <i class="bi bi-heart-fill"></i>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="food-name">${item.name}</h5>
                    <p class="food-description">${item.description}</p>
                    <div class="food-meta">
                        <span class="badge bg-warning text-dark">
                            <i class="bi bi-star-fill"></i> ${item.rating}
                        </span>
                        <span class="badge bg-info">
                            <i class="bi bi-tag"></i> ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                    </div>
                    <div class="food-price">${UI.formatPrice(item.price)}</div>
                    <div class="food-actions">
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline-primary" onclick="showFoodDetail(${item.id})">
                            <i class="bi bi-eye"></i> View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to Cart (redefined for menu page)
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
}
