# EON Coffee Shop - Single Page Application (SPA)

A modern React-based Single Page Application for EON Coffee Shop, built with React Router DOM for seamless navigation and dynamic routing.

## Features

✅ **Single Page Application (SPA)** - No page reloads, smooth navigation  
✅ **React Router DOM** - Dynamic routing and navigation  
✅ **5 Main Sections** - Home, About, Menu, Contact, Free Wall  
✅ **Responsive Design** - Bootstrap 5 + Custom CSS  
✅ **Interactive Components** - Order modals, contact forms, message posting  
✅ **404 Page** - Custom not found page with navigation options  
✅ **Programmatic Navigation** - Smooth transitions between pages  

## Project Structure

```
coffee/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation header
│   │   ├── Home.js         # Home page component
│   │   ├── About.js        # About page component
│   │   ├── Menu.js         # Menu page with ordering
│   │   ├── Contact.js      # Contact form
│   │   ├── FreeWall.js     # Message posting system
│   │   └── NotFound.js     # 404 error page
│   ├── App.js              # Main app with routing
│   ├── App.css             # Global styles
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Features Overview

### 🏠 Home Page
- Hero section with call-to-action
- Features showcase
- Image gallery
- Smooth navigation to other sections

### 📋 Menu Page
- Interactive menu with categories (Hot Drinks, Cold Drinks, Pastries)
- Order functionality with confirmation modals
- Responsive grid layout
- Filter by category

### ℹ️ About Page
- Company story and mission
- Team information
- Values and principles
- Call-to-action sections

### 📞 Contact Page
- Contact information display
- Interactive contact form
- Google Maps integration
- Social media links

### 💬 Free Wall
- Message posting system
- Real-time message display
- Local storage persistence
- User-friendly interface

### 🚫 404 Page
- Custom error page
- Navigation options
- Helpful suggestions
- Professional design

## Technical Implementation

### Routing
- **React Router DOM v6** for modern routing
- **BrowserRouter** for clean URLs
- **Dynamic routing** with parameters
- **Programmatic navigation** using `useNavigate()`
- **404 handling** with wildcard routes

### Styling
- **Bootstrap 5** for responsive grid and components
- **Custom CSS** for brand-specific styling
- **Font Awesome** icons for enhanced UI
- **Google Fonts** (Poppins, Pacifico) for typography

### State Management
- **React Hooks** (useState, useEffect) for local state
- **Local Storage** for data persistence
- **Form handling** with controlled components

### Navigation Features
- **Active link highlighting** based on current route
- **Smooth transitions** between pages
- **Back/Forward browser support**
- **Direct URL access** to any page

## Development Notes

### Key Components
1. **Header.js** - Navigation with active state management
2. **App.js** - Main routing configuration
3. **Individual page components** - Self-contained page logic

### Styling Approach
- Global styles in `App.css`
- Component-specific styles inline where needed
- Bootstrap classes for layout and utilities
- Custom CSS variables for consistent theming

### Data Persistence
- Free Wall messages stored in localStorage
- Form data handled with React state
- No external database required for basic functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- **Code splitting** with React Router
- **Lazy loading** potential for future optimization
- **Optimized images** with proper sizing
- **Efficient re-renders** with proper state management

## Future Enhancements

- User authentication system
- Shopping cart functionality
- Payment integration
- Admin dashboard
- Real-time messaging
- Database integration

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use different port
   PORT=3001 npm start
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check for syntax errors
   npm run build
   # Use development mode for debugging
   npm start
   ```

## Support

For issues or questions about this SPA implementation, please check:
- React Router DOM documentation
- Bootstrap 5 documentation
- React official documentation

---

**EON Coffee Shop SPA** - Built with ❤️ using React and React Router DOM
