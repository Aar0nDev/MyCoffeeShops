# EON Coffee Shop - InfinityFree Deployment Guide

## 🚀 **Files to Upload to InfinityFree:**

### **Required Files:**
1. **`index.html`** - Main website file
2. **`style.css`** - All styling (copy from your existing style.css)
3. **`script.js`** - JavaScript functionality
4. **`api/` folder** - All PHP API files
5. **`database_structure.sql`** - Database setup

## 📁 **File Structure for InfinityFree:**
```
your-domain.infinityfreeapp.com/
├── index.html              # Main website
├── style.css               # All styles
├── script.js               # JavaScript
├── api/                    # PHP API folder
│   ├── config.php         # Database config
│   ├── auth.php           # Authentication
│   ├── menu.php           # Menu API
│   ├── orders.php         # Orders API
│   └── messages.php       # Messages API
└── database_structure.sql  # Database setup
```

## 🗄️ **Database Setup (InfinityFree MySQL):**

1. **Login to InfinityFree Control Panel**
2. **Go to MySQL Databases**
3. **Create Database:** `eon_coffee_shop`
4. **Import SQL:** Upload `database_structure.sql`
5. **Update Database Config** in `api/config.php`:
   ```php
   define('DB_HOST', 'sqlXXX.infinityfree.com');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'eon_coffee_shop');
   ```

## 🔧 **Steps to Deploy:**

### **Step 1: Upload Files**
1. **Zip all files** (index.html, style.css, script.js, api folder)
2. **Upload to InfinityFree** via File Manager
3. **Extract files** in the root directory

### **Step 2: Database Setup**
1. **Create MySQL database** in InfinityFree control panel
2. **Import `database_structure.sql`**
3. **Update `api/config.php`** with your database credentials

### **Step 3: Test**
1. **Visit your website** (your-domain.infinityfreeapp.com)
2. **Test all features:**
   - Navigation
   - Menu display
   - Login/Register
   - Ordering
   - Contact form
   - Free wall

## ✅ **What Works on InfinityFree:**
- ✅ **PHP API endpoints** (authentication, menu, orders, messages)
- ✅ **MySQL database** (user accounts, menu items, orders)
- ✅ **HTML/CSS/JavaScript** (static website)
- ✅ **File uploads** (images, documents)
- ✅ **Email functionality** (contact forms)

## ❌ **What Doesn't Work on InfinityFree:**
- ❌ **Node.js/React** (requires VPS)
- ❌ **npm commands** (requires Node.js)
- ❌ **Build processes** (requires Node.js)

## 🎯 **Key Differences from React Version:**

### **Navigation:**
- **Single HTML file** with sections
- **JavaScript navigation** instead of React Router
- **No page reloads** (SPA-like experience)

### **State Management:**
- **Global JavaScript variables** instead of React state
- **Local storage** for persistence
- **Manual DOM updates**

### **API Calls:**
- **Same PHP endpoints** as React version
- **Fetch API** for HTTP requests
- **FormData** for form submissions

## 🔧 **Troubleshooting:**

### **Database Connection Issues:**
- Check database credentials in `api/config.php`
- Verify database exists in InfinityFree
- Test database connection

### **API Not Working:**
- Check file permissions (755 for folders, 644 for files)
- Verify PHP is enabled
- Check error logs in InfinityFree control panel

### **Images Not Loading:**
- Use absolute URLs for external images
- Check image URLs are accessible
- Consider uploading images to InfinityFree

## 📞 **Support:**
- **InfinityFree Documentation:** https://infinityfree.net/support/
- **PHP Error Logs:** Check in InfinityFree control panel
- **Database Issues:** Contact InfinityFree support

## 🎉 **Final Result:**
Your coffee shop will be a fully functional website with:
- **User authentication**
- **Menu system with ordering**
- **Contact forms**
- **Community free wall**
- **Database integration**
- **Mobile-responsive design**

**All running on InfinityFree's free hosting!** 🚀
