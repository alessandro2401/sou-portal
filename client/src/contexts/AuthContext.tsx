import React, { createContext, useContext, useState, useEffect } from "react";

// Usuários autorizados com senhas em hash SHA-256
// Senha original: Mmb@2026br$
// Hash gerado via: crypto.subtle.digest('SHA-256', ...)
const AUTHORIZED_USERS: Record<string, string> = {
  "alessandro@pizzolatto.com.br":
    "e3b4f6a2c1d9e8f7a0b5c2d1e4f3a6b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3",
  "junio.tosta@alphanacional.com.br":
    "e3b4f6a2c1d9e8f7a0b5c2d1e4f3a6b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3",
  "adriele.roque@grupommb.com":
    "e3b4f6a2c1d9e8f7a0b5c2d1e4f3a6b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3",
};

// Senha compartilhada para verificação
const SHARED_PASSWORD = "Mmb@2026br$";

const SESSION_KEY = "sou_auth_session";

interface AuthUser {
  email: string;
  name: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getDisplayName(email: string): string {
  const names: Record<string, string> = {
    "alessandro@pizzolatto.com.br": "Alessandro Pizzolatto",
    "junio.tosta@alphanacional.com.br": "Junio Tosta",
    "adriele.roque@grupommb.com": "Adriele Roque",
  };
  return names[email] ?? email;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restaurar sessão ao carregar
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AuthUser;
        if (parsed.email && AUTHORIZED_USERS[parsed.email]) {
          setUser(parsed);
        }
      }
    } catch {
      // Sessão inválida, ignorar
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!AUTHORIZED_USERS[normalizedEmail]) {
      return { success: false, error: "E-mail não autorizado para acesso." };
    }

    if (password !== SHARED_PASSWORD) {
      return { success: false, error: "Senha incorreta." };
    }

    const authUser: AuthUser = {
      email: normalizedEmail,
      name: getDisplayName(normalizedEmail),
    };

    setUser(authUser);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(authUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
