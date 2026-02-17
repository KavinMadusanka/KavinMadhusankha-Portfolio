import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ArrowLeft, User } from 'lucide-react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

const VerifyCode = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const email = location.state?.email || 'your email';

    useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length < 6) {
      toast.error('Please enter a valid 6-digit code');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}${apiVersion}/user/verifyOTP`,
         { email, otp: code });
      if(response.status === 200){
        toast.success(response.data.message);
      }
      setTimeout(() => {
        setIsLoading(false);
        navigate('/reset-password', { state: { email } });
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const handleResend = async() => {
    if (countdown > 0) return;
    
    try{
      const response = await axios.post(`${baseUrl}${apiVersion}/user/passwordRestOTP`, { email });
      if(response.status === 200){
        toast.success(response.data.message);
        setCountdown(20);
      }
    }
    catch(error){
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
            Email verification code
          </h2>
          <p className="text-gray-500 text-sm">
            Enter the 6-digit verification code sent to your email.
          </p>
        </div><br/>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Code Input */}
          <div className="space-y-2">
            <label htmlFor="code" className="text-sm font-medium text-gray-900">
                Verification Code
            </label>
            <input
                id="code"
                type="text"
                placeholder="123456"
                maxLength={6}
                required
                className="w-full px-4 py-3 bg-[#F3F4F6] border-transparent focus:bg-white focus:border-[#0d3778] focus:ring-2 focus:ring-[#0d3778]/20 rounded-lg transition-all outline-none text-gray-900 placeholder-gray-500 tracking-widest text-lg"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} />

            </div>


          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition disabled:opacity-60"
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600">
                Didn't receive the code?{' '}
                <button
                type="button"
                onClick={handleResend}
                disabled={countdown > 0}
                className={`font-medium transition-colors ${
                    countdown > 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-[#0d3778] hover:text-red-800'
                }`}>

                {countdown > 0 ? `Resend in ${countdown}s` : 'Click to resend'}
                </button>
            </p>
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

export default VerifyCode;