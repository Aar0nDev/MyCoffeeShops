# EON Coffee Shop - Setup Guide

## Database Setup

1. **Start XAMPP**
   - Open XAMPP Control Panel
   - Start Apache and MySQL services

2. **Create Database**
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Import the `database_structure.sql` file
   - This will create the `eon_coffee_shop` database with all necessary tables and sample data

## Project Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Access the Application**
   - React App: http://localhost:3000
   - PHP API: http://localhost/coffee/api/

## Features Implemented

### ✅ Database Structure
- Users table for authentication
- Categories and menu items tables
- Orders and order items tables
- Free wall messages table
- Contact messages table

### ✅ PHP API Endpoints
- `/api/auth.php` - Authentication (login, register, logout)
- `/api/menu.php` - Menu items and categories
- `/api/orders.php` - Order management
- `/api/messages.php` - Contact and free wall messages

### ✅ React Components
- **Header** - Navigation with authentication
- **Home** - Landing page with features and gallery
- **Menu** - Dynamic menu with categories and ordering
- **About** - About page
- **Contact** - Contact form
- **FreeWall** - Community messages
- **AuthModal** - Login/Register modal

### ✅ Authentication System
- User registration and login
- Session management
- Protected routes
- User-specific features

### ✅ Ordering System
- Browse menu by categories
- Add items to cart
- Quantity selection
- Order confirmation
- Order history

## Sample Data Included

The database includes sample data:
- 2 sample users (admin/demo with password: password123)
- 4 categories (Hot Drinks, Cold Drinks, Pastries, Snacks)
- 15+ menu items with images and descriptions
- Sample free wall messages
- Sample contact messages

## API Endpoints

### Authentication
- `POST /api/auth.php` with action=login/register/logout
- `GET /api/auth.php?action=check` - Check authentication status

### Menu
- `GET /api/menu.php?action=list` - Get all menu items
- `GET /api/menu.php?action=categories` - Get categories
- `GET /api/menu.php?action=item&id=X` - Get specific item

### Orders
- `POST /api/orders.php` with action=create - Create order
- `GET /api/orders.php?action=list` - Get user orders
- `GET /api/orders.php?action=details&order_id=X` - Get order details

### Messages
- `POST /api/messages.php` with action=contact - Send contact message
- `POST /api/messages.php` with action=freewall - Post free wall message
- `GET /api/messages.php?action=freewall` - Get free wall messages

## File Structure

```
coffee/
├── api/                    # PHP API endpoints
│   ├── config.php         # Database configuration
│   ├── auth.php          # Authentication API
│   ├── menu.php          # Menu API
│   ├── orders.php        # Orders API
│   └── messages.php      # Messages API
├── src/                   # React components
│   ├── components/       # React components
│   ├── App.js           # Main app component
│   └── App.css          # Styles
├── database_structure.sql # Database setup
└── package.json         # Dependencies
```

## Troubleshooting

1. **Database Connection Issues**
   - Check XAMPP MySQL is running
   - Verify database credentials in `api/config.php`
   - Ensure database `eon_coffee_shop` exists

2. **API Not Working**
   - Check Apache is running in XAMPP
   - Verify file paths are correct
   - Check browser console for errors

3. **React App Issues**
   - Run `npm install` to install dependencies
   - Check if port 3000 is available
   - Clear browser cache if needed

## Default Login Credentials

- **Username:** admin
- **Password:** password123

- **Username:** demo  
- **Password:** password123
