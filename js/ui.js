// UI Utilities and Helper Functions
const UI = {
    // Show toast notification
    showToast: (message, type = 'success') => {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        const toastHeader = toast.querySelector('.toast-header i');
        
        toastMessage.textContent = message;
        
        // Update icon based on type
        toastHeader.className = 'bi me-2';
        if (type === 'success') {
            toastHeader.classList.add('bi-check-circle', 'text-success');
        } else if (type === 'error') {
            toastHeader.classList.add('bi-x-circle', 'text-danger');
        } else if (type === 'warning') {
            toastHeader.classList.add('bi-exclamation-circle', 'text-warning');
        } else if (type === 'info') {
            toastHeader.classList.add('bi-info-circle', 'text-info');
        }
        
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    },

    // Update cart badge count
    updateCartBadge: () => {
        const cart = Storage.getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartBadge = document.getElementById('cartBadge');
        const mobileCartBadge = document.getElementById('mobileCartBadge');
        
        if (cartBadge) cartBadge.textContent = totalItems;
        if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
    },

    // Toggle dark/light mode
    toggleTheme: () => {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        const currentTheme = Storage.getTheme();
        
        if (currentTheme === 'dark') {
            body.classList.remove('dark-mode');
            Storage.saveTheme('light');
            if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        } else {
            body.classList.add('dark-mode');
            Storage.saveTheme('dark');
            if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        }
    },

    // Initialize theme
    initTheme: () => {
        const theme = Storage.getTheme();
        const themeToggle = document.getElementById('themeToggle');
        
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        }
    },

    // Format price
    formatPrice: (price) => {
        return '$' + price.toFixed(2);
    },

    // Generate star rating HTML
    generateStars: (rating) => {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="bi bi-star-fill"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="bi bi-star-half"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="bi bi-star"></i>';
        }
        
        return stars;
    },

    // Add animation to element
    addAnimation: (element, animationClass) => {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 500);
    },

    // Scroll to element
    scrollToElement: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Validate email
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Validate phone number
    isValidPhone: (phone) => {
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    },

    // Generate random order ID
    generateOrderId: () => {
        return 'ORD-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
    },

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Loading state
    showLoading: (container) => {
        container.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading...</p>
            </div>
        `;
    },

    hideLoading: (container) => {
        // Loading is replaced by actual content
    },

    // Empty state
    showEmptyState: (container, message, icon = 'bi-cart-x', actionText = 'Browse Menu', actionLink = 'menu.html') => {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="bi ${icon} display-1 text-muted"></i>
                <h4 class="mt-3">${message}</h4>
                <a href="${actionLink}" class="btn btn-primary mt-3">${actionText}</a>
            </div>
        `;
    },

    // Confirm dialog
    confirm: (message, callback) => {
        if (confirm(message)) {
            callback();
        }
    },

    // Get delivery time badge
    getDeliveryTimeBadge: (time) => {
        if (time <= 20) {
            return '<span class="badge bg-success"><i class="bi bi-lightning"></i> Fast</span>';
        } else if (time <= 30) {
            return '<span class="badge bg-info"><i class="bi bi-clock"></i> Normal</span>';
        } else {
            return '<span class="badge bg-warning"><i class="bi bi-clock-history"></i> Slow</span>';
        }
    }
};
