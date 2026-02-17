import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Eye, EyeOff, User, Lock, LogIn } from "lucide-react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

const SignIn = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = `${baseUrl}${apiVersion}/user/login`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.success) {
        const { token } = data;

        setAuth({
          ...auth,
          token,
        });

        toast.success("Login Successful");
        Cookies.set("access_token", token, { expires: 1 });
        localStorage.setItem("token", token);

        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "Server Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
            <User size={36} className="text-blue-600" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Admin Portal
          </h2>
          <p className="text-gray-500 text-sm">
            Welcome back. Please sign in to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div className="space-y-1 text-left">
            <label className="text-sm text-gray-600">
              Email or Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1 text-left">
            <label className="text-sm text-gray-600">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button type="button"
          className="text-sm font-medium text-[#0A2E5C] hover:text-blue-800"
          onClick={() => navigate('/forgot-password')}>
            Forgot password?
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition disabled:opacity-60"
          >
            {isLoading ? "Signing in..." : "Sign In"}
            <LogIn size={18} />
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 tracking-widest">
            SECURE ACCESS
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400">
          © 2024 Kavin Madhusankha Nugaduwa Vithana.<br/> 
          All rights reserved. Authorized access only.
        </div>

      </div>
    </div>
  );
};

export default SignIn;
