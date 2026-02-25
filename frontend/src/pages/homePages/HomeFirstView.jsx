import React from 'react'
import {ArrowLeft, ArrowRight, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle} from 'lucide-react';

const HomeFirstView = () => {
  return (
    <div className='relative min-h-screen h-screen w-full md:px-10 px-1
        dark:bg-gray-800/30 bg-gray-100
        flex flex-col justify-center'>
        <div>
            <p className='inline-flex items-center gap-3 bg-blue-500/10 text-blue-500 font-semibold text-sm md:text-xl px-4 py-2 rounded-full shadow-sm tracking-wide'>
                AVAILBLE FOR NEW OPPORTUNITIES
                </p>
        </div>
        <div className='pt-8 lg:pt-13 md:pt-10 
            lg:text-7xl md:text-6xl text-5xl wrap-break-word'>
            <p className='text-slate-900 dark:text-white font-bold tracking-normal md:tracking-wider '>
                <b>Kavin Madhusankha</b>
            </p>
            <p className='text-blue-500 font-bold tracking-wider'>
                <b>Nugaduwa Vithana</b>
                </p>
        </div>
        <div className='pt-8 lg:pt-13 md:pt-10
        dark:text-slate-400 text-slate-500 text-sm md:text-xl
        max-w-xs md:max-w-xs lg:max-w-xl'>
            Software Developer building scalable, high-performance web applications with 
            a strong focus on user experience, clean architecture, and modern technologies.
        </div>
        <div className="flex gap-4 pt-8 lg:pt-13 md:pt-10 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/KavinMadusanka" target="_blank" rel="noreferrer" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-slate-200 transition">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
            <a href="www.linkedin.com/in/kavinmadhusankha" target="_blank" rel="noreferrer" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-slate-200 transition">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
            <a href="https://www.facebook.com/casey.kavin/" target="_blank" rel="noreferrer" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-slate-200 transition">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
            <a href="https://www.instagram.com/kavin_madusanka" target="_blank" rel="noreferrer" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-slate-200 transition">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/94706846037" target="_blank" rel="noreferrer" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-gray-200 transition">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
            {/* <a href="https://wa.me/94706846037" target="_blank" rel="noreferrer" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-slate-200 transition">
              <PiWhatsappLogoThin size={22} />
            </a> */}

            {/* Email */}
            <a href="mailto:kavinmadusanka20011@email.com" target="_blank" className="p-2 dark:bg-gray-800 bg-white rounded-full dark:hover:bg-gray-700 hover:bg-slate-200 transition">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
        </div>
        <div className='pt-8 lg:pt-13 md:pt-10'>
            <button className='bg-linear-to-r from-blue-600 to-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md flex flex-row text-sm md:text-xl lg:text-1xl tracking-wide'>
                View Projects <ArrowRight className="w-6 lg:h-7 md:h-7 h-5 ml-4 mr-2" />
            </button>
        </div>
    </div>
  )
}

export default HomeFirstView;