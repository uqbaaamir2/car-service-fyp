import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { apiRequest, clearToken, getToken, setToken } from "./api";

type AuthContextValue = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setAuthToken] = useState<string | null>(getToken());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function verifyToken() {
      const storedToken = getToken();
      if (!storedToken) {
        if (active) {
          setIsLoading(false);
        }
        return;
      }

      try {
        await apiRequest<{ is_admin: boolean }>("/api/admin/auth/me");
        if (active) {
          setAuthToken(storedToken);
        }
      } catch {
        clearToken();
        if (active) {
          setAuthToken(null);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void verifyToken();

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      isLoading,
      login: async (username, password) => {
        const result = await apiRequest<{ access_token: string }>("/api/admin/auth/login", {
          method: "POST",
          body: JSON.stringify({ username, password }),
        });
        setToken(result.access_token);
        setAuthToken(result.access_token);
      },
      logout: () => {
        clearToken();
        setAuthToken(null);
      },
    }),
    [isLoading, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
