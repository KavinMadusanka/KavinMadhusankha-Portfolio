// /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { profilePhoto } from '../service/ApiService';
import { FileArchive, User } from 'lucide-react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiVersion = import.meta.env.VITE_API_VERSION;

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const activeLink = location.pathname;
    const [auth, setAuth] = useAuth();
    const [photo, setPhoto] = useState([]);
    const [imgLoading, setImgLoading] = useState(true);

    const handleLogout = async () => {
        try {
            console.log('first')
            const res = await fetch(`${baseUrl}${apiVersion}/user/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
              });
              const data = await res.json();
            // console.log('herder');
            //   console.log(data);

            if (data.success) {

                toast.success(data.message);
                localStorage.removeItem('auth');
                Cookies.remove('access_token');
                setAuth({ user: null });
                navigate('/home');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Logout failed');
        }
    };

    const navLinks = [
        {href : "/home", lable: "Home"},
        {href : "/projects", lable: "Projects"},
        {href : "/skills", lable: "Skills"},
        {href : "/profile", lable: "Profile"}
    ]

    useEffect(() => {
        const fetchProfilePhoto = async() => {
            try {
                const res = await profilePhoto();
                console.log("response",res)
                setPhoto(res);
            } catch (error) {
                console.log(error)
            } finally{
                setImgLoading(false);
            }
        }
        fetchProfilePhoto();
    },[])

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-800/90 backdrop-teal-sm backdrop-blur-md z-50 border-b border-gray-50 dark:border-gray-900 shadow-sm'>
            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-2 md:h-20 h-20'>
                {/*logo*/}
                <div className='flex items-center gap-1 cursor-pointer '>
                    {/* bg-teal-600 rounded-lg px-6 py-1  */}
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                    {photo && !imgLoading ? (
                        <img
                        src={photo}
                        alt="Profile"
                        className="w-full h-full object-cover object-top scale-200"
                        onError={(e) => {
                            e.target.style.display = "none";
                        }}
                        />
                    ) : (
                        <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                    )}
                    </div>
                    <div className='ml-2 text-sm lg:text-xl font-medium text-slate-900 dark:text-white tracking-widest'>
                        Kavin Mdhusankha
                    </div>
                </div>
    
                {/* Mobile menu button */}
                    <button onClick={() => setMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                        {
                            isMenuOpen ? <HiX className='size-8 text-slate-500 dark:text-slate-400'/> : <HiMenu className='size-8 text-slate-500 dark:text-slate-400'/>
                        }
                    </button>
    
    
                {/*desktop nav*/}
                <div className='hidden md:flex items-center gap-10'>
                    {
                        navLinks.map((link, index) => (
                            <a key={index} href={link.href} 
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm lg:text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                                after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all 
                                ${ activeLink === link.href ? "text-blue-500 after:w-full": "text-slate-500 dark:text-slate-400 hover:text-blue-500" }`}>
                                {link.lable}
                            </a> 
                        ))
                    }
                </div>
    
                
                
    
                {/*get touch button*/}
                    <div className='hidden md:flex gap-3'>
                    {/* <button
                        onClick={() => handelThemeChange(theme === 'dark' ? 'light' : 'dark')}
                        className='p-2 transition-colors '
                            
                        >
                        {theme === 'dark' ? <Sun className="text-teal-600" /> : <Moon className="text-teal-600" />}
                    </button> */}
                    {auth.token ? (
                        <>
                            <button 
                            onClick={handleLogout}
                            className='hidden md:block bg-linear-to-r from-blue-600 to-blue-500 hover:bg-blue-700 text-white lg:text-xl px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-teal-100'>
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <button className='hidden md:block bg-linear-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 lg:text-xl px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-teal-100'>
                                <a href="/signin">Sign in</a>
                            </button>
                        </>
                    )}
                </div>
    
                {/*mobile menu */}
    
            </div>
    
            {/* mobile menu Items */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-white dark:bg-slate-900/90 border-t border-white dark:border-slate-900/90 py-4'>
                        <div className='container mx-auto px-4 space-y-4'>
                            {navLinks.map((link, index) => (
                                <a key={index}
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-500" : "text-slate-500 dark:text-slate-400 hover:text-blue-500"}`} href={link.href}>{link.lable}</a>
                            ))}
    
                            <div className='flex flex-col gap-1'>
                                {auth.token ? (
                                    <>
                                        <button 
                                        onClick={handleLogout}
                                        className='w-full bg-linear-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-teal-100'>
                                            Sign Out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className='w-full bg-linear-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 dark:text-teal-100 dark:bg-teal-800 dark:hover:bg-teal-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-teal-100'>
                                            <a href="/signin">Sign in</a>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
        </nav>
  )
}

export default Header