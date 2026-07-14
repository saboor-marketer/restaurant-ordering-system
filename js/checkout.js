// Checkout Page JavaScript
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
    
    // Load order summary
    loadOrderSummary();
    
    // Setup checkout form
    setupCheckoutForm();
    
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

// Load Order Summary
function loadOrderSummary() {
    const container = document.getElementById('orderSummaryItems');
    const emptyMessage = document.getElementById('emptyCartMessage');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    const cart = Storage.getCart();
    
    if (cart.length === 0) {
        container.innerHTML = '';
        emptyMessage.classList.remove('d-none');
        if (placeOrderBtn) placeOrderBtn.disabled = true;
        updatePriceSummary(0);
        return;
    }
    
    emptyMessage.classList.add('d-none');
    if (placeOrderBtn) placeOrderBtn.disabled = false;
    
    container.innerHTML = cart.map(item => `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" class="rounded me-3" style="width: 60px; height: 60px; object-fit: cover;">
                <div>
                    <h6 class="mb-0">${item.name}</h6>
                    <small class="text-muted">Qty: ${item.quantity} × ${UI.formatPrice(item.price)}</small>
                </div>
            </div>
            <strong>${UI.formatPrice(item.price * item.quantity)}</strong>
        </div>
    `).join('');
    
    // Calculate and update price summary
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    document.getElementById('totalQuantity').textContent = totalQuantity;
    updatePriceSummary(subtotal);
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

// Setup Checkout Form
function setupCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    
    if (!form || !placeOrderBtn) return;
    
    placeOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Validate form
        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const zip = document.getElementById('zip').value.trim();
        
        // Basic validation
        if (!fullName || !phone || !email || !address || !city || !state || !zip) {
            UI.showToast('Please fill in all required fields', 'error');
            return;
        }
        
        if (!UI.isValidEmail(email)) {
            UI.showToast('Please enter a valid email address', 'error');
            return;
        }
        
        if (!UI.isValidPhone(phone)) {
            UI.showToast('Please enter a valid phone number', 'error');
            return;
        }
        
        // Get selected payment method
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethod) {
            UI.showToast('Please select a payment method', 'error');
            return;
        }
        
        // Check if cart is empty
        const cart = Storage.getCart();
        if (cart.length === 0) {
            UI.showToast('Your cart is empty', 'error');
            return;
        }
        
        // Place order
        placeOrder();
    });
    
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            // Clear cart
            Storage.saveCart([]);
            Storage.clearPromoCode();
            UI.updateCartBadge();
            
            // Hide modal
            const modal = document.getElementById('confirmationModal');
            bootstrap.Modal.getInstance(modal).hide();
            
            // Redirect to home
            window.location.href = 'index.html';
        });
    }
}

// Place Order
function placeOrder() {
    // Generate order ID
    const orderId = UI.generateOrderId();
    
    // Show confirmation modal
    const modal = document.getElementById('confirmationModal');
    document.getElementById('orderId').textContent = orderId;
    
    const bsModal = new bootstrap.Modal(modal, {
        backdrop: 'static',
        keyboard: false
    });
    bsModal.show();
    
    // Clear cart and promo code
    Storage.saveCart([]);
    Storage.clearPromoCode();
    UI.updateCartBadge();
    
    // Update order summary to show empty
    loadOrderSummary();
    
    UI.showToast('Order placed successfully!');
}
