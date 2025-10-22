import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('action', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', 'Contact Form Submission');
      formDataToSend.append('message', formData.message);

      const response = await fetch('/api/messages.php', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (err) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero" style={{ 
        backgroundImage: `url('https://images.adsttc.com/media/images/632d/9d4a/422f/0701/6e1f/64ae/newsletter/paisagismo-em-cafeterias-10-projetos-que-integram-o-verde-a-arquitetura_2.jpg?1663933782')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken'
      }}>
        <div>
          <h2>Let's Brew Up a Conversation</h2>
          <p>We'd love to hear from you! Get in touch with us.</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="bg-dark-custom p-4 rounded" style={{ borderRadius: '12px' }}>
              <h3 className="text-accent mb-4">Get in Touch</h3>
              
              <div className="mb-3">
                <i className="fas fa-envelope text-accent me-3"></i>
                <span>Email: </span>
                <a href="mailto:aaronmalana88@gmail.com" className="text-accent">
                  aaronmalana88@gmail.com
                </a>
              </div>
              
              <div className="mb-3">
                <i className="fas fa-phone text-accent me-3"></i>
                <span>Phone: +63 912 345 6789</span>
              </div>
              
              <div className="mb-4">
                <i className="fas fa-map-marker-alt text-accent me-3"></i>
                <span>Location: Purok 3 Mamatid Cabuyao Laguna</span>
              </div>

              <div className="social-icons">
                <h5 className="text-accent mb-3">Follow Us</h5>
                <a href="#" className="text-white me-3" style={{ fontSize: '1.5rem' }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white me-3" style={{ fontSize: '1.5rem' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white me-3" style={{ fontSize: '1.5rem' }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-dark-custom p-4 rounded" style={{ borderRadius: '12px' }}>
              <h3 className="text-accent mb-4">Send Us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle me-2"></i>
                  Thank you for reaching out to us! We'll get back to you shortly.
                </div>
              )}
              
              
              {submitStatus === 'error' && (
                <div className="alert alert-danger">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control bg-dark border-secondary text-white"
                    required
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control bg-dark border-secondary text-white"
                    required
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="row">
          <div className="col-12">
            <h3 className="text-accent text-center mb-4">Find Us</h3>
            <div className="rounded overflow-hidden" style={{ boxShadow: '0 0 15px rgba(255, 184, 77, 0.2)' }}>
              <iframe
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.193805268935!2d120.98421961535478!3d14.599512980497826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9c7e1f32cdb%3A0x88f2a21d890d8a8c!2sManila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1691581592000!5m2!1sen!2sph"
                allowFullScreen
                title="EON Coffee Shop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EON Coffee Shop | Designed for coffee lovers & dreamers</p>
      </footer>
    </div>
  );
};

export default Contact;
