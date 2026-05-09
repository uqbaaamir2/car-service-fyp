import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";

export function Navigation() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Link to="/" style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
          🚗 CarServices
        </Link>
        <div style={{ display: "flex", gap: "0" }}>
          <Link to="/" className={isActive("/") ? "active" : ""} style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/services" className={isActive("/services") ? "active" : ""} style={{ color: "white" }}>
            Services
          </Link>
          <Link to="/faq" className={isActive("/faq") ? "active" : ""} style={{ color: "white" }}>
            FAQ
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""} style={{ color: "white" }}>
            Contact
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Link to="/book" className="btn btn-accent" style={{ padding: "10px 16px", fontSize: "14px" }}>
          Book Now
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/admin" style={{ color: "white", padding: "12px 16px" }}>
              Admin
            </Link>
            <button
              className="btn btn-secondary"
              style={{ padding: "10px 16px", fontSize: "14px" }}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/admin/login" style={{ color: "white", padding: "12px 16px", fontWeight: "500" }}>
            Admin
          </Link>
        )}
      </div>
    </nav>
  );
}
