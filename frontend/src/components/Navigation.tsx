import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";

export function Navigation() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
            </svg>
          </span>
          <span className="navbar-brand-text">
            Door2Door
            <span className="navbar-brand-sub">Car Service</span>
          </span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className={isActive("/") ? "navbar-link active" : "navbar-link"}>
            Home
          </Link>
          <Link to="/services" className={isActive("/services") ? "navbar-link active" : "navbar-link"}>
            Services
          </Link>
          <Link to="/#how-it-works" className="navbar-link">
            How It Works
          </Link>
          <Link to="/#about" className="navbar-link">
            About Us
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "navbar-link active" : "navbar-link"}>
            Contact
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/book" className="btn btn-primary btn-sm">
            Book Service
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/admin" className="navbar-admin-link">
                Admin
              </Link>
              <button className="btn btn-outline btn-sm" onClick={() => logout()}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/admin/login" className="navbar-admin-link">
              Admin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}