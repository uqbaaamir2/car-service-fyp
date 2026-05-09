import { FormEvent, useEffect, useState } from "react";

import { apiRequest } from "../../api";

type PNL = {
  revenue: number;
  expenses: number;
  profit: number;
};

type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string | null;
  created_at: string;
};

export function PNLPage() {
  const [pnl, setPnl] = useState<PNL | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0");
  const [category, setCategory] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function loadData() {
    const [pnlData, expenseData] = await Promise.all([
      apiRequest<PNL>("/api/admin/pnl"),
      apiRequest<Expense[]>("/api/admin/expenses"),
    ]);
    setPnl(pnlData);
    setExpenses(expenseData);
  }

  useEffect(() => {
    let active = true;
    void loadData().catch((loadError) => {
      if (active) {
        setError(loadError instanceof Error ? loadError.message : "Failed to load PNL");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    try {
      await apiRequest<Expense>("/api/admin/expenses", {
        method: "POST",
        body: JSON.stringify({
          title,
          amount: Number(amount),
          category: category || null,
        }),
      });
      setTitle("");
      setAmount("0");
      setCategory("");
      await loadData();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to add expense");
    }
  }

  return (
    <section className="stack">
      <div className="cards-grid">
        <article className="stat-card">
          <div className="stat-label">Revenue</div>
          <div className="stat-value">{pnl?.revenue.toLocaleString() ?? "--"}</div>
        </article>
        <article className="stat-card">
          <div className="stat-label">Expenses</div>
          <div className="stat-value">{pnl?.expenses.toLocaleString() ?? "--"}</div>
        </article>
        <article className="stat-card">
          <div className="stat-label">Profit</div>
          <div className="stat-value">{pnl?.profit.toLocaleString() ?? "--"}</div>
        </article>
      </div>

      <div className="panel">
        <div className="section-title">
          <h2 style={{ margin: 0 }}>Add Expense</h2>
          <span className="badge">Fuel, supplies, repairs, and overhead</span>
        </div>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div>
            <label className="label">Title</label>
            <input className="field" value={title} onChange={(event) => setTitle(event.target.value)} required />
          </div>
          <div>
            <label className="label">Amount</label>
            <input className="field" type="number" step="0.01" value={amount} onChange={(event) => setAmount(event.target.value)} />
          </div>
          <div>
            <label className="label">Category</label>
            <input className="field" value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Fuel / staff / supplies" />
          </div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <button className="button" type="submit">
              Save Expense
            </button>
          </div>
        </form>
        {error ? <div className="badge danger" style={{ marginTop: 16 }}>{error}</div> : null}
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>{expense.category ?? "-"}</td>
                <td>{expense.amount}</td>
                <td>{new Date(expense.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
