import React from 'react'

const FeaturedProjectView = () => {
  return (
    <div className='relative h-screen w-full px-10
        pt-25 lg:pt-25 md:pt-25 
        dark:bg-gray-800/30 bg-white'>
            <div>
                <p className='dark:text-white text-slate-900 text-5xl tracking-wide font-bold'>
                    Featured Projects
                </p>
            </div>
            <div>
                <p className='pt-4 lg:pt-8 md:pt-6
                    dark:text-slate-400 text-slate-500 
                    max-w-md md:max-w-md lg:max-w-md'>
                    Selected works that demonstrate technical depth and design precision.
                </p>
            </div>

    </div>
  )
}

export default FeaturedProjectView;