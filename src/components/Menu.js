import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      
      // Fetch categories
      const categoriesResponse = await fetch('/api/menu.php?action=categories');
      const categoriesData = await categoriesResponse.json();
      
      console.log('Categories response:', categoriesData);
      
      if (categoriesData.success) {
        setCategories([
          { id: 'all', name: 'All Items', icon: 'fas fa-coffee' },
          ...categoriesData.categories
        ]);
      } else {
        // Fallback categories if API fails
        setCategories([
          { id: 'all', name: 'All Items', icon: 'fas fa-coffee' },
          { id: 1, name: 'Hot Drinks', icon: 'fas fa-mug-hot' },
          { id: 2, name: 'Cold Drinks', icon: 'fas fa-ice-cube' },
          { id: 3, name: 'Pastries', icon: 'fas fa-birthday-cake' }
        ]);
      }
      
      // Fetch menu items
      const itemsResponse = await fetch('/api/menu.php?action=list');
      const itemsData = await itemsResponse.json();
      
      console.log('Menu items response:', itemsData);
      
      if (itemsData.success) {
        setMenuItems(itemsData.items);
      } else {
        // Fallback menu items if API fails
        setMenuItems([
          // Hot Drinks
    {
      id: 1,
      name: 'Espresso',
            description: 'Rich, full-bodied espresso with a perfect crema',
            price: 180.00,
            category_id: 1,
            image_url: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?fm=jpg&q=60&w=3000'
    },
    {
      id: 2,
            name: 'Caramel Latte',
            description: 'Espresso with steamed milk and caramel syrup',
            price: 230.00,
            category_id: 1,
            image_url: 'https://img.freepik.com/free-photo/view-3d-coffee-cup_23-2151083700.jpg'
    },
    {
      id: 3,
            name: 'Cappuccino',
            description: 'Espresso with steamed milk foam',
            price: 200.00,
            category_id: 1,
            image_url: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?fm=jpg&q=60&w=3000'
    },
    {
      id: 4,
            name: 'Matcha Latte',
            description: 'Traditional matcha with steamed milk',
            price: 240.00,
            category_id: 1,
            image_url: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 5,
            name: 'Hot Chocolate',
            description: 'Rich and creamy hot chocolate',
            price: 190.00,
            category_id: 1,
            image_url: 'https://bakerbynature.com/wp-content/uploads/2024/01/Hot-Chocolate-3.jpg'
    },
    {
      id: 6,
            name: 'Americano',
            description: 'Espresso with hot water',
            price: 170.00,
            category_id: 1,
            image_url: 'https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'
          },
          
          // Cold Drinks
    {
      id: 7,
            name: 'Cold Brew',
            description: 'Smooth, refreshing cold brew coffee',
            price: 210.00,
            category_id: 2,
            image_url: 'https://media.istockphoto.com/id/1209718260/photo/cold-brew-coffee-with-milk-and-ice-cubes-in-glass.jpg?s=612x612&w=0&k=20&c=ZJRnsNhnEwHPvt6-EsU2dJmNhi2hmdFq-_w56YbR648='
    },
    {
      id: 8,
            name: 'Mocha Frappe',
            description: 'Blended coffee with chocolate and whipped cream',
            price: 250.00,
            category_id: 2,
            image_url: 'https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-sprinkles_140725-5973.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: 9,
            name: 'Iced Americano',
            description: 'Espresso with cold water over ice',
            price: 190.00,
            category_id: 2,
            image_url: 'https://static.vecteezy.com/system/resources/previews/023/010/472/non_2x/the-glass-of-ice-americano-coffee-in-the-black-background-with-ai-generated-free-photo.jpg'
          },
          {
            id: 10,
            name: 'Iced Latte',
            description: 'Espresso with cold milk over ice',
            price: 220.00,
            category_id: 2,
            image_url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            id: 11,
            name: 'Iced Matcha',
            description: 'Refreshing iced matcha latte',
            price: 230.00,
            category_id: 2,
            image_url: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D'
          },
          {
            id: 12,
            name: 'Frappuccino',
            description: 'Blended coffee drink with ice',
            price: 260.00,
            category_id: 2,
            image_url: 'https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-sprinkles_140725-5973.jpg?semt=ais_hybrid&w=740&q=80'
          },
          
          // Pastries
          {
            id: 13,
            name: 'Croissant',
            description: 'Buttery, flaky French croissant',
            price: 90.00,
            category_id: 3,
            image_url: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?cs=srgb&dl=pexels-elkady-3892469.jpg&fm=jpg'
          },
          {
            id: 14,
            name: 'Blueberry Muffin',
            description: 'Fresh blueberry muffin with streusel topping',
            price: 120.00,
            category_id: 3,
            image_url: 'https://www.shutterstock.com/image-photo/blueberry-muffins-blueberries-on-top-600nw-2492319609.jpg'
          },
          {
            id: 15,
      name: 'Chocolate Cake',
            description: 'Rich chocolate cake with ganache frosting',
            price: 150.00,
            category_id: 3,
            image_url: 'https://static.vecteezy.com/system/resources/thumbnails/026/349/563/small/indulgent-chocolate-cake-slice-on-wooden-plate-generated-by-ai-free-photo.jpg'
          },
          {
            id: 16,
            name: 'Cinnamon Roll',
            description: 'Sweet cinnamon roll with cream cheese frosting',
            price: 110.00,
            category_id: 3,
            image_url: 'https://www.cookingclassy.com/wp-content/uploads/2020/09/mini-cinnamon-rolls-21.jpg'
          },
          {
            id: 17,
            name: 'Chocolate Chip Cookie',
            description: 'Fresh baked chocolate chip cookies',
            price: 80.00,
            category_id: 3,
            image_url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?fm=jpg&q=60&w=3000'
          },
          {
            id: 18,
            name: 'Banana Bread',
            description: 'Moist banana bread with walnuts',
            price: 100.00,
            category_id: 3,
            image_url: 'https://www.marthastewart.com/thmb/1dIq-Ds5zBaQ70zBzbVepDCUpuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-312772-the-best-banana-bread-horiz-0723-886961edbbbe4aa59a839b6a24dc1dbb.jpg'
          },
          
          // Snacks
          {
            id: 19,
            name: 'Grilled Cheese Sandwich',
            description: 'Classic grilled cheese with tomato soup',
            price: 180.00,
            category_id: 4,
            image_url: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?fm=jpg&q=60&w=3000'
          },
          {
            id: 20,
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with caesar dressing',
            price: 160.00,
            category_id: 4,
            image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000'
          },
          {
            id: 21,
            name: 'Fruit Bowl',
            description: 'Fresh seasonal fruits',
            price: 120.00,
            category_id: 4,
            image_url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?fm=jpg&q=60&w=3000'
          },
          {
            id: 22,
            name: 'Avocado Toast',
            description: 'Smashed avocado on sourdough bread',
            price: 140.00,
            category_id: 4,
            image_url: 'https://www.rootsandradishes.com/wp-content/uploads/2017/08/avocado-toast-with-everything-bagel-seasoning-feat.jpg'
          }
        ]);
      }
    } catch (err) {
      console.error('Failed to fetch menu data:', err);
      
      // Set fallback data on error
      setCategories([
    { id: 'all', name: 'All Items', icon: 'fas fa-coffee' },
        { id: 1, name: 'Hot Drinks', icon: 'fas fa-mug-hot' },
        { id: 2, name: 'Cold Drinks', icon: 'fas fa-ice-cube' },
        { id: 3, name: 'Pastries', icon: 'fas fa-birthday-cake' }
      ]);
      
      setMenuItems([
        // Hot Drinks
        {
          id: 1,
          name: 'Espresso',
          description: 'Rich, full-bodied espresso with a perfect crema',
          price: 180.00,
          category_id: 1,
          image_url: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?fm=jpg&q=60&w=3000'
        },
        {
          id: 2,
          name: 'Caramel Latte',
          description: 'Espresso with steamed milk and caramel syrup',
          price: 230.00,
          category_id: 1,
          image_url: 'https://img.freepik.com/free-photo/view-3d-coffee-cup_23-2151083700.jpg'
        },
        {
          id: 3,
          name: 'Cappuccino',
          description: 'Espresso with steamed milk foam',
          price: 200.00,
          category_id: 1,
          image_url: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?fm=jpg&q=60&w=3000'
        },
        {
          id: 4,
          name: 'Matcha Latte',
          description: 'Traditional matcha with steamed milk',
          price: 240.00,
          category_id: 1,
          image_url: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D'
        },
        {
          id: 5,
          name: 'Hot Chocolate',
          description: 'Rich and creamy hot chocolate',
          price: 190.00,
          category_id: 1,
          image_url: 'https://bakerbynature.com/wp-content/uploads/2024/01/Hot-Chocolate-3.jpg'
        },
        {
          id: 6,
          name: 'Americano',
          description: 'Espresso with hot water',
          price: 170.00,
          category_id: 1,
          image_url: 'https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'
        },
        
        // Cold Drinks
        {
          id: 7,
          name: 'Cold Brew',
          description: 'Smooth, refreshing cold brew coffee',
          price: 210.00,
          category_id: 2,
          image_url: 'https://media.istockphoto.com/id/1209718260/photo/cold-brew-coffee-with-milk-and-ice-cubes-in-glass.jpg?s=612x612&w=0&k=20&c=ZJRnsNhnEwHPvt6-EsU2dJmNhi2hmdFq-_w56YbR648='
        },
        {
          id: 8,
          name: 'Mocha Frappe',
          description: 'Blended coffee with chocolate and whipped cream',
          price: 250.00,
          category_id: 2,
          image_url: 'https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-sprinkles_140725-5973.jpg?semt=ais_hybrid&w=740&q=80'
        },
        {
          id: 9,
          name: 'Iced Americano',
          description: 'Espresso with cold water over ice',
          price: 190.00,
          category_id: 2,
          image_url: 'https://static.vecteezy.com/system/resources/previews/023/010/472/non_2x/the-glass-of-ice-americano-coffee-in-the-black-background-with-ai-generated-free-photo.jpg'
        },
        {
          id: 10,
          name: 'Iced Latte',
          description: 'Espresso with cold milk over ice',
          price: 220.00,
          category_id: 2,
          image_url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        },
        {
          id: 11,
          name: 'Iced Matcha',
          description: 'Refreshing iced matcha latte',
          price: 230.00,
          category_id: 2,
          image_url: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D'
        },
        {
          id: 12,
          name: 'Frappuccino',
          description: 'Blended coffee drink with ice',
          price: 260.00,
          category_id: 2,
          image_url: 'https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-sprinkles_140725-5973.jpg?semt=ais_hybrid&w=740&q=80'
        },
        
        // Pastries
        {
          id: 13,
          name: 'Croissant',
          description: 'Buttery, flaky French croissant',
          price: 90.00,
          category_id: 3,
          image_url: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?cs=srgb&dl=pexels-elkady-3892469.jpg&fm=jpg'
        },
        {
          id: 14,
          name: 'Blueberry Muffin',
          description: 'Fresh blueberry muffin with streusel topping',
          price: 120.00,
          category_id: 3,
          image_url: 'https://www.shutterstock.com/image-photo/blueberry-muffins-blueberries-on-top-600nw-2492319609.jpg'
        },
        {
          id: 15,
          name: 'Chocolate Cake',
          description: 'Rich chocolate cake with ganache frosting',
          price: 150.00,
          category_id: 3,
          image_url: 'https://static.vecteezy.com/system/resources/thumbnails/026/349/563/small/indulgent-chocolate-cake-slice-on-wooden-plate-generated-by-ai-free-photo.jpg'
        },
        {
          id: 16,
          name: 'Cinnamon Roll',
          description: 'Sweet cinnamon roll with cream cheese frosting',
          price: 110.00,
          category_id: 3,
          image_url: 'https://www.cookingclassy.com/wp-content/uploads/2020/09/mini-cinnamon-rolls-21.jpg'
        },
        {
          id: 17,
          name: 'Chocolate Chip Cookie',
          description: 'Fresh baked chocolate chip cookies',
          price: 80.00,
          category_id: 3,
          image_url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?fm=jpg&q=60&w=3000'
        },
        {
          id: 18,
          name: 'Banana Bread',
          description: 'Moist banana bread with walnuts',
          price: 100.00,
          category_id: 3,
          image_url: 'https://www.marthastewart.com/thmb/1dIq-Ds5zBaQ70zBzbVepDCUpuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-312772-the-best-banana-bread-horiz-0723-886961edbbbe4aa59a839b6a24dc1dbb.jpg'
        },
        
        // Snacks
        {
          id: 19,
          name: 'Grilled Cheese Sandwich',
          description: 'Classic grilled cheese with tomato soup',
          price: 180.00,
          category_id: 4,
          image_url: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?fm=jpg&q=60&w=3000'
        },
        {
          id: 20,
          name: 'Caesar Salad',
          description: 'Fresh romaine lettuce with caesar dressing',
          price: 160.00,
          category_id: 4,
          image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000'
        },
        {
          id: 21,
          name: 'Fruit Bowl',
          description: 'Fresh seasonal fruits',
          price: 120.00,
          category_id: 4,
          image_url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?fm=jpg&q=60&w=3000'
        },
        {
          id: 22,
          name: 'Avocado Toast',
          description: 'Smashed avocado on sourdough bread',
          price: 140.00,
          category_id: 4,
          image_url: 'https://www.rootsandradishes.com/wp-content/uploads/2017/08/avocado-toast-with-everything-bagel-seasoning-feat.jpg'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category_id == selectedCategory);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setShowModal(true);
  };

  const handleOrderConfirm = async () => {
    try {
      const formData = new FormData();
      formData.append('action', 'create');
      formData.append('items', JSON.stringify([{
        id: selectedItem.id,
        quantity: quantity
      }]));
      
      const response = await fetch('/api/orders.php', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
      setShowModal(false);
      setSelectedItem(null);
      alert('Order placed successfully!');
      } else {
        alert('Order failed: ' + data.error);
      }
    } catch (err) {
      alert('Order failed: Network error');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h2>Our Premium Menu</h2>
          <p>Discover our carefully crafted selection of coffee, beverages, and pastries.</p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="section">
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {categories.map(category => (
            <button
              key={category.id}
              className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(category.id)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '20px',
                padding: '10px 20px'
              }}
            >
              <i className={category.icon}></i>
              {category.name}
            </button>
          ))}
        </div>


        {/* Menu Grid */}
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading menu items...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-coffee fa-3x text-accent mb-3"></i>
            <h4 className="text-accent">No menu items found</h4>
            <p className="text-white-50">
              {menuItems.length === 0 
                ? 'Failed to load menu items. Please check your database connection.'
                : 'No items found in the selected category.'
              }
            </p>
            <button 
              className="btn btn-primary mt-3"
              onClick={fetchMenuData}
            >
              <i className="fas fa-refresh me-2"></i>
              Retry Loading Menu
            </button>
          </div>
        ) : (
          <div className="menu-grid">
          {filteredItems.map(item => (
              <div key={item.id} className="menu-item">
                <img 
                  src={item.image_url} 
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="menu-item-content">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                  <div className="menu-item-footer">
                    <p className="menu-item-price">₱{item.price}</p>
                    <button 
                      className="btn order-btn"
                      onClick={() => handleOrderClick(item)}
                    >
                      Order Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </section>

      {/* Order Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
            
            <h2>Confirm Your Order</h2>
            
            <div className="order-modal-content">
              <img 
                src={selectedItem?.image_url} 
                  alt={selectedItem?.name}
                className="order-item-image"
              />
              <h3>{selectedItem?.name}</h3>
              <p>{selectedItem?.description}</p>
              <p className="order-price">₱{selectedItem?.price}</p>
              
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <p className="total-price">
                Total: ₱{(selectedItem?.price * quantity).toFixed(2)}
              </p>
              </div>
            
            <div className="modal-actions">
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleOrderConfirm}
                >
                  Confirm Order
                </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EON Coffee Shop | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Menu;
