import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await login(username, password);
      navigate("/admin/dashboard", { replace: true });
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="page-shell center-stage">
      <div className="form-card" style={{ width: "min(460px, 100%)" }}>
        <span className="hero-badge">Admin Access</span>
        <h1 style={{ marginBottom: 8 }}>Sign in</h1>
        <p className="muted">Use the protected admin credentials to enter the portal.</p>

        <form className="stack" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="username">Username</label>
            <input id="username" className="field" value={username} onChange={(event) => setUsername(event.target.value)} required />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input id="password" className="field" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>
          {error ? <div className="badge danger">{error}</div> : null}
          <button className="button" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Enter Admin Portal"}
          </button>
        </form>
      </div>
    </div>
  );
}
