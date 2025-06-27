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

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userInfo = users[email];
    if (userInfo && userInfo.password === password) {
      const user: User = { id: Date.now(), name: userInfo.name, email: email };
      setUser(user);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  // Register function
  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (users[email]) {
      return false;
    }
    setUsers((prevUsers) => ({
      ...prevUsers,
      [email]: { name, password },
    }));
    const user: User = { id: Date.now(), name, email };
    setUser(user);
    setIsLoggedIn(true);
    return true;
  };

  // Logout function
  const logout = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
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