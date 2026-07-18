import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./auth";
import { HomePage } from "./pages/HomePage";
import { BookServicePage } from "./pages/BookServicePage";
import { ServicesPage } from "./pages/ServicesPage";
import { FAQPage } from "./pages/ContactPage";
import { ContactUsPage } from "./pages/FAQPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { DashboardPage } from "./pages/admin/DashboardPage";
import { CustomersPage } from "./pages/admin/CustomersPage";
import { InventoryPage } from "./pages/admin/InventoryPage";
import { LoginPage } from "./pages/admin/LoginPage";
import { OrdersPage } from "./pages/admin/OrdersPage";
import { PNLPage } from "./pages/admin/PNLPage";
import { TeamPage } from "./pages/admin/TeamPage";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div style={{ textAlign: "center", paddingTop: "100px" }}>Checking access...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigation />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />
      <Route
        path="/book"
        element={
          <PublicLayout>
            <BookServicePage />
          </PublicLayout>
        }
      />
      <Route
        path="/services"
        element={
          <PublicLayout>
            <ServicesPage />
          </PublicLayout>
        }
      />
      <Route
        path="/faq"
        element={
          <PublicLayout>
            <FAQPage />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <ContactUsPage />
          </PublicLayout>
        }
      />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="pnl" element={<PNLPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}