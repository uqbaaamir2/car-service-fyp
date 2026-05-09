import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I book a service?",
      answer: "Simply visit our 'Book Service' page, fill in your details, select the service type and subcategory, and submit. Our team will contact you within 24 hours to confirm and schedule the appointment.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer car repair, car wash, oil change, engine tuning, electrical services, and vehicle inspection. Both home service and mobile service options are available.",
    },
    {
      question: "How much does each service cost?",
      answer: "Pricing varies based on the service type and your vehicle. We provide transparent quotes before starting work. Contact us for a specific quote.",
    },
    {
      question: "Do you provide mobile service?",
      answer: "Yes, we offer mobile services for mechanical repairs and electrical services. Just select 'Mobile Service' when booking.",
    },
    {
      question: "What is your payment method?",
      answer: "We accept cash payment only, which will be collected by our technician on-site after completing the service.",
    },
    {
      question: "How long does a typical service take?",
      answer: "Service duration depends on the type of work. An oil change takes about 30 minutes, while larger repairs may take 1-3 hours. We'll provide an estimate when confirming your booking.",
    },
    {
      question: "Do you provide warranty on your work?",
      answer: "Yes, all our services come with a quality guarantee. If you're not satisfied, we'll address the issue within 7 days of service.",
    },
    {
      question: "What areas do you service?",
      answer: "We currently service the Lahore area. Please provide your location when booking, and we'll confirm if we can service your area.",
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer: "Yes, you can reschedule or cancel your booking up to 24 hours before the scheduled time. Please contact us as soon as possible.",
    },
    {
      question: "Do I need to be present during the service?",
      answer: "Yes, we require an authorized person to be present during the service to ensure security and discuss any additional issues found.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="page-section" style={{ backgroundColor: "var(--primary-color)", color: "white" }}>
        <div className="container">
          <h1 style={{ fontSize: "36px" }}>Frequently Asked Questions</h1>
          <p style={{ marginTop: "8px", opacity: 0.95 }}>Find answers to common questions about our services</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: "16px" }}>
                <div
                  onClick={() => toggleFAQ(index)}
                  style={{
                    padding: "16px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: openIndex === index ? "var(--bg-light)" : "transparent",
                  }}
                >
                  <h3 style={{ color: "var(--primary-color)", fontSize: "16px", margin: 0 }}>{faq.question}</h3>
                  <span style={{ fontSize: "20px", color: "var(--accent-color)" }}>{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div style={{ padding: "16px", borderTop: "1px solid var(--border-color)" }}>
                    <p style={{ color: "var(--text-light)" }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", textAlign: "center", backgroundColor: "var(--bg-light)", padding: "30px", borderRadius: "8px" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "12px" }}>Didn't find your answer?</h3>
            <p style={{ marginBottom: "16px" }}>Contact us directly for any other questions or concerns</p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
