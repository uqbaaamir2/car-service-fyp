import { FormEvent, useEffect, useState } from "react";

import { apiRequest } from "../../api";
import { teamRoleLabels } from "../../services";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  phone_number: string | null;
  is_active: boolean;
  created_at: string;
};

export function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("mechanic");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function loadMembers() {
    const data = await apiRequest<TeamMember[]>("/api/admin/team-members");
    setMembers(data);
  }

  useEffect(() => {
    let active = true;
    void loadMembers().catch((loadError) => {
      if (active) {
        setError(loadError instanceof Error ? loadError.message : "Failed to load team");
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
      await apiRequest<TeamMember>("/api/admin/team-members", {
        method: "POST",
        body: JSON.stringify({
          name,
          role,
          phone_number: phoneNumber || null,
          is_active: true,
        }),
      });
      setName("");
      setPhoneNumber("");
      await loadMembers();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to add team member");
    }
  }

  return (
    <section className="stack">
      <div className="panel">
        <div className="section-title">
          <h2 style={{ margin: 0 }}>Team Management</h2>
          <span className="badge">Mechanics, electricians, car wash staff</span>
        </div>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div>
            <label className="label">Name</label>
            <input className="field" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>
          <div>
            <label className="label">Role</label>
            <select className="select" value={role} onChange={(event) => setRole(event.target.value)}>
              {Object.entries(teamRoleLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Phone Number</label>
            <input className="field" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
          </div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <button className="button" type="submit">
              Add Member
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
              <th>Role</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{teamRoleLabels[member.role] ?? member.role}</td>
                <td>{member.phone_number ?? "-"}</td>
                <td>{member.is_active ? "Active" : "Inactive"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
