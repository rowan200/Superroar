# SUPEROAR - Pressure Washer E-Commerce Website

A modern, fully functional e-commerce website for SUPEROAR pressure washer equipment built with React, Vite, and Tailwind CSS.

![SUPEROAR](https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
SUPEROAR/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Fixed navigation header with cart
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── Categories.jsx   # Residential/Commercial split
│   │   ├── ProductCatalog.jsx # Horizontal scrolling products
│   │   ├── Services.jsx     # "Why SUPEROAR" benefits
│   │   ├── HowItWorks.jsx   # 3-step process
│   │   ├── Gallery.jsx      # Image gallery grid
│   │   ├── Info.jsx         # OEM Quality info section
│   │   ├── Brands.jsx       # Shop by category
│   │   ├── Accessories.jsx  # Accessories with add-to-cart
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   ├── CartDrawer.jsx   # Slide-out shopping cart
│   │   └── CheckoutModal.jsx # Stripe payment checkout
│   ├── context/
│   │   └── CartContext.jsx  # Shopping cart state management
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js           # Vite configuration
```

---

## 🎨 Design System

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Sand Dune Tan) | `#D7C4A3` | Buttons, accents, highlights |
| Primary Dark | `#c5b08d` | Hover states |
| Secondary | `#1a1a1a` | Dark backgrounds, text |
| White | `#ffffff` | Backgrounds, text |
| Gray 900 | `#111827` | Footer, dark sections |

### Typography

- **Font Family**: System UI stack (system-ui, -apple-system, sans-serif)
- **Headings**: Font-black (900 weight), tracking-tight
- **Body**: Regular weight, good line height for readability

### Tailwind Custom Classes

```css
/* Defined in tailwind.config.js */
colors: {
  primary: '#D7C4A3',
  'primary-dark': '#c5b08d',
  secondary: '#1a1a1a',
}
```

---

## 🛒 Shopping Cart System

### Features
- Add/remove items from any product component
- Quantity controls (+/-)
- Persistent storage via localStorage
- Real-time cart count in header
- Slide-out drawer UI

### Usage

```jsx
import { useCart } from '../context/CartContext';

function MyComponent() {
  const { 
    items,           // Array of cart items
    addToCart,       // (product) => void
    removeFromCart,  // (productId) => void
    updateQuantity,  // (productId, quantity) => void
    clearCart,       // () => void
    getCartCount,    // () => number
    getCartTotal,    // () => number
    openCart,        // () => void
    closeCart,       // () => void
    isOpen           // boolean
  } = useCart();

  // Add a product
  addToCart({
    id: 'product-1',
    name: 'Pressure Washer Pro',
    price: 2499,  // Number (dollars)
    image: 'https://...'
  });
}
```

### Cart Item Structure

```javascript
{
  id: string,        // Unique identifier
  name: string,      // Product name
  price: number,     // Price in dollars (e.g., 2499)
  image: string,     // Image URL
  quantity: number   // Added automatically
}
```

---

## 💳 Payment System (Stripe)

### Overview
The checkout system uses Stripe for secure, PCI-compliant payment processing.

### Setup Instructions

1. **Create Stripe Account**
   - Go to [https://stripe.com](https://stripe.com)
   - Sign up for a free account

2. **Get API Keys**
   - Navigate to `Developers > API Keys`
   - Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)

3. **Configure the App**
   - Open `src/components/CheckoutModal.jsx`
   - Replace the placeholder key:
   
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_ACTUAL_KEY_HERE';
   ```

4. **Test Cards (Test Mode)**
   
   | Card Number | Result |
   |-------------|--------|
   | `4242 4242 4242 4242` | Success |
   | `4000 0000 0000 0002` | Declined |
   | `4000 0000 0000 9995` | Insufficient funds |
   
   - Use any future expiry date (e.g., 12/34)
   - Use any 3-digit CVC (e.g., 123)

### Checkout Flow

1. User adds items to cart
2. Clicks "Secure Checkout" in cart drawer
3. Fills billing information
4. Enters card details (handled by Stripe Elements)
5. Payment processed securely
6. Order confirmation shown with Order ID

### Security Features

- ✅ 256-bit SSL encryption
- ✅ PCI DSS Level 1 compliant
- ✅ Card data tokenized (never touches your server)
- ✅ 3D Secure support
- ✅ Fraud detection

### Production Checklist

- [ ] Replace test key with live key (`pk_live_...`)
- [ ] Set up webhook endpoint for order fulfillment
- [ ] Configure Stripe Dashboard for receipts
- [ ] Enable 3D Secure if needed
- [ ] Set up Stripe Radar for fraud protection

---

## 📧 Email System (EmailJS)

### Overview
Contact form submissions are sent via EmailJS, allowing emails directly from the browser without a backend.

### Setup Instructions

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Sign up (200 free emails/month)

2. **Add Email Service**
   - Go to `Email Services`
   - Click `Add New Service`
   - Connect Gmail, Outlook, or other provider

3. **Create Email Template**
   - Go to `Email Templates`
   - Create new template with these variables:
   
   ```
   Subject: New SUPEROAR Contact: {{order_type}}
   
   From: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Order Type: {{order_type}}
   
   Message:
   {{message}}
   ```

4. **Get Credentials**
   - Service ID: From `Email Services` tab
   - Template ID: From `Email Templates` tab
   - Public Key: From `Account > General`

5. **Configure the App**
   - Open `src/components/Contact.jsx`
   - Replace the placeholder values:
   
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_xxxxxx';
   const EMAILJS_TEMPLATE_ID = 'template_xxxxxx';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

### Form Fields Captured

| Field | Variable | Required |
|-------|----------|----------|
| Name | `from_name` | Yes |
| Email | `from_email` | Yes |
| Phone | `phone` | No |
| Order Type | `order_type` | Yes |
| Message | `message` | Yes |

---

## 🧩 Components Reference

### Header
Fixed navigation with mobile menu and cart integration.

```jsx
<Header />
```

**Features:**
- Sticky positioning
- Mobile hamburger menu
- Cart icon with item count
- Smooth scroll navigation

---

### Hero
Full-width hero section with headline and CTA.

```jsx
<Hero />
```

---

### ProductCatalog
Horizontal scrolling product carousel with add-to-cart.

```jsx
<ProductCatalog />
```

**Features:**
- Arrow navigation
- Touch/scroll support
- Add to cart with visual feedback

---

### CartDrawer
Slide-out shopping cart panel.

```jsx
<CartDrawer />
```

**Features:**
- Item list with images
- Quantity controls
- Remove items
- Subtotal calculation
- Checkout button

---

### CheckoutModal
Stripe-powered payment modal.

```jsx
<CheckoutModal isOpen={boolean} onClose={function} />
```

**Features:**
- Billing form
- Stripe Elements card input
- Order summary with tax/shipping
- Payment processing
- Success confirmation

---

### Contact
Contact sales form with EmailJS integration.

```jsx
<Contact />
```

**Features:**
- Form validation
- Loading state
- Success message
- Error handling

---

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | React DOM rendering |
| lucide-react | ^0.292.0 | Icon library |
| framer-motion | ^10.16.4 | Animations |
| @stripe/stripe-js | ^2.x | Stripe SDK |
| @stripe/react-stripe-js | ^2.x | Stripe React components |
| @emailjs/browser | ^3.x | Email sending |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^5.0.0 | Build tool |
| tailwindcss | ^3.3.5 | CSS framework |
| postcss | ^8.4.31 | CSS processing |
| autoprefixer | ^10.4.16 | CSS prefixing |
| @vitejs/plugin-react | ^4.2.0 | React plugin for Vite |

---

## 🔧 Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tailwind.config.js
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#D7C4A3',
        'primary-dark': '#c5b08d',
        secondary: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

### Deploy Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Static Hosting**
Upload the `dist/` folder to any static host:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages

### Environment Variables (Production)

For production, consider moving API keys to environment variables:

```bash
# .env.local (do NOT commit this file)
VITE_STRIPE_KEY=pk_live_xxxxx
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
```

Then access in code:
```javascript
const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY;
```

---

## 📝 Customization Guide

### Changing Products

Edit the products array in:
- `src/components/ProductCatalog.jsx` - Main product carousel
- `src/components/Accessories.jsx` - Accessories section

```javascript
const products = [
  {
    id: 'unique-id',
    name: 'Product Name',
    price: 1999,  // In dollars
    image: 'https://...',
    category: 'Category Name'
  },
  // ... more products
];
```

### Changing Colors

Update `tailwind.config.js`:

```javascript
colors: {
  primary: '#YOUR_HEX_COLOR',
  'primary-dark': '#YOUR_DARKER_SHADE',
}
```

### Changing Business Info

Update these files:
- `src/components/Header.jsx` - Company name, navigation
- `src/components/Contact.jsx` - Address, phone
- `src/App.jsx` - Footer content

---

## 🐛 Troubleshooting

### Cart not persisting?
- Check browser localStorage is enabled
- Clear localStorage: `localStorage.removeItem('superoar-cart')`

### Stripe not loading?
- Verify publishable key is correct
- Check browser console for errors
- Ensure you're using HTTPS in production

### EmailJS not sending?
- Verify all three credentials are correct
- Check EmailJS dashboard for errors
- Confirm email service is connected

### Styles not applying?
- Run `npm run dev` to rebuild
- Clear browser cache
- Check Tailwind config includes all file paths

---

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

## 🤝 Support

For questions about this codebase, check the component files for inline documentation.

**SUPEROAR Equipment**  
North Houston, TX  
Nationwide Shipping Available
