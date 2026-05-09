import { FormEvent, useEffect, useState } from "react";

import { apiRequest } from "../../api";
import { orderStatusLabels, serviceLabels, serviceSubcategoryLabels } from "../../services";

type OrderCustomer = {
  id: number;
  name: string;
  phone_number: string;
  email: string | null;
  location: string | null;
  created_at: string;
};

type Order = {
  id: number;
  customer_id: number;
  service_type: string;
  service_subcategory: string;
  location: string;
  status: string;
  collected_amount: number;
  notes: string | null;
  assigned_team_member_id: number | null;
  created_at: string;
  updated_at: string;
  customer: OrderCustomer;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
};

export function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [statusDrafts, setStatusDrafts] = useState<Record<number, string>>({});
  const [amountDrafts, setAmountDrafts] = useState<Record<number, string>>({});

  async function loadData() {
    const [orderData, teamData] = await Promise.all([
      apiRequest<Order[]>("/api/admin/orders"),
      apiRequest<TeamMember[]>("/api/admin/team-members"),
    ]);
    setOrders(orderData);
    setTeamMembers(teamData);
  }

  useEffect(() => {
    let active = true;

    void loadData().catch((loadError) => {
      if (active) {
        setError(loadError instanceof Error ? loadError.message : "Failed to load orders");
      }
    });

    return () => {
      active = false;
    };
  }, []);

  async function updateOrder(orderId: number) {
    const payload = {
      status: statusDrafts[orderId],
      collected_amount: Number(amountDrafts[orderId]),
    };

    await apiRequest<Order>(`/api/admin/orders/${orderId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    await loadData();
  }

  return (
    <section className="table-card">
      <div className="section-title">
        <h2 style={{ margin: 0 }}>Orders and Services</h2>
        <span className="badge">Pending, in-progress, completed</span>
      </div>
      {error ? <div className="badge danger">{error}</div> : null}
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Status</th>
            <th>Cash Collected</th>
            <th>Team</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <strong>{order.customer.name}</strong>
                <div className="muted">{order.customer.phone_number}</div>
                <div className="muted">{order.location}</div>
              </td>
              <td>
                <div>{serviceLabels[order.service_type] ?? order.service_type}</div>
                <div className="muted">{serviceSubcategoryLabels[order.service_subcategory] ?? order.service_subcategory}</div>
              </td>
              <td>
                <select
                  className="select"
                  value={statusDrafts[order.id] ?? order.status}
                  onChange={(event) => setStatusDrafts((current) => ({ ...current, [order.id]: event.target.value }))}
                >
                  {Object.entries(orderStatusLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  className="field"
                  type="number"
                  min="0"
                  value={amountDrafts[order.id] ?? String(order.collected_amount)}
                  onChange={(event) => setAmountDrafts((current) => ({ ...current, [order.id]: event.target.value }))}
                />
              </td>
              <td>{order.assigned_team_member_id ?? "-"}</td>
              <td>
                <button className="button-secondary" type="button" onClick={() => void updateOrder(order.id)}>
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
