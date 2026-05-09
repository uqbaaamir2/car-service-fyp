import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../../auth";

const navItems = [
  { to: "dashboard", label: "Dashboard" },
  { to: "customers", label: "Customers" },
  { to: "orders", label: "Orders" },
  { to: "team", label: "Team" },
  { to: "inventory", label: "Inventory" },
  { to: "pnl", label: "PNL" },
];

export function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div>
          <div className="sidebar-brand">Car Services Admin</div>
          <p className="muted" style={{ marginBottom: 0 }}>
            Protected portal for operations and finance.
          </p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "dashboard"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="button-secondary"
          type="button"
          style={{
            marginTop: "auto",
            background: "var(--accent-color)",
            border: "none",
            color: "#fff",
            padding: "0.75rem 1rem",
            borderRadius: "0.375rem",
            cursor: "pointer",
            fontWeight: 500,
            width: "100%",
          }}
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
        >
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar panel">
          <div>
            <h1 style={{ margin: 0 }}>Admin Portal</h1>
            <p className="muted" style={{ marginBottom: 0 }}>
              Manage customers, services, team, inventory, and PNL.
            </p>
          </div>
          <span className="badge">Cash-only workflow</span>
        </div>

        <Outlet />
      </main>
    </div>
  );
}
