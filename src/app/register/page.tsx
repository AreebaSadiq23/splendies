"use client";
import Header from "../components/header";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/AppContext/provider";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const success = await register(name, email, password);
      if (success) {
        router.push("/");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Header/>
      <div className="min-h-screen mt-20 flex items-center justify-center bg-onyx py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-charcoal rounded-lg shadow-md p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-bordeaux font-libertinus">
              Create Your Account
            </h2>
            <p className="mt-2 text-sm text-pearl/70">
              Start your journey today!
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <User
                  className="absolute top-3 left-3 text-bordeaux"
                  size={20}
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-bordeaux px-4 py-2 pl-10 bg-onyx text-pearl focus:border-bordeaux focus:ring-bordeaux sm:text-sm placeholder:text-pearl/60"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <Mail
                  className="absolute top-3 left-3 text-bordeaux"
                  size={20}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-bordeaux px-4 py-2 pl-10 bg-onyx text-pearl focus:border-bordeaux focus:ring-bordeaux sm:text-sm placeholder:text-pearl/60"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
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
                  required
                  className="w-full rounded-md border border-bordeaux px-4 py-2 pl-10 bg-onyx text-pearl focus:border-bordeaux focus:ring-bordeaux sm:text-sm placeholder:text-pearl/60"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-bordeaux"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="relative">
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <Lock
                  className="absolute top-3 left-3 text-bordeaux"
                  size={20}
                />
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full rounded-md border border-bordeaux px-4 py-2 pl-10 bg-onyx text-pearl focus:border-bordeaux focus:ring-bordeaux sm:text-sm placeholder:text-pearl/60"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-bordeaux"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-center text-sm text-bordeaux">{error}</p>
            )}
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-bordeaux text-pearl font-semibold rounded-md hover:bg-bordeaux/80 focus:outline-none focus:ring-2 focus:ring-bordeaux focus:ring-offset-2 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
          <p className="text-center text-sm text-pearl/70">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-bordeaux hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
