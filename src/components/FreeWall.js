import React, { useState, useEffect } from 'react';

const FreeWall = () => {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load messages from database on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages.php?action=freewall');
      const data = await response.json();
      
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (err) {
      console.error('Failed to fetch messages:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in both fields.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('action', 'freewall');
      formDataToSend.append('message', formData.message.trim());

      const response = await fetch('/api/messages.php', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: '', message: '' });
        setShowSuccess(true);
        fetchMessages(); // Refresh messages
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Failed to post message: ' + data.error);
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h2>Free Wall</h2>
          <p>Share your thoughts with the world! Leave a message and it will be displayed here.</p>
        </div>
      </div>

      {/* Post Message Form */}
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-dark-custom p-4 rounded mb-5" style={{ borderRadius: '12px' }}>
              <h3 className="text-accent mb-4">Post Your Message</h3>
              <p className="text-white-50 mb-4">
                Want to share your thoughts with the world? Leave a message and it will be displayed on our Free-wall!
              </p>

              {showSuccess && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle me-2"></i>
                  Message posted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control bg-dark border-secondary text-white"
                    required
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control bg-dark border-secondary text-white"
                    required
                    style={{ borderRadius: '6px' }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Posting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane me-2"></i>
                      Post Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Messages Display */}
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="text-accent text-center mb-4">All Messages</h3>
            
            {messages.length > 0 ? (
              <div className="row g-3">
                {messages.map((msg) => (
                  <div key={msg.id} className="col-12">
                    <div 
                      className="p-3 rounded text-white"
                      style={{ 
                        backgroundColor: '#ff8c00',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <strong className="text-white">{msg.username || msg.full_name || 'Anonymous'}</strong>
                        <small className="text-white-50" style={{ fontSize: '0.8rem' }}>
                          {formatDate(msg.created_at)}
                        </small>
                      </div>
                      <p className="mb-0 text-white" style={{ whiteSpace: 'pre-wrap' }}>
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <i className="fas fa-comments fa-3x text-accent mb-3"></i>
                <h4 className="text-accent">No messages posted yet</h4>
                <p className="text-white-50">Be the first to share your thoughts!</p>
              </div>
            )}
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

export default FreeWall;
