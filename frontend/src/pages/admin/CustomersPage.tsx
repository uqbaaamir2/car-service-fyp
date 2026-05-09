import { useEffect, useState } from "react";

import { apiRequest } from "../../api";

export type Customer = {
  id: number;
  name: string;
  phone_number: string;
  email: string | null;
  location: string | null;
  created_at: string;
};

export function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadCustomers() {
      try {
        const data = await apiRequest<Customer[]>("/api/admin/customers");
        if (active) {
          setCustomers(data);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load customers");
        }
      }
    }

    void loadCustomers();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="table-card">
      <div className="section-title">
        <h2 style={{ margin: 0 }}>Customer Management</h2>
        <span className="badge">Clients and orders view</span>
      </div>
      {error ? <div className="badge danger">{error}</div> : null}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phone_number}</td>
              <td>{customer.email ?? "-"}</td>
              <td>{customer.location ?? "-"}</td>
              <td>{new Date(customer.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
