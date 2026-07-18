import { useState, ChangeEvent, FormEvent } from "react";
import { apiRequest } from "../api";

export function BookServicePage() {
  const [formData, setFormData] = useState({
    customer_name: "",
    phone_number: "",
    email: "",
    service_type: "home",
    service_subcategory: "oil-change",
    location: "",
    notes: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const serviceOptions: Record<string, string[]> = {
    home: ["oil-change", "engine-tuning", "electrician", "car-repair-mechanic-service", "car-wash"],
    mobile: ["car-repair-mechanic-service", "electrician"],
  };

  const subcategoryLabels: Record<string, string> = {
    "oil-change": "Oil Change",
    "engine-tuning": "Engine Tuning",
    electrician: "Electrician",
    "car-repair-mechanic-service": "Car Repair / Mechanic Service",
    "car-wash": "Car Wash",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "service_type") {
        updated.service_subcategory = serviceOptions[value][0];
      }
      return updated;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await apiRequest("/api/public/orders", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setSuccess(true);
      setFormData({
        customer_name: "",
        phone_number: "",
        email: "",
        service_type: "home",
        service_subcategory: "oil-change",
        location: "",
        notes: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to book service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="page-section" style={{ backgroundColor: "var(--primary-color)", color: "white" }}>
        <div className="container">
          <h1 style={{ fontSize: "36px" }}>Book a Service</h1>
          <p style={{ marginTop: "8px", opacity: 0.95 }}>Fill in the details below and we'll confirm your booking shortly</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: "600px" }}>
          {success && (
            <div className="card" style={{ backgroundColor: "#e8f5e9", borderLeft: "4px solid var(--success-color)", marginBottom: "20px", padding: "16px" }}>
              <h3 style={{ color: "var(--success-color)", marginBottom: "8px" }}>✓ Booking Confirmed!</h3>
              <p>Your service request has been received. Our team will contact you shortly to confirm.</p>
            </div>
          )}

          {error && (
            <div className="card" style={{ backgroundColor: "#ffebee", borderLeft: "4px solid var(--danger-color)", marginBottom: "20px", padding: "16px" }}>
              <h3 style={{ color: "var(--danger-color)", marginBottom: "8px" }}>⚠ Error</h3>
              <p>{error}</p>
            </div>
          )}

          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input id="name" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input id="phone" name="phone_number" type="tel" value={formData.phone_number} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label htmlFor="service">Service Type *</label>
                  <select name="service_type" value={formData.service_type} onChange={handleChange}>
                    <option value="home">Home Service</option>
                    <option value="mobile">Mobile Service</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subcategory">Sub Category *</label>
                  <select name="service_subcategory" value={formData.service_subcategory} onChange={handleChange}>
                    {serviceOptions[formData.service_type].map((opt) => (
                      <option key={opt} value={opt}>
                        {subcategoryLabels[opt]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Service Location *</label>
                <input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your address" required />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Additional Notes</label>
                <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange} placeholder="Any special requirements..."></textarea>
              </div>

              <div style={{ backgroundColor: "var(--bg-light)", padding: "16px", borderRadius: "4px", marginBottom: "20px" }}>
                <strong>Payment:</strong> Cash payment will be collected on-site by our technician
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "16px", padding: "14px" }} disabled={loading}>
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
