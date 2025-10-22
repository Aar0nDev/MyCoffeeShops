import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/menu');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h2>Brewing Happiness, One Cup at a Time</h2>
          <p>Welcome to EON Coffee Shop — where premium beans meet expert brewing in a cozy, inviting space.</p>
        </div>
      </div>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">Why Choose EON Coffee Shop?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-seedling fa-3x text-accent mb-3"></i>
            <h3>Freshly Roasted Beans</h3>
            <p>We source the best coffee beans and roast them to perfection for the ultimate flavor.</p>
          </div>
          <div className="feature">
            <i className="fas fa-user-tie fa-3x text-accent mb-3"></i>
            <h3>Expert Baristas</h3>
            <p>Our skilled baristas craft every cup with precision and passion.</p>
          </div>
          <div className="feature">
            <i className="fas fa-home fa-3x text-accent mb-3"></i>
            <h3>Cozy Ambience</h3>
            <p>Relax in our warm and welcoming space, perfect for any occasion.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <h2 className="section-title">Our Café in Pictures</h2>
        <div className="gallery">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Coffee Shop Interior"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{display: 'none'}} className="placeholder-image">
            <i className="fas fa-coffee fa-3x text-accent"></i>
            <p>Coffee Shop Interior</p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Coffee Cup"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{display: 'none'}} className="placeholder-image">
            <i className="fas fa-coffee fa-3x text-accent"></i>
            <p>Coffee Cup</p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Cafe Counter"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{display: 'none'}} className="placeholder-image">
            <i className="fas fa-coffee fa-3x text-accent"></i>
            <p>Cafe Counter</p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Cold Brew"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{display: 'none'}} className="placeholder-image">
            <i className="fas fa-coffee fa-3x text-accent"></i>
            <p>Cold Brew</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Visit Us Today</h2>
        <p>Experience the rich aroma and taste of EON Coffee Shop in person or order online for quick delivery.</p>
        <button className="btn" onClick={handleOrderNow}>Order Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EON Coffee Shop | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
