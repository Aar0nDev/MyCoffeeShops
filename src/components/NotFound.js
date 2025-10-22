import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="text-center">
          <h1 className="display-1 text-accent mb-4">404</h1>
          <h2 className="mb-4">Oops! Page Not Found</h2>
          <p className="lead mb-5">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button className="btn btn-primary btn-lg" onClick={handleGoHome}>
              <i className="fas fa-home me-2"></i>
              Go Home
            </button>
            <button className="btn btn-outline-primary btn-lg" onClick={handleGoBack}>
              <i className="fas fa-arrow-left me-2"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3 className="text-accent mb-4">Need Help?</h3>
            <p className="mb-4">
              Here are some popular pages you might be looking for:
            </p>
            
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card bg-dark-custom border-0 h-100" style={{ borderRadius: '12px' }}>
                  <div className="card-body text-center">
                    <i className="fas fa-coffee fa-3x text-accent mb-3"></i>
                    <h5 className="card-title text-accent">Our Menu</h5>
                    <p className="card-text text-white-50">Browse our delicious coffee and pastries</p>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate('/menu')}
                    >
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card bg-dark-custom border-0 h-100" style={{ borderRadius: '12px' }}>
                  <div className="card-body text-center">
                    <i className="fas fa-info-circle fa-3x text-accent mb-3"></i>
                    <h5 className="card-title text-accent">About Us</h5>
                    <p className="card-text text-white-50">Learn more about EON Coffee Shop</p>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate('/about')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card bg-dark-custom border-0 h-100" style={{ borderRadius: '12px' }}>
                  <div className="card-body text-center">
                    <i className="fas fa-envelope fa-3x text-accent mb-3"></i>
                    <h5 className="card-title text-accent">Contact Us</h5>
                    <p className="card-text text-white-50">Get in touch with our team</p>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate('/contact')}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
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

export default NotFound;
