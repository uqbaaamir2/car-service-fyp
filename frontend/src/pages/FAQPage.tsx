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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "40px" }}>
            <div>
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
            </div>

            <div>
              <div className="card">
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
          </div>
        </div>
      </section>
    </div>
  );
}
