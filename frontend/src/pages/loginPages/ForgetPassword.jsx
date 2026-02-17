import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogIn } from "lucide-react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    try {
        const response = await axios.post(`${baseUrl}${apiVersion}/user/passwordRestOTP`, { email });
        setTimeout(() => {
            setIsLoading(false);
            navigate('/verify-code', {
                state: {email}
        });
        }, 1000);
        toast.success(response.data.message);
    }
    catch(error){
        setIsLoading(false);
        toast.error(error.response.data.message);
    }

 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">

        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Forget your password?
          </h2>
          <p className="text-gray-500 text-sm">
            Enter your email to recevie a verifiaction code.
          </p>
        </div><br/>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>


          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition disabled:opacity-60"
          >
            {isLoading ? "Code sending..." : "Send code"}
          </button>

          <div className="text-center">
            <Link
                to="/signin"
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-[#0d3778] transition-colors">

                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
            </Link>
            </div>

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
  )
}

export default ForgetPassword;