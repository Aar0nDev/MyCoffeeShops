-- EON Coffee Shop Database Structure
-- Run this SQL in your XAMPP MySQL phpMyAdmin

-- Create database
CREATE DATABASE IF NOT EXISTS eon_coffee_shop;
USE eon_coffee_shop;

-- Users table for authentication
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Categories table for menu items
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menu items table
CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    image_url VARCHAR(500),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled') DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Order items table (many-to-many relationship between orders and menu items)
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    menu_item_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
);

-- Free wall messages table
CREATE TABLE free_wall_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Contact messages table
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample categories
INSERT INTO categories (name, description, icon) VALUES
('Hot Drinks', 'Warm beverages perfect for any time', 'fas fa-mug-hot'),
('Cold Drinks', 'Refreshing cold beverages', 'fas fa-ice-cube'),
('Pastries', 'Fresh baked goods and desserts', 'fas fa-birthday-cake'),
('Snacks', 'Light bites and snacks', 'fas fa-cookie-bite');

-- Insert sample menu items
INSERT INTO menu_items (name, description, price, category_id, image_url) VALUES
-- Hot Drinks
('Espresso', 'Rich, full-bodied espresso with a perfect crema', 180.00, 1, 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?fm=jpg&q=60&w=3000'),
('Caramel Latte', 'Espresso with steamed milk and caramel syrup', 230.00, 1, 'https://img.freepik.com/free-photo/view-3d-coffee-cup_23-2151083700.jpg'),
('Matcha Latte', 'Traditional matcha with steamed milk', 240.00, 1, 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D'),
('Cappuccino', 'Espresso with steamed milk foam', 200.00, 1, 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?fm=jpg&q=60&w=3000'),
('Hot Chocolate', 'Rich and creamy hot chocolate', 190.00, 1, 'https://images.unsplash.com/photo-1517701604599-bb29b565090b?fm=jpg&q=60&w=3000'),

-- Cold Drinks
('Cold Brew', 'Smooth, refreshing cold brew coffee', 210.00, 2, 'https://media.istockphoto.com/id/1209718260/photo/cold-brew-coffee-with-milk-and-ice-cubes-in-glass.jpg?s=612x612&w=0&k=20&c=ZJRnsNhnEwHPvt6-EsU2dJmNhi2hmdFq-_w56YbR648='),
('Mocha Frappe', 'Blended coffee with chocolate and whipped cream', 250.00, 2, 'https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-sprinkles_140725-5973.jpg?semt=ais_hybrid&w=740&q=80'),
('Iced Americano', 'Espresso with cold water over ice', 190.00, 2, 'https://static.vecteezy.com/system/resources/previews/023/010/472/non_2x/the-glass-of-ice-americano-coffee-in-the-black-background-with-ai-generated-free-photo.jpg'),
('Iced Latte', 'Espresso with cold milk over ice', 220.00, 2, 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'),

-- Pastries
('Croissant', 'Buttery, flaky French croissant', 90.00, 3, 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?cs=srgb&dl=pexels-elkady-3892469.jpg&fm=jpg'),
('Blueberry Muffin', 'Fresh blueberry muffin with streusel topping', 120.00, 3, 'https://www.shutterstock.com/image-photo/blueberry-muffins-blueberries-on-top-600nw-2492319609.jpg'),
('Chocolate Cake', 'Rich chocolate cake with ganache frosting', 150.00, 3, 'https://static.vecteezy.com/system/resources/thumbnails/026/349/563/small/indulgent-chocolate-cake-slice-on-wooden-plate-generated-by-ai-free-photo.jpg'),
('Cinnamon Roll', 'Sweet cinnamon roll with cream cheese frosting', 110.00, 3, 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fm=jpg&q=60&w=3000'),

-- Snacks
('Sandwich', 'Fresh deli sandwich with your choice of filling', 180.00, 4, 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?fm=jpg&q=60&w=3000'),
('Salad Bowl', 'Fresh mixed greens with seasonal vegetables', 160.00, 4, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000'),
('Fruit Bowl', 'Fresh seasonal fruits', 120.00, 4, 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?fm=jpg&q=60&w=3000');

-- Insert sample user (password is 'password123' hashed)
INSERT INTO users (username, password, email, full_name, phone) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@eoncoffee.com', 'Administrator', '09123456789'),
('demo', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'demo@eoncoffee.com', 'Demo User', '09123456788');

-- Insert sample free wall messages
INSERT INTO free_wall_messages (user_id, message, is_approved) VALUES
(1, 'Love the new coffee blend! Keep up the great work! ☕', TRUE),
(2, 'The atmosphere here is perfect for studying. Thank you!', TRUE),
(1, 'Best latte in town! Will definitely come back.', TRUE),
(2, 'The baristas are so friendly and professional.', TRUE);

-- Insert sample contact messages
INSERT INTO contact_messages (name, email, subject, message) VALUES
('John Doe', 'john@example.com', 'Inquiry about catering', 'Hi, I would like to know if you offer catering services for office meetings.'),
('Jane Smith', 'jane@example.com', 'Compliment', 'Your coffee is amazing! The staff is very friendly too.'),
('Mike Johnson', 'mike@example.com', 'Feedback', 'Great place to work remotely. The WiFi is fast and the coffee keeps me going!');
