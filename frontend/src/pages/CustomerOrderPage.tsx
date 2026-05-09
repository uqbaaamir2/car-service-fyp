import { FormEvent, useMemo, useState } from "react";

import { apiRequest } from "../api";
import { serviceLabels, serviceOptions, serviceSubcategoryLabels } from "../services";

const initialServiceType = "home";
const initialSubcategory = serviceOptions[initialServiceType][0];

export function CustomerOrderPage() {
  const [serviceType, setServiceType] = useState(initialServiceType);
  const [serviceSubcategory, setServiceSubcategory] = useState(initialSubcategory);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableSubcategories = useMemo(() => serviceOptions[serviceType], [serviceType]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const order = await apiRequest<{ id: number }>("/api/public/orders", {
        method: "POST",
        body: JSON.stringify({
          customer_name: customerName,
          phone_number: phoneNumber,
          email: email || null,
          service_type: serviceType,
          service_subcategory: serviceSubcategory,
          location,
          notes: notes || null,
        }),
      });

      setMessage(`Order #${order.id} placed. Cash payment will be collected on spot.`);
      setCustomerName("");
      setPhoneNumber("");
      setEmail("");
      setLocation("");
      setNotes("");
      setServiceType(initialServiceType);
      setServiceSubcategory(serviceOptions[initialServiceType][0]);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page-shell">
      <div className="page-frame hero-grid">
        <section className="hero-card">
          <span className="hero-badge">Door to Door Car Service</span>
          <h1 className="hero-title">Book home or mobile car service in one clean flow.</h1>
          <p className="hero-copy">
            Customers can place service requests for home visits and mobile visits. Our team collects cash only at the spot, then admin can track status, teams, inventory, and profit.
          </p>

          <div className="inline-grid" style={{ marginTop: 28 }}>
            <div className="info-card">
              <div className="stat-label">Home Service</div>
              <div className="stat-value">5</div>
              <div className="muted">Oil change, tuning, electrician, mechanic, wash</div>
            </div>
            <div className="info-card">
              <div className="stat-label">Mobile Service</div>
              <div className="stat-value">2</div>
              <div className="muted">Mechanic and electrician on the move</div>
            </div>
            <div className="info-card">
              <div className="stat-label">Payment</div>
              <div className="stat-value">Cash</div>
              <div className="muted">Collected by team member at spot</div>
            </div>
          </div>
        </section>

        <section className="form-card">
          <div className="section-title">
            <div>
              <h2 style={{ margin: 0 }}>Place Order</h2>
              <p className="muted" style={{ marginBottom: 0 }}>Fill the booking form and submit.</p>
            </div>
          </div>

          <form className="stack" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div>
                <label className="label" htmlFor="customer-name">Customer Name</label>
                <input id="customer-name" className="field" value={customerName} onChange={(event) => setCustomerName(event.target.value)} required />
              </div>
              <div>
                <label className="label" htmlFor="phone-number">Phone Number</label>
                <input id="phone-number" className="field" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label className="label" htmlFor="email">Email (Optional)</label>
                <input id="email" className="field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div>
                <label className="label" htmlFor="location">Customer Location</label>
                <input id="location" className="field" value={location} onChange={(event) => setLocation(event.target.value)} required />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label className="label" htmlFor="service-type">Service Type</label>
                <select
                  id="service-type"
                  className="select"
                  value={serviceType}
                  onChange={(event) => {
                    const nextType = event.target.value;
                    setServiceType(nextType);
                    setServiceSubcategory(serviceOptions[nextType][0]);
                  }}
                >
                  {Object.entries(serviceLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label" htmlFor="subcategory">Sub Category</label>
                <select id="subcategory" className="select" value={serviceSubcategory} onChange={(event) => setServiceSubcategory(event.target.value)}>
                  {availableSubcategories.map((value) => (
                    <option key={value} value={value}>
                      {serviceSubcategoryLabels[value]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="label" htmlFor="notes">Notes</label>
              <textarea id="notes" className="textarea" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Any special issue, timing preference, or vehicle note" />
            </div>

            <div className="panel" style={{ padding: 18 }}>
              <strong>Payment:</strong> Cash only. Team member will collect it at the spot.
            </div>

            {message ? <div className="badge success">{message}</div> : null}

            <button className="button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
