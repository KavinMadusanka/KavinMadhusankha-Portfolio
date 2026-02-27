import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import { Database, Monitor, Server, Wrench } from 'lucide-react';
import { getTechSkills } from '../../service/ApiService';

const TechnicalSkillPage = () => {
    const [loading, setLoading] = useState(true);
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
    const databaseSkills = skills.filter(s => s.type === "Database");
    const toolSkills = skills.filter(s => s.type === "DevOps");

    // deside badge color based on skill level
    const getBadgeColor = (level) => {
        switch (level) {
            case "Expert":
            return "bg-emerald-600/20 text-emerald-400";
            case "Advanced":
            return "bg-blue-600/20 text-blue-400";
            case "Intermediate":
            return "bg-amber-600/20 text-amber-400";
            case "Beginner":
            return "bg-indigo-600/20 text-indigo-400";
            default:
            return "bg-slate-600/20 text-slate-400";
        }
    };

    // deside bar color based on skill level
    const getBarColor = (level) => {
        switch (level) {
            case "Expert":
            return "bg-emerald-600 text-emerald-400";
            case "Advanced":
            return "bg-blue-600 text-blue-400";
            case "Intermediate":
            return "bg-amber-600 text-amber-400";
            case "Beginner":
            return "bg-indigo-600 text-indigo-400";
            default:
            return "bg-slate-600 text-slate-400";
        }
    };
  return (
    <Layout>
    <div className='relative min-h-screen w-full md:px-10 px-3 pt-25 pb-10
        dark:bg-gray-800/30 bg-gray-100'>
        {/* Header */}
        <div className='flex text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide md:tracking-wider gap-2 justify-center'>
        <p className='dark:text-white text-slate-900 '>Technical Arsenal </p>
        </div>
        {/* Description */}
        <div className='justify-items-center text-center py-10'>
          <p className='dark:text-slate-400 text-slate-500
          max-w-md md:max-w-xl'>
            A comprehensive collection of my technical expertise and proficiency levels across the modern software development lifecycle.
          </p>
        </div>
        {/* Types */}
        <div className='hidden md:flex flex-row dark:text-slate-400 text-slate-500 gap-3 justify-center'>
            <p className='bg-white dark:bg-slate-800 px-4 py-1 rounded-2xl shadow-lg'>Frontend</p>
            <p className='bg-white dark:bg-slate-800 px-4 py-1 rounded-2xl shadow-lg'>Backend</p>
            <p className='bg-white dark:bg-slate-800 px-4 py-1 rounded-2xl shadow-lg'>Databases</p>
            <p className='bg-white dark:bg-slate-800 px-4 py-1 rounded-2xl shadow-lg'>DevOps & Tools</p>
        </div>
        {/* Types mobile view */}
        <div className='md:hidden flex flex-row dark:text-slate-400 text-slate-500 gap-3 justify-center'>
            <p className='bg-white dark:bg-slate-800 px-6 py-2 rounded-2xl shadow-lg'>
                <Monitor className="w-5 h-5 text-blue-500" />
            </p>
            <p className='bg-white dark:bg-slate-800 px-6 py-2 rounded-2xl shadow-lg'>
                <Server className="w-5 h-5 text-blue-500" />
            </p>
            <p className='bg-white dark:bg-slate-800 px-6 py-2 rounded-2xl shadow-lg'>
                <Database className="w-5 h-5 text-blue-500" />
            </p>
            <p className='bg-white dark:bg-slate-800 px-6 py-2 rounded-2xl shadow-lg'>
                <Wrench className="w-5 h-5 text-blue-500" />
            </p>
        </div>

        {/* Skill display part */}
        <div className='flex flex-row dark:text-slate-400 text-slate-500 pt-10'>
            <p className='bg-white dark:bg-slate-800 px-3 py-3 rounded-2xl shadow-lg'>
                <Monitor className="w-5 h-5 text-blue-500" />
            </p>
            <p className='text-slate-900 dark:text-white px-6 py-2 text-bold tracking-wide'>
                Frontend Development
            </p>
        </div>

        <div>
            {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading text-slate-900 dark:text-white text-center">Loading Skills...</h6>
                  </div>
                ) : (
                    <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6">
                        {frontendSkills.map((s) => (
                            <div
                            key={s._id}
                            className="relative p-6 rounded-2xl 
                                        dark:bg-slate-800 bg-white
                                        shadow-lg hover:shadow-xl transition"
                            >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                                
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl 
                                                ${getBadgeColor(s.skillLevel)} 
                                                flex items-center justify-center`}>
                                <img
                                    src={`/api/v1/..../-photo/${s._id}`}
                                    alt={s.name}
                                    className="w-6 h-6 object-contain"
                                />
                                </div>

                                {/* Skill Level Badge */}
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                hidden md:flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Skill Name */}
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                {s.name}
                            </h3>
                            <div className='flex justify-between items-start pt-3'>
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                md:hidden flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-6 h-2 bg-slate-700 rounded-full overflow-hidden
                                            hidden md:flex">
                                <div
                                className={`h-full rounded-full
                                ${getBarColor(s.skillLevel)}`}
                                style={{
                                    width:
                                    s.skillLevel === "Beginner"
                                        ? "40%"
                                        : s.skillLevel === "Intermediate"
                                        ? "60%"
                                        : s.skillLevel === "Advanced"
                                        ? "80%"
                                        : "95%",
                                }}
                                ></div>
                            </div>
                            </div>
                        ))}
                        </div>
                )}
        </div>

        {/* Backend display */}
        <div className='flex flex-row dark:text-slate-400 text-slate-500 pt-10'>
            <p className='bg-white dark:bg-slate-800 px-3 py-3 rounded-2xl shadow-lg'>
                <Server className="w-5 h-5 text-blue-500" />
            </p>
            <p className='text-slate-900 dark:text-white px-6 py-2 text-bold tracking-wide'>
                Backend Architectures
            </p>
        </div>
        <div>
            {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading text-slate-900 dark:text-white text-center">Loading Skills...</h6>
                  </div>
                ) : (
                    <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6">
                        {backendSkills.map((s) => (
                            <div
                            key={s._id}
                            className="relative p-6 rounded-2xl 
                                        dark:bg-slate-800 bg-white
                                        shadow-lg hover:shadow-xl transition"
                            >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                                
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl 
                                                ${getBadgeColor(s.skillLevel)} 
                                                flex items-center justify-center`}>
                                <img
                                    src={`/api/v1/..../-photo/${s._id}`}
                                    alt={s.name}
                                    className="w-6 h-6 object-contain"
                                />
                                </div>

                                {/* Skill Level Badge */}
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                hidden md:flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Skill Name */}
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                {s.name}
                            </h3>
                            <div className='flex justify-between items-start pt-3'>
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                md:hidden flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-6 h-2 bg-slate-700 rounded-full overflow-hidden
                                            hidden md:flex">
                                <div
                                className={`h-full rounded-full
                                ${getBarColor(s.skillLevel)}`}
                                style={{
                                    width:
                                    s.skillLevel === "Beginner"
                                        ? "40%"
                                        : s.skillLevel === "Intermediate"
                                        ? "60%"
                                        : s.skillLevel === "Advanced"
                                        ? "80%"
                                        : "95%",
                                }}
                                ></div>
                            </div>
                            </div>
                        ))}
                        </div>
                )}
        </div>

        {/* Database display */}
        <div className='flex flex-row dark:text-slate-400 text-slate-500 pt-10'>
            <p className='bg-white dark:bg-slate-800 px-3 py-3 rounded-2xl shadow-lg'>
                <Database className="w-5 h-5 text-blue-500" />
            </p>
            <p className='text-slate-900 dark:text-white px-6 py-2 text-bold tracking-wide'>
                Database Management
            </p>
        </div>
        <div>
            {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading text-slate-900 dark:text-white text-center">Loading Skills...</h6>
                  </div>
                ) : (
                    <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6">
                        {databaseSkills.map((s) => (
                            <div
                            key={s._id}
                            className="relative p-6 rounded-2xl 
                                        dark:bg-slate-800 bg-white
                                        shadow-lg hover:shadow-xl transition"
                            >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                                
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl 
                                                ${getBadgeColor(s.skillLevel)} 
                                                flex items-center justify-center`}>
                                <img
                                    src={`/api/v1/..../-photo/${s._id}`}
                                    alt={s.name}
                                    className="w-6 h-6 object-contain"
                                />
                                </div>

                                {/* Skill Level Badge */}
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                hidden md:flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Skill Name */}
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                {s.name}
                            </h3>
                            <div className='flex justify-between items-start pt-3'>
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                md:hidden flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-6 h-2 bg-slate-700 rounded-full overflow-hidden
                                            hidden md:flex">
                                <div
                                className={`h-full rounded-full
                                ${getBarColor(s.skillLevel)}`}
                                style={{
                                    width:
                                    s.skillLevel === "Beginner"
                                        ? "40%"
                                        : s.skillLevel === "Intermediate"
                                        ? "60%"
                                        : s.skillLevel === "Advanced"
                                        ? "80%"
                                        : "95%",
                                }}
                                ></div>
                            </div>
                            </div>
                        ))}
                        </div>
                )}
        </div>


        {/* Tools and DevOps display  */}
        <div className='flex flex-row dark:text-slate-400 text-slate-500 pt-10'>
            <p className='bg-white dark:bg-slate-800 px-3 py-3 rounded-2xl shadow-lg'>
                <Wrench className="w-5 h-5 text-blue-500" />
            </p>
            <p className='text-slate-900 dark:text-white px-6 py-2 text-bold tracking-wide'>
                DevOps & Tools
            </p>
        </div>
        <div>
            {loading?  (
                    <div className="pnf">
                    <h6 className="pnf-heading text-slate-900 dark:text-white text-center">Loading Skills...</h6>
                  </div>
                ) : (
                    <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6">
                        {toolSkills.map((s) => (
                            <div
                            key={s._id}
                            className="relative p-6 rounded-2xl 
                                        dark:bg-slate-800 bg-white
                                        shadow-lg hover:shadow-xl transition"
                            >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                                
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl 
                                                ${getBadgeColor(s.skillLevel)} 
                                                flex items-center justify-center`}>
                                <img
                                    src={`/api/v1/..../-photo/${s._id}`}
                                    alt={s.name}
                                    className="w-6 h-6 object-contain"
                                />
                                </div>

                                {/* Skill Level Badge */}
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                hidden md:flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Skill Name */}
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                {s.name}
                            </h3>
                            <div className='flex justify-between items-start pt-3'>
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full 
                                                md:hidden flex
                                                ${getBadgeColor(s.skillLevel)}`}
                                    >
                                    {s.skillLevel}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-6 h-2 bg-slate-700 rounded-full overflow-hidden
                                            hidden md:flex">
                                <div
                                className={`h-full rounded-full
                                ${getBarColor(s.skillLevel)}`}
                                style={{
                                    width:
                                    s.skillLevel === "Beginner"
                                        ? "40%"
                                        : s.skillLevel === "Intermediate"
                                        ? "60%"
                                        : s.skillLevel === "Advanced"
                                        ? "80%"
                                        : "95%",
                                }}
                                ></div>
                            </div>
                            </div>
                        ))}
                        </div>
                )}
        </div>


      </div>
    </Layout>
  )
}

export default TechnicalSkillPage