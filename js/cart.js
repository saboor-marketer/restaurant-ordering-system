// Cart Page JavaScript
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
    
    // Load cart items
    loadCartItems();
    
    // Setup promo code
    setupPromoCode();
    
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
});

// Load Cart Items
function loadCartItems() {
    const container = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    const cart = Storage.getCart();
    
    if (cart.length === 0) {
        container.innerHTML = '';
        emptyCart.classList.remove('d-none');
        if (checkoutBtn) checkoutBtn.disabled = true;
        updatePriceSummary(0);
        return;
    }
    
    emptyCart.classList.add('d-none');
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2 col-3">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col-md-4 col-6">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">${UI.formatPrice(item.price)} each</small>
                </div>
                <div class="col-md-3 col-9 mt-2 mt-md-0">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-2 col-3 text-end mt-2 mt-md-0">
                    <strong>${UI.formatPrice(item.price * item.quantity)}</strong>
                </div>
                <div class="col-md-1 col-12 text-end mt-2 mt-md-0">
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Calculate and update price summary
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    updatePriceSummary(subtotal);
}

// Update Quantity
function updateQuantity(itemId, change) {
    const cart = Storage.getCart();
    const item = cart.find(c => c.id === itemId);
    
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    Storage.saveCart(cart);
    UI.updateCartBadge();
    loadCartItems();
}

// Remove from Cart
function removeFromCart(itemId) {
    UI.confirm('Are you sure you want to remove this item from cart?', () => {
        const cart = Storage.getCart();
        const updatedCart = cart.filter(item => item.id !== itemId);
        
        Storage.saveCart(updatedCart);
        UI.updateCartBadge();
        loadCartItems();
        UI.showToast('Item removed from cart', 'info');
    });
}

// Update Price Summary
function updatePriceSummary(subtotal) {
    const promoCode = Storage.getPromoCode();
    let discount = 0;
    
    // Apply discount if promo code exists
    if (promoCode) {
        switch (promoCode.toUpperCase()) {
            case 'SAVE20':
                discount = subtotal * 0.20;
                break;
            case 'WELCOME10':
                discount = subtotal * 0.10;
                break;
            case 'FREESHIP':
                discount = 5; // Free delivery
                break;
        }
    }
    
    const tax = subtotal * 0.08;
    const deliveryFee = subtotal > 30 ? 0 : 5;
    const total = subtotal + tax + deliveryFee - discount;
    
    document.getElementById('subtotal').textContent = UI.formatPrice(subtotal);
    document.getElementById('tax').textContent = UI.formatPrice(tax);
    document.getElementById('deliveryFee').textContent = UI.formatPrice(deliveryFee);
    document.getElementById('total').textContent = UI.formatPrice(total);
    
    // Show/hide discount row
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.classList.remove('d-none');
        document.getElementById('discount').textContent = '-' + UI.formatPrice(discount);
    } else {
        discountRow.classList.add('d-none');
    }
}

// Setup Promo Code
function setupPromoCode() {
    const promoInput = document.getElementById('promoCode');
    const applyBtn = document.getElementById('applyPromo');
    
    if (!promoInput || !applyBtn) return;
    
    // Load existing promo code
    const existingPromo = Storage.getPromoCode();
    if (existingPromo) {
        promoInput.value = existingPromo;
    }
    
    applyBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        
        if (!code) {
            UI.showToast('Please enter a promo code', 'warning');
            return;
        }
        
        const validCodes = ['SAVE20', 'WELCOME10', 'FREESHIP'];
        
        if (validCodes.includes(code)) {
            Storage.savePromoCode(code);
            UI.showToast('Promo code applied successfully!');
            loadCartItems();
        } else {
            UI.showToast('Invalid promo code', 'error');
        }
    });
}
