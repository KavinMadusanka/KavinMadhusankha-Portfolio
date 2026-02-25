import { useEffect, useState } from 'react'
import { getTechSkills } from './../../service/ApiService';
import { Code2, Server, Wrench, Monitor } from "lucide-react";

const SkillView = () => {
    const [loading, setLoading] = useState(true);
    // const [BLoading, setBLoading] = useState(true);
    // const [TLoading, setTLoading] = useState(true);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getTechs = async() => {
            try {
                const res = await getTechSkills();
                console.log(res);
                setSkills(res.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getTechs();
    },[])

    const frontendSkills = skills.filter(s => s.type === "Frontend");
    const backendSkills = skills.filter(s => s.type === "Backend");
    const toolSkills = skills.filter(s => s.type === "DevOps");  
  return (
    <div className='relative h-screen w-full md:px-10 px-1 pt-25
        dark:bg-gray-800/30 bg-gray-100
        flex flex-col justify-center'>
        <p className='text-center'>
            <span className='dark:text-white text-slate-900 
                text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide 
                relative inline-block pb-2
                after:block after:h-1 after:w-1/3 after:mx-auto after:bg-blue-500 after:mt-2 after:rounded-full'>
                Technical Expertise
            </span>
        </p>
        <section className='w-full gap-10 md:gap-35 px-1  sm:px-20 justify-items-center
            grid grid-cols-1 md:grid-cols-3
            pt-15 pb-25'>
            <div className='md:w-full w-full space-y-8 z-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-slate-800'>
                <p className='dark:text-white text-slate-900 justify-center flex flex-row gap-2'>
                    <Monitor className="w-5 h-5 text-blue-500" /> Frontend
                </p>
                {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading">Loading Skills...</h6>
                  </div>
                ) : (
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                    {frontendSkills.map((s) => (
                        <li
                        key={s._id}
                        className="text-slate-900 dark:text-slate-400 marker:text-blue-500 marker:text-xl"
                        >
                        {s.name}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            <div className='md:w-full w-full space-y-8 z-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-slate-800'>
                <p className='dark:text-white text-slate-900 justify-center flex flex-row gap-2'>
                    <Server className="w-5 h-5 text-blue-500" /> Backend
                </p>
                {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading">Loading Skills...</h6>
                  </div>
                ) : (
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                    {backendSkills.map((s) => (
                        <li
                        key={s._id}
                        className="text-slate-900 dark:text-slate-400 marker:text-blue-500"
                        >
                        {s.name}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            <div className='md:w-full w-full space-y-8 z-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-slate-800'>
                <p className='dark:text-white text-slate-900 justify-center flex flex-row gap-2'>
                    <Wrench className="w-5 h-5 text-blue-500" /> Tools
                </p>
                {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading">Loading Skills...</h6>
                  </div>
                ) : (
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                    {toolSkills.map((s) => (
                        <li
                        key={s._id}
                        className="text-slate-900 dark:text-slate-400 marker:text-blue-500"
                        >
                        {s.name}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </section>
    </div>
  )
}

export default SkillView;