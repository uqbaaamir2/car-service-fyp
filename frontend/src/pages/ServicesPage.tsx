export function ServicesPage() {
  const services = [
    {
      title: "Car Repair & Mechanic Service",
      icon: "🔧",
      description: "Complete repair services including engine diagnostics, transmission, suspension, braking systems, and general mechanical repairs.",
      features: ["Engine diagnostics", "Transmission repair", "Brake service", "Suspension work", "Belt replacement"],
    },
    {
      title: "Car Wash & Detailing",
      icon: "🚿",
      description: "Professional washing and detailing services to keep your car looking brand new.",
      features: ["Exterior wash", "Interior vacuum", "Wax coating", "Window cleaning", "Tire polishing"],
    },
    {
      title: "Oil Change & Fluid Service",
      icon: "🛢️",
      description: "Quick and professional oil changes with quality oil brands.",
      features: ["Engine oil change", "Oil filter replacement", "Coolant check", "Brake fluid check", "Power steering fluid"],
    },
    {
      title: "Engine Tuning",
      icon: "⚙️",
      description: "Advanced engine optimization for better performance and fuel efficiency.",
      features: ["Performance tuning", "Fuel efficiency optimization", "Emission testing", "Air filter replacement", "Spark plug service"],
    },
    {
      title: "Electrical Services",
      icon: "⚡",
      description: "Professional electrical system diagnostics and repair.",
      features: ["Battery service", "Alternator repair", "Starter replacement", "Wiring repair", "Lighting system"],
    },
    {
      title: "Vehicle Inspection",
      icon: "🔍",
      description: "Comprehensive vehicle inspection and diagnostics.",
      features: ["Full diagnostics", "Safety check", "Maintenance report", "Pre-purchase inspection", "Problem identification"],
    },
  ];

  return (
    <div>
      <section className="page-section" style={{ backgroundColor: "var(--primary-color)", color: "white" }}>
        <div className="container">
          <h1 style={{ fontSize: "36px" }}>Our Services</h1>
          <p style={{ marginTop: "8px", opacity: 0.95 }}>Professional car care at your doorstep</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <div style={{ fontSize: "40px", marginBottom: "16px" }}>{service.icon}</div>
                  <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>{service.title}</h3>
                  <p style={{ color: "var(--text-light)", marginBottom: "16px", fontSize: "14px" }}>{service.description}</p>
                  <ul style={{ listStyle: "none", fontSize: "14px" }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--accent-color)" }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <div className="section-title">
            <div>
              <h2>Why Choose Us?</h2>
              <p>Quality service at your convenience</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            <div>
              <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>🎯 Convenience</h3>
              <p>No need to visit a workshop. We come to your home or office.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>👨‍🔧 Expert Technicians</h3>
              <p>Experienced and trained professionals with years of expertise.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>💰 Transparent Pricing</h3>
              <p>No hidden charges. Clear pricing before we start work.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>⏱️ Quick Service</h3>
              <p>Fast and efficient service without compromising quality.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>🛡️ Quality Guarantee</h3>
              <p>All work is guaranteed with follow-up support.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>📱 Easy Booking</h3>
              <p>Simple online booking process in just a few clicks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
