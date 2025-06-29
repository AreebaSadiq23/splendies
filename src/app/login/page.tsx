"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/AppContext/provider";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Header from "../components/header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-onyx flex items-center justify-center p-6 mt-20">
        <div className="w-full max-w-md bg-charcoal rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-bordeaux font-libertinus">
            Welcome Back
          </h2>
          <p className="text-center text-pearl/70 text-sm">
            Sign in to your account to continue
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Mail
                  className="absolute top-3 left-3 text-bordeaux"
                  size={20}
                />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-bordeaux text-sm placeholder:text-pearl/60 bg-onyx text-pearl focus:ring-bordeaux focus:border-bordeaux pl-10"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Lock
                  className="absolute top-3 left-3 text-bordeaux"
                  size={20}
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 rounded-md border border-bordeaux text-sm placeholder:text-pearl/60 bg-onyx text-pearl focus:ring-bordeaux focus:border-bordeaux pl-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-bordeaux"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-center">
                <p className="text-bordeaux text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 text-sm font-medium text-pearl bg-bordeaux rounded-md hover:bg-bordeaux/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bordeaux ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-5 text-center">
            <Link
              href="/register"
              className="text-bordeaux hover:underline transition"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
