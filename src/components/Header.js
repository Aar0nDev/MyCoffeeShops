import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth.php?action=check');
      const data = await response.json();
      
      if (data.authenticated) {
        setUser(data.user);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
    }
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleLogout = async () => {
    try {
      const formData = new FormData();
      formData.append('action', 'logout');
      
      await fetch('/api/auth.php', {
        method: 'POST',
        body: formData
      });
      
      setUser(null);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>EON Coffee Shop</h1>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={location.pathname === '/menu' ? 'active' : ''}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
          <Link 
            to="/free-wall" 
            className={location.pathname === '/free-wall' ? 'active' : ''}
          >
            Free Wall
          </Link>
          
          {user ? (
            <div className="user-section">
              <span className="welcome-text">
                Welcome, {user.username}
              </span>
              <button 
                className="btn logout-btn" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button 
                className="btn" 
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
              <button 
                className="btn" 
                onClick={() => setShowRegisterModal(true)}
              >
                Register
              </button>
            </div>
          )}
        </nav>
      </div>

      <AuthModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        mode="login"
        onAuthSuccess={handleAuthSuccess}
      />

      <AuthModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        mode="register"
        onAuthSuccess={handleAuthSuccess}
      />
    </header>
  );
};

export default Header;
