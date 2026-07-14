# Restaurant Ordering System

A modern, responsive restaurant ordering system built with HTML5, CSS3, JavaScript (ES6), and Bootstrap 5. This project provides a complete digital menu, shopping cart, and checkout experience.

## 🚀 Features

### 🍽️ Home Page
- Hero banner with restaurant branding
- Featured dishes showcase
- Popular categories with visual cards
- Customer reviews section
- Call-to-action buttons
- Today's special offers

### 📖 Digital Menu
- **8 Categories**: Pizza, Burgers, Chicken, Fast Food, Pasta, Salads, Desserts, Drinks
- Each item displays:
  - High-quality image
  - Name and description
  - Price
  - Rating (with star visualization)
  - Preparation time
  - Add to Cart button
  - Favorite button
  - View details button

### 🔍 Search & Filter
- Search food by name or description
- Filter by category
- Sort by price (low/high)
- Sort by rating
- Sort by preparation time
- Filter featured items only
- Category pills for quick filtering

### 🛒 Shopping Cart
- Add items to cart
- Increase/decrease quantities
- Remove items
- View subtotal, tax, delivery fee
- View total amount
- Promo code support
- Persistent cart (Local Storage)

### 💳 Checkout Page
- Customer information form
- Payment method selection (UI only)
- Order summary
- Form validation
- Order confirmation modal
- Auto-generated order ID

### ❤️ Favorites
- Add food to favorites
- Remove favorites
- Persistent favorites (Local Storage)
- Quick access to saved dishes

### 📊 Restaurant Dashboard
- Total menu items count
- Popular categories count
- Today's orders (dummy data)
- Today's revenue (dummy data)
- Best selling items (dummy data)
- Today's offers

### 💾 Local Storage
- Shopping cart persistence
- Favorites persistence
- Theme preference (dark/light mode)
- Promo code storage

### 🎨 UI Components
- Responsive navbar
- Hero section with animations
- Category pills
- Food cards with hover effects
- Search bar with debounce
- Filter dropdowns
- Cart offcanvas
- Checkout modal
- Toast notifications
- Footer with links

### 🌟 Bonus Features
- 🌙 Dark/Light Mode toggle
- 🍔 Food Detail Modal
- 🎟 Promo Code Input (SAVE20, WELCOME10, FREESHIP)
- 📱 Mobile Bottom Navigation
- ⏱ Delivery Time Badge
- ⭐ Animated Add-to-Cart Effect
- 🔥 Today's Special Section
- Smooth animations and transitions

## 📁 Project Structure

```
restaurant-ordering-system/
│
├── index.html              # Home page
├── menu.html               # Menu page with search/filters
├── cart.html               # Shopping cart page
├── checkout.html           # Checkout page
├── favorites.html          # Favorites page
│
├── css/
│   ├── style.css           # Global styles
│   ├── menu.css            # Menu-specific styles
│   └── responsive.css      # Responsive breakpoints
│
├── js/
│   ├── app.js              # Main app logic & data
│   ├── menu.js             # Menu page functionality
│   ├── cart.js             # Cart page functionality
│   ├── checkout.js         # Checkout page functionality
│   ├── storage.js          # Local Storage management
│   └── ui.js               # UI utilities & 
└── README.md               # Project documentation
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6)** - Modern JavaScript features
- **Bootstrap 5** - UI framework
- **Bootstrap Icons** - Icon library

## 📦 Installation

1. Clone or download the project
2. Open `index.html` in a web browser
3. No build process or dependencies required!

## 🎯 Usage

### Browsing the Menu
1. Navigate to the Menu page
2. Use category pills to filter by category
3. Use the search bar to find specific items
4. Use sort dropdowns to organize items
5. Click "View" to see item details
6. Click "Add to Cart" to add items

### Managing Cart
1. View cart by clicking the cart icon
2. Adjust quantities using +/- buttons
3. Remove items with the trash icon
4. Apply promo codes (try: SAVE20, WELCOME10, FREESHIP)
5. Proceed to checkout when ready

### Placing an Order
1. Fill in customer information
2. Select payment method
3. Review order summary
4. Click "Place Order"
5. Receive order confirmation with order ID

### Using Favorites
1. Click the heart icon on any food item
2. Access favorites from the Favorites page
3. Add favorite items directly to cart

### Dark Mode
1. Click the moon/sun icon in the navbar
2. Theme preference is saved automatically

## 💡 JavaScript Concepts Practiced

- **DOM Manipulation** - Dynamic content rendering
- **Objects & Arrays** - Data structures for food items
- **CRUD Operations** - Cart and favorites management
- **Event Listeners** - User interaction handling
- **Local Storage** - Data persistence
- **Search Algorithms** - Real-time search with debounce
- **Filter & Sort** - Array manipulation
- **Price Calculations** - Dynamic pricing
- **Dynamic Card Rendering** - Template literals
- **Form Validation** - Input validation
- **ES6 Features** - Arrow functions, template literals, destructuring

## 🎨 Customization

### Adding New Food Items
Edit the `foodData` array in `js/app.js`:

```javascript
{
    id: 33,
    name: "New Dish",
    category: "pizza",
    description: "Description here",
    price: 15.99,
    rating: 4.5,
    preparationTime: 25,
    image: "image-url.jpg",
    featured: true,
    special: false
}
```

### Changing Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* ... more variables */
}
```

### Adding Promo Codes
Edit the `setupPromoCode` function in `js/cart.js`:

```javascript
case 'NEWCODE':
    discount = subtotal * 0.15;
    break;
```

## 📱 Responsive Design

The project is fully responsive and works on:
- Desktop (1200px+)
- Laptop (992px - 1199px)
- Tablet (768px - 991px)
- Mobile (576px - 767px)
- Small Mobile (<576px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a frontend-only project
- No backend or database required
- All data is stored in browser's Local Storage
- Images are from Unsplash (placeholder images)
- Payment processing is UI-only (no actual transactions)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Bootstrap 5 Team for the amazing UI framework
- Unsplash for providing high-quality food images
- Bootstrap Icons for the icon set

---

**Built with ❤️ using HTML, CSS, and JavaScript**
