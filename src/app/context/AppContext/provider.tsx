"use client";
import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AppContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const [users, setUsers] = useState<{
    [email: string]: { name: string; password: string };
  }>({
    "user@example.com": { name: "John Doe", password: "password" },
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    if (users[email] && users[email].password === password) {
      setUser({ id: 1, name: users[email].name, email });
      setIsLoggedIn(true);
      localStorage.setItem(
        "user",
        JSON.stringify({ id: 1, name: users[email].name, email })
      );
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    if (!users[email]) {
      setUsers((prev) => ({ ...prev, [email]: { name, password } }));
      setUser({ id: 1, name, email });
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify({ id: 1, name, email }));
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
