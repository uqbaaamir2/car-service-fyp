import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import carServiceImage from "../assets/car service.png";
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    </svg>
  );
}
function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function IconEngine() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13h2l1-2h4l1 2h2l2-3h4v6h-2l-1 2H9l-1-2H6l-2 3H2z" />
      <circle cx="8" cy="17" r="1.3" />
      <circle cx="16" cy="17" r="1.3" />
    </svg>
  );
}
function IconBattery() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="17" height="10" rx="1.5" />
      <path d="M22 10v4" />
      <path d="M7 7v10M12 7v10" />
    </svg>
  );
}
function IconTire() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  );
}
function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M8 11h8M8 15h5" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17.5" cy="8.5" r="2.3" />
      <path d="M16 14.2c2.9.5 5 2.7 5 5.8" />
    </svg>
  );
}
function IconDollar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M17 6.5c0-1.9-2.2-3-5-3s-5 1.2-5 3 2.2 2.6 5 3.1 5 1.4 5 3.2-2.2 3.2-5 3.2-5-1.1-5-3" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L3 17.2V21h3.8l6.3-6.3a4 4 0 0 0 4.6-5.4l-2.8 2.8-2.4-2.4z" />
    </svg>
  );
}
function IconMechanic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      <path d="M9 13l1.5 2L12 13" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function IconVan() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 16V8a1 1 0 0 1 1-1h9l5 5v4a1 1 0 0 1-1 1h-1" />
      <path d="M3 16h1" />
      <circle cx="7.5" cy="17" r="1.6" />
      <circle cx="16.5" cy="17" r="1.6" />
      <path d="M9 17h6" />
    </svg>
  );
}
function IconTow() {
  return (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 44h22V22h10l8 10h4V44h4" />
      <path d="M46 44h20l6-14h8l6 8" />
      <circle cx="16" cy="48" r="5" />
      <circle cx="60" cy="48" r="5" />
      <circle cx="86" cy="48" r="5" />
      <path d="M2 44h96" />
    </svg>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [carProblem, setCarProblem] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleBookNow(e: React.FormEvent) {
    e.preventDefault();
    navigate("/book", { state: { location, carProblem, date, time } });
  }

  return (
    <div>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">Professional Car Care</span>
            <h1 className="hero-title">
              Professional Car Repair at <span className="hero-title-highlight">Your Doorstep</span>
            </h1>
            <p className="hero-subtitle">
              Our expert mechanics come to your location and fix your car quickly, safely and affordably.
            </p>

            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary btn-lg">
                <span className="btn-icon"><IconMail /></span>
                Request Service
              </Link>
              <a href="tel:+923001234567" className="btn btn-outline btn-lg">
                <span className="btn-icon"><IconPhone /></span>
                Call Now
              </a>
            </div>

            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-badge-icon"><IconShield /></span>
                <span>Certified Mechanics</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge-icon"><IconClock /></span>
                <span>Fast Response</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge-icon"><IconShieldCheck /></span>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src={carServiceImage}
              alt="Mechanic repairing a car at the customer's doorstep with a service van in the background"
            />
            <span className="hero-image-badge">
              <IconVan />
              Door2Door Service Van
            </span>
          </div>
        </div>

        <div className="container">
          <form className="booking-form" onSubmit={handleBookNow}>
            <div className="booking-field">
              <label htmlFor="location" className="booking-label">Your Location</label>
              <div className="booking-input-wrap">
                <span className="booking-input-icon"><IconPin /></span>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="booking-input"
                />
              </div>
            </div>

            <div className="booking-field">
              <label htmlFor="carProblem" className="booking-label">Car Problem</label>
              <select
                id="carProblem"
                value={carProblem}
                onChange={(e) => setCarProblem(e.target.value)}
                className="booking-select"
              >
                <option value="">Select problem</option>
                <option value="engine">Engine Issue</option>
                <option value="battery">Battery Issue</option>
                <option value="tire">Flat Tire</option>
                <option value="inspection">General Inspection</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="booking-field">
              <label htmlFor="date" className="booking-label">Date</label>
              <div className="booking-input-wrap">
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="booking-input"
                />
                <span className="booking-input-icon"><IconCalendar /></span>
              </div>
            </div>

            <div className="booking-field">
              <label htmlFor="time" className="booking-label">Time</label>
              <div className="booking-input-wrap">
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="booking-input"
                />
                <span className="booking-input-icon"><IconClock /></span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary booking-submit">
              Book Now
              <span className="btn-icon"><IconArrowRight /></span>
            </button>
          </form>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-title section-title-center">
            <span className="eyebrow-label">Our Services</span>
            <h2>We Provide Expert Car Services</h2>
          </div>

          <div className="services-grid">
            <div className="card service-card">
              <div className="service-icon-circle"><IconEngine /></div>
              <h3>Engine Repair</h3>
              <p>Diagnose and repair engine issues at your location.</p>
              <Link to="/services" className="learn-more-link">
                Learn More <IconArrowRight />
              </Link>
            </div>
            <div className="card service-card">
              <div className="service-icon-circle"><IconBattery /></div>
              <h3>Battery Service</h3>
              <p>Battery jump start, replacement and full inspection.</p>
              <Link to="/services" className="learn-more-link">
                Learn More <IconArrowRight />
              </Link>
            </div>
            <div className="card service-card">
              <div className="service-icon-circle"><IconTire /></div>
              <h3>Tire Replacement</h3>
              <p>Flat tire repair or replacement at your doorstep.</p>
              <Link to="/services" className="learn-more-link">
                Learn More <IconArrowRight />
              </Link>
            </div>
            <div className="card service-card">
              <div className="service-icon-circle"><IconClipboard /></div>
              <h3>Full Inspection</h3>
              <p>Complete car checkup and maintenance service.</p>
              <Link to="/services" className="learn-more-link">
                Learn More <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt" id="about">
        <div className="container">
          <div className="section-title section-title-center">
            <span className="eyebrow-label">Why Choose Us</span>
            <h2>We're Committed to Your Safety</h2>
          </div>

          <div className="why-choose-box">
            <div className="why-list">
              <div className="why-list-item">
                <span className="why-list-icon"><IconShieldCheck /></span>
                <h4>Certified Mechanics</h4>
                <p>Trained &amp; experienced professionals.</p>
              </div>
              <div className="why-list-item">
                <span className="why-list-icon"><IconUsers /></span>
                <h4>Doorstep Service</h4>
                <p>We come to you, wherever you are.</p>
              </div>
              <div className="why-list-item">
                <span className="why-list-icon"><IconDollar /></span>
                <h4>Affordable Pricing</h4>
                <p>Transparent pricing, no hidden charges.</p>
              </div>
              <div className="why-list-item">
                <span className="why-list-icon"><IconClock /></span>
                <h4>Fast Response</h4>
                <p>Quick arrival and on-time service guarantee.</p>
              </div>
              <div className="why-list-item">
                <span className="why-list-icon"><IconHeadset /></span>
                <h4>24/7 Support</h4>
                <p>We are available round the clock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="how-it-works">
        <div className="container how-it-works-grid">
          <div className="how-it-works-col">
            <div className="section-title">
              <span className="eyebrow-label">How It Works</span>
              <h2>Simple Steps to Service Your Car</h2>
            </div>

            <div className="steps-row">
              <div className="step-item">
                <span className="step-number">1</span>
                <span className="step-icon"><IconCalendar /></span>
                <h4>Book Service</h4>
                <p>Choose your location, problem and time.</p>
              </div>
              <div className="step-connector" aria-hidden="true" />
              <div className="step-item">
                <span className="step-number">2</span>
                <span className="step-icon"><IconMechanic /></span>
                <h4>Mechanic Arrives</h4>
                <p>Our expert comes to your doorstep.</p>
              </div>
              <div className="step-connector" aria-hidden="true" />
              <div className="step-item">
                <span className="step-number">3</span>
                <span className="step-icon"><IconWrench /></span>
                <h4>Car Gets Fixed</h4>
                <p>We fix your car and you're good to go.</p>
              </div>
            </div>
          </div>

          <div className="emergency-banner">
            <span className="emergency-label">Emergency Help</span>
            <h3>Stuck on the road? We'll reach you fast!</h3>
            <a href="tel:+923001234567" className="btn btn-white">
              <span className="btn-icon"><IconPhone /></span>
              Call Emergency Mechanic
            </a>
            <div className="emergency-illustration">
              <IconTow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}