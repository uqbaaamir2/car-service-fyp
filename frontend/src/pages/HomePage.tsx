export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero page-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <h1>Door-to-Door Car Service At Your Home</h1>
              <p style={{ marginTop: "16px", fontSize: "18px", opacity: 0.95 }}>
                Easy Booking • Trusted Technicians • Quality Service
              </p>
              <button className="btn btn-accent mt-40" style={{ fontSize: "16px", padding: "14px 32px" }}>
                📞 Book Now
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "100%",
                height: "300px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "100px"
              }}>
                🚗
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-section">
        <div className="container">
          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Easy Booking</h3>
              <p>Book in minutes through our simple online form</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚐</div>
              <h3>Doorstep Service</h3>
              <p>We come to you. No need to visit a workshop</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Affordable Rates</h3>
              <p>Competitive pricing with transparent costs</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h3>Quality Service</h3>
              <p>Experienced technicians with quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-section page-section-alt">
        <div className="container">
          <div className="section-title">
            <div>
              <h2>Our Services</h2>
              <p>Professional car care at your doorstep</p>
            </div>
          </div>
          <div className="grid">
            <div className="card service-card">
              <div style={{ fontSize: "60px", marginBottom: "16px" }}>🔧</div>
              <h3>Car Repair</h3>
              <p>Complete repair and maintenance services for all car models</p>
            </div>
            <div className="card service-card">
              <div style={{ fontSize: "60px", marginBottom: "16px" }}>🚿</div>
              <h3>Car Wash</h3>
              <p>Professional washing and detailing at your home</p>
            </div>
            <div className="card service-card">
              <div style={{ fontSize: "60px", marginBottom: "16px" }}>🛢️</div>
              <h3>Oil Change</h3>
              <p>Quick and professional oil change service</p>
            </div>
            <div className="card service-card">
              <div style={{ fontSize: "60px", marginBottom: "16px" }}>🔍</div>
              <h3>Inspection</h3>
              <p>Complete vehicle inspection and diagnostics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section" style={{ backgroundColor: "var(--primary-color)", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Ready to Book a Service?</h2>
          <p style={{ fontSize: "18px", marginBottom: "24px", opacity: 0.95 }}>Schedule your appointment today and we'll take care of your vehicle</p>
          <a href="/book" className="btn btn-accent">Book Service Now</a>
        </div>
      </section>
    </div>
  );
}
