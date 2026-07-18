export function ContactUsPage() {
  return (
    <div>
      <section className="page-section" style={{ backgroundColor: "var(--primary-color)", color: "white" }}>
        <div className="container">
          <h1 style={{ fontSize: "36px" }}>Contact Us</h1>
          <p style={{ marginTop: "8px", opacity: 0.95 }}>Get in touch with us for any questions or support</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px", alignItems: "start", flexWrap: "wrap" }}>
            {/* Contact Section */}
            <div className="contact-section" style={{ flex: "1 1 45%", minWidth: "300px" }}>
              <h2 style={{ color: "var(--primary-color)", marginBottom: "24px" }}>Get In Touch</h2>
              
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ color: "var(--accent-color)", marginBottom: "8px" }}>📞 Phone</h3>
                <p>
                  <a href="tel:+923001234567" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                    +92 300 1234567
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ color: "var(--accent-color)", marginBottom: "8px" }}>📧 Email</h3>
                <p>
                  <a href="mailto:info@carservices.com" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                    info@carservices.com
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ color: "var(--accent-color)", marginBottom: "8px" }}>📍 Address</h3>
                <p>Lahore, Pakistan</p>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ color: "var(--accent-color)", marginBottom: "8px" }}>🕒 Service Hours</h3>
                <p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>Follow Us</h3>
                <div style={{ display: "flex", gap: "16px" }}>
                  <a href="#" style={{ fontSize: "24px" }}>
                    f
                  </a>
                  <a href="#" style={{ fontSize: "24px" }}>
                    𝕏
                  </a>
                  <a href="#" style={{ fontSize: "24px" }}>
                    📷
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card" style={{ marginTop: "30px" }}>
                <div className="card-header">Quick Message</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" placeholder="Message subject" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="location-section" style={{ flex: "1 1 45%", minWidth: "300px" }}>
              <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="card-header">📍 Our Location</div>
                <div className="card-body" style={{ padding: 0, flex: 1, display: "flex" }}>
                  <iframe
                    width="100%"
                    height="500"
                    style={{ borderRadius: "0 0 8px 8px", border: "none" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.6266321313726!2d74.34286!3d31.54728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903fb6effffff%3A0x6b9e0acae8947cbf!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Responsive CSS for Mobile */}
          <style>{`
            @media (max-width: 768px) {
              .contact-section,
              .location-section {
                flex: 1 1 100% !important;
                min-width: 100% !important;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
