// Local Storage Management
const Storage = {
    // Get cart from localStorage
    getCart: () => {
        const cart = localStorage.getItem('foodieCart');
        return cart ? JSON.parse(cart) : [];
    },

    // Save cart to localStorage
    saveCart: (cart) => {
        localStorage.setItem('foodieCart', JSON.stringify(cart));
    },

    // Get favorites from localStorage
    getFavorites: () => {
        const favorites = localStorage.getItem('foodieFavorites');
        return favorites ? JSON.parse(favorites) : [];
    },

    // Save favorites to localStorage
    saveFavorites: (favorites) => {
        localStorage.setItem('foodieFavorites', JSON.stringify(favorites));
    },

    // Get theme preference from localStorage
    getTheme: () => {
        return localStorage.getItem('foodieTheme') || 'light';
    },

    // Save theme preference to localStorage
    saveTheme: (theme) => {
        localStorage.setItem('foodieTheme', theme);
    },

    // Get applied promo code from localStorage
    getPromoCode: () => {
        return localStorage.getItem('foodiePromoCode') || null;
    },

    // Save promo code to localStorage
    savePromoCode: (code) => {
        localStorage.setItem('foodiePromoCode', code);
    },

    // Clear promo code from localStorage
    clearPromoCode: () => {
        localStorage.removeItem('foodiePromoCode');
    },

    // Clear all data
    clearAll: () => {
        localStorage.removeItem('foodieCart');
        localStorage.removeItem('foodieFavorites');
        localStorage.removeItem('foodieTheme');
        localStorage.removeItem('foodiePromoCode');
    }
};
