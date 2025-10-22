import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h2>About EON Coffee Shop</h2>
          <p>Discover our story, our passion, and our commitment to exceptional coffee.</p>
        </div>
      </div>

      {/* About Content */}
      <section className="section">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title">Our Story</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
              EON Coffee Shop was born from a simple dream: to create a space where coffee lovers 
              could gather, relax, and enjoy the perfect cup of coffee. Founded in 2020, we have 
              been dedicated to sourcing the finest coffee beans from around the world and crafting 
              each cup with love and precision.
            </p>
            
            <h3 className="text-accent mb-3">Our Mission</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
              We believe that great coffee brings people together. Our mission is to provide 
              an exceptional coffee experience that creates lasting memories and builds community 
              connections. Every cup we serve is a testament to our commitment to quality, 
              sustainability, and customer satisfaction.
            </p>

            <h3 className="text-accent mb-3">Our Values</h3>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="feature">
                  <i className="fas fa-leaf fa-3x text-accent mb-3"></i>
                  <h4>Sustainability</h4>
                  <p>We source our beans from sustainable farms and use eco-friendly practices in our operations.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="feature">
                  <i className="fas fa-heart fa-3x text-accent mb-3"></i>
                  <h4>Community</h4>
                  <p>We're more than just a coffee shop - we're a gathering place for our local community.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="feature">
                  <i className="fas fa-star fa-3x text-accent mb-3"></i>
                  <h4>Quality</h4>
                  <p>Every cup is crafted with the highest standards and attention to detail.</p>
                </div>
              </div>
            </div>

            <h3 className="text-accent mb-3">Meet Our Team</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
              Our passionate team of baristas and coffee experts work tirelessly to ensure 
              every visit to EON Coffee Shop is memorable. From our head barista who has 
              perfected the art of latte art to our friendly staff who remember your 
              favorite order, we're here to make your coffee experience exceptional.
            </p>

            <div className="cta">
              <h3>Visit Us Today</h3>
              <p>Come experience the EON Coffee Shop difference. We're located in the heart of the city, 
                 ready to welcome you with open arms and a perfect cup of coffee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EON Coffee Shop | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default About;
