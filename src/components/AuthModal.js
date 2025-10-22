import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose, mode, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    full_name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('action', mode);
      
      if (mode === 'login') {
        formDataToSend.append('username', formData.username);
        formDataToSend.append('password', formData.password);
      } else {
        formDataToSend.append('username', formData.username);
        formDataToSend.append('password', formData.password);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('full_name', formData.full_name);
        formDataToSend.append('phone', formData.phone);
      }

      const response = await fetch('/api/auth.php', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        onAuthSuccess(data.user);
        onClose();
        setFormData({
          username: '',
          password: '',
          email: '',
          full_name: '',
          phone: ''
        });
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        
        <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
        
        {mode === 'register' && (
          <p className="register-description">
            Create your account and join the EON Coffee community!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {mode === 'register' && (
            <>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="full_name">Full Name:</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (Optional):</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Processing...' : (mode === 'login' ? 'Login' : 'Register')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
