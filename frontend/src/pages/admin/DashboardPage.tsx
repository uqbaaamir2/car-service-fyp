import { useEffect, useState } from "react";

import { apiRequest } from "../../api";

type DashboardSummary = {
  customers: number;
  orders: number;
  pending_orders: number;
  in_progress_orders: number;
  completed_orders: number;
  revenue: number;
  expenses: number;
  profit: number;
};

const statItems = [
  { key: "customers", label: "Customers" },
  { key: "orders", label: "Orders" },
  { key: "pending_orders", label: "Pending" },
  { key: "in_progress_orders", label: "In Progress" },
  { key: "completed_orders", label: "Completed" },
  { key: "revenue", label: "Revenue" },
  { key: "expenses", label: "Expenses" },
  { key: "profit", label: "Profit" },
] as const;

export function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadSummary() {
      try {
        const data = await apiRequest<DashboardSummary>("/api/admin/dashboard");
        if (active) {
          setSummary(data);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load dashboard");
        }
      }
    }

    void loadSummary();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="stack">
      {error ? <div className="badge danger">{error}</div> : null}
      <div className="cards-grid">
        {statItems.map((item) => (
          <article key={item.key} className="stat-card">
            <div className="stat-label">{item.label}</div>
            <div className="stat-value">
              {summary ? (summary[item.key] as number).toLocaleString() : "--"}
            </div>
          </article>
        ))}
      </div>
      <div className="panel">
        <h2 style={{ marginTop: 0 }}>Operations Snapshot</h2>
        <p className="muted" style={{ marginBottom: 0 }}>
          Use this portal to keep orders moving, assign team members, track stock, and reconcile cash-only revenue against expenses.
        </p>
      </div>
    </section>
  );
}
