import { FormEvent, useEffect, useState } from "react";

import { apiRequest } from "../../api";
import { inventoryCategoryLabels } from "../../services";

type InventoryItem = {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  cost_per_unit: number;
  created_at: string;
};

export function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("oil");
  const [quantity, setQuantity] = useState("0");
  const [unit, setUnit] = useState("pcs");
  const [costPerUnit, setCostPerUnit] = useState("0");
  const [error, setError] = useState<string | null>(null);

  async function loadItems() {
    const data = await apiRequest<InventoryItem[]>("/api/admin/inventory");
    setItems(data);
  }

  useEffect(() => {
    let active = true;
    void loadItems().catch((loadError) => {
      if (active) {
        setError(loadError instanceof Error ? loadError.message : "Failed to load inventory");
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
      await apiRequest<InventoryItem>("/api/admin/inventory", {
        method: "POST",
        body: JSON.stringify({
          name,
          category,
          quantity: Number(quantity),
          unit,
          cost_per_unit: Number(costPerUnit),
        }),
      });
      setName("");
      setQuantity("0");
      setCostPerUnit("0");
      await loadItems();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to add inventory item");
    }
  }

  return (
    <section className="stack">
      <div className="panel">
        <div className="section-title">
          <h2 style={{ margin: 0 }}>Inventory</h2>
          <span className="badge">Oils, air filters, oil filters</span>
        </div>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div>
            <label className="label">Item Name</label>
            <input className="field" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>
          <div>
            <label className="label">Category</label>
            <select className="select" value={category} onChange={(event) => setCategory(event.target.value)}>
              {Object.entries(inventoryCategoryLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Quantity</label>
            <input className="field" type="number" step="0.1" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
          </div>
          <div>
            <label className="label">Unit</label>
            <input className="field" value={unit} onChange={(event) => setUnit(event.target.value)} />
          </div>
          <div>
            <label className="label">Cost / Unit</label>
            <input className="field" type="number" step="0.01" value={costPerUnit} onChange={(event) => setCostPerUnit(event.target.value)} />
          </div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <button className="button" type="submit">
              Save Item
            </button>
          </div>
        </form>
        {error ? <div className="badge danger" style={{ marginTop: 16 }}>{error}</div> : null}
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Cost / Unit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{inventoryCategoryLabels[item.category] ?? item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.cost_per_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
