import React from 'react'
import {ArrowLeft, ArrowRight} from 'lucide-react';

const HomeFirstView = () => {
  return (
    <div className='relative h-screen w-full px-10 
        flex flex-col justify-center'>
        <div>
            <p className='inline-flex items-center gap-3 bg-blue-500/10 text-blue-500 font-semibold text-sm md:text-xl px-4 py-2 rounded-full shadow-sm tracking-wide'>
                AVAILBLE FOR NEW OPPORTUNITIES
                </p>
        </div>
        <div className='pt-8 lg:pt-13 md:pt-10'>
            <p className='text-slate-900 dark:text-white lg:text-7xl md:text-6xl text-5xl font-bold tracking-wider'>
                <b>Kavin Madhusankha</b>
            </p>
            <p className='text-blue-500 lg:text-7xl md:text-6xl text-5xl font-bold tracking-wider'>
                <b>Nugaduwa Vithana</b>
                </p>
        </div>
        <div className='pt-8 lg:pt-13 md:pt-10
        text-slate-400 text-sm md:text-xl
        max-w-xs md:max-w-xs lg:max-w-xl'>
            Software Developer crafting high-performance web
            application with a focus on user experience and scalable
            architechture.
        </div>
        <div className='pt-8 lg:pt-13 md:pt-10'>
            <button className='bg-linear-to-r from-blue-600 to-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md flex flex-row text-sm md:text-xl lg:text-1xl tracking-wide'>
                View Projects <ArrowRight className="w-6 lg:h-7 md:h-7 h-5 ml-4 mr-2" />
            </button>
        </div>
    </div>
  )
}

export default HomeFirstView