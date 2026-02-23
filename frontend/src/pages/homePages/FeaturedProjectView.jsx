import { ArrowRight } from 'lucide-react';
import React from 'react'

const FeaturedProjectView = () => {
  return (
    <div className='relative h-screen w-full md:px-10 px-3
        pt-25 lg:pt-25 md:pt-25 
        '>
        <section className='container mx-auto flex flex-row md:flex-row  bg-red-300'>

            {/* Left side view */}
            <div className='md:w-full w-2/3 space-y-8 z-10 bg-green-300'>
                <div>
                    <p className='dark:text-white text-slate-900 
                        text-3xl md:text-4xl lg-text-5xl font-bold tracking-wide'>
                        Featured Projects
                    </p>
                </div>
                <div>
                    <p className='dark:text-slate-400 text-slate-500
                        hidden md:flex
                        max-w-md md:max-w-md lg:max-w-md'>
                        Selected works that demonstrate technical depth and design precision.
                    </p>
                </div>
            </div>

            {/* Right side view */}
            <div className='md:w-full w-1/3  pl-0 md:pl-12 text-blue-500 pt-1 md:pt-3' >
                <p className='hidden md:flex flex-row justify-end'>
                    Explore all projects <ArrowRight className="w-6 lg:h-7 md:h-7 h-5 ml-4 mr-2" />
                </p>
                <p className='md:hidden flex justify-end'>
                    See All
                </p>
            </div>
        </section>
        <div className='mx-auto bg-amber-300'>
            Hi
        </div>
    </div>
  )
}

export default FeaturedProjectView;