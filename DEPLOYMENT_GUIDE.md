# EON Coffee Shop - Final Deployment Guide

## 🚀 Complete Setup Instructions

### 1. Database Setup (XAMPP MySQL)

1. **Start XAMPP**
   - Open XAMPP Control Panel
   - Start Apache and MySQL services

2. **Create Database**
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Click "New" to create database
   - Database name: **`eon_coffee_shop`**
   - Click "Create"

3. **Import Database Structure**
   - Select the `eon_coffee_shop` database
   - Click "Import" tab
   - Choose file: `database_structure.sql`
   - Click "Go" to import

### 2. Project Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Access Application**
   - React App: http://localhost:3000
   - Database: http://localhost/phpmyadmin

### 3. Production Deployment

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy Files**
   - Upload the `build` folder contents to your web server
   - Upload the `api` folder to your web server
   - Ensure PHP is enabled on your server

3. **Database Configuration**
   - Update `api/config.php` with your production database credentials:
   ```php
   define('DB_HOST', 'your_host');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'eon_coffee_shop');
   ```

## 📁 Final File Structure

```
coffee/
├── api/                    # PHP API endpoints
│   ├── config.php         # Database configuration
│   ├── auth.php          # Authentication API
│   ├── menu.php          # Menu API
│   ├── orders.php        # Orders API
│   └── messages.php      # Messages API
├── src/                   # React source code
│   ├── components/       # React components
│   │   ├── Header.js     # Navigation with auth
│   │   ├── Home.js       # Landing page
│   │   ├── Menu.js       # Menu with ordering
│   │   ├── About.js      # About page
│   │   ├── Contact.js    # Contact form
│   │   ├── FreeWall.js   # Community messages
│   │   ├── AuthModal.js  # Login/Register modal
│   │   └── NotFound.js   # 404 page
│   ├── App.js           # Main app component
│   ├── App.css          # All styles
│   └── index.js         # React entry point
├── build/                # Production build (after npm run build)
├── database_structure.sql # Database setup
├── package.json         # Dependencies
└── README.md           # Documentation
```

## ✅ Features Implemented

### 🔐 Authentication System
- User registration and login
- Session management
- Protected routes
- Logout functionality

### 🍽️ Menu System
- Dynamic menu loading from database
- Category filtering
- Item ordering with quantity selection
- Order confirmation

### 📝 Community Features
- Free wall for community messages
- Contact form with email integration
- Message approval system

### 🎨 Modern UI/UX
- Responsive design for all devices
- Dark theme with coffee shop aesthetics
- Loading states and animations
- Error handling and user feedback

## 🗄️ Database Tables

- **users** - User accounts and authentication
- **categories** - Menu item categories
- **menu_items** - Coffee shop menu items
- **orders** - Customer orders
- **order_items** - Individual items in orders
- **free_wall_messages** - Community messages
- **contact_messages** - Contact form submissions

## 🔧 API Endpoints

### Authentication
- `POST /api/auth.php` - Login/Register/Logout
- `GET /api/auth.php?action=check` - Check auth status

### Menu
- `GET /api/menu.php?action=list` - Get menu items
- `GET /api/menu.php?action=categories` - Get categories
- `GET /api/menu.php?action=item&id=X` - Get specific item

### Orders
- `POST /api/orders.php` - Create order
- `GET /api/orders.php?action=list` - Get user orders
- `GET /api/orders.php?action=details&order_id=X` - Get order details

### Messages
- `POST /api/messages.php` - Send contact message
- `POST /api/messages.php` - Post free wall message
- `GET /api/messages.php?action=freewall` - Get free wall messages

## 🎯 Default Login Credentials

- **Username:** admin
- **Password:** password123

- **Username:** demo  
- **Password:** password123

## 🚀 Deployment Checklist

- [ ] XAMPP MySQL running
- [ ] Database `eon_coffee_shop` created
- [ ] Database structure imported
- [ ] React dependencies installed
- [ ] Development server running
- [ ] All API endpoints working
- [ ] Authentication system functional
- [ ] Menu system working
- [ ] Order system working
- [ ] Contact form working
- [ ] Free wall working

## 🐛 Troubleshooting

### Database Issues
- Check XAMPP MySQL is running
- Verify database exists and has data
- Check `api/config.php` credentials

### API Issues
- Check Apache is running
- Verify API files are accessible
- Check browser console for errors

### React Issues
- Run `npm install` to install dependencies
- Check if port 3000 is available
- Clear browser cache if needed

## 📞 Support

For any issues or questions:
- Check the browser console for errors
- Verify all API endpoints are working
- Ensure database connection is established
- Check file permissions on web server

---

**🎉 Your EON Coffee Shop is now ready for deployment!**
