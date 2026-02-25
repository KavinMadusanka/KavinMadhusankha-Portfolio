import Layout from '../../layouts/Layout';

const ProjectListing = () => {
  return (
    <Layout>
      <div className='relative h-screen w-full md:px-10 px-3 pt-25
        dark:bg-gray-800/30 bg-gray-100'>
        <div className='flex text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide md:tracking-wider gap-2 justify-center'>
        <p className='dark:text-white text-slate-900 '>My </p> <p className='text-blue-500'>Projects</p>
        </div>
        <div className='justify-items-center text-center py-10'>
          <p className='dark:text-slate-400 text-slate-500
          max-w-md md:max-w-lg'>
            A collection of my work ranging from scalable web applications to complex backend systems and intuitive UI/UX designs.
          </p>
        </div>
        
      </div>

    </Layout>
  )
}

export default ProjectListing