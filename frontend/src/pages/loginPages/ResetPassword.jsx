import axios from 'axios';
import { Eye, EyeOff, User } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: '', 
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const email = location.state?.email 

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    setIsLoading(true);

    try{
      const response = await axios.patch(`${baseUrl}${apiVersion}/user/ResetPassword`,
        { email, password: formData.password });
      if(response.status === 200){
        toast.success('Password successfully reset!');
        setIsLoading(false);
        navigate('/signin', { state: { email } });
      }
    }
    catch(error){
      setIsLoading(false);
      toast.error(error.response.data.message);
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
            Create new password
          </h2>
          <p className="text-gray-500 text-sm">
            Your new password must be different from previous passwords.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900">


                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 bg-[#F3F4F6] border-transparent focus:bg-white focus:border-[#0d3778] focus:ring-2 focus:ring-[#0d3778]/20 rounded-lg transition-all outline-none text-gray-900 placeholder-gray-500 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value
                  })
                  } />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-900">

                Confirm Password
              </label>
                <input
                  id="confirmPassword"
                type="password"
                  placeholder="••••••••"
                  required
                className="w-full px-4 py-3 bg-[#F3F4F6] border-transparent focus:bg-white focus:border-[#0d3778] focus:ring-2 focus:ring-[#0d3778]/20 rounded-lg transition-all outline-none text-gray-900 placeholder-gray-500"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value
                  })
                  } />

            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-blue-600 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed">

            {isLoading ? 'Resetting Password...' : 'Reset Password'}
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
  )
}

export default ResetPassword