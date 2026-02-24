import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { getAllPinProjects } from './../../service/ApiService';
import { Card, List, Typography, Modal, Tag } from 'antd';

const FeaturedProjectView = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async() => {
            try {
                const res = getAllPinProjects();
                setProjects(res.projects)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getProjects();     
    }, []);

  return (
    <div className='relative h-screen w-full md:px-10 px-3
        pt-25 lg:pt-25 md:pt-25
        '>
        <section className='w-full flex flex-row md:flex-row'>

            {/* Left side view */}
            <div className='md:w-full w-2/3 space-y-8 z-10'>
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
        <div>
            <p className='dark:text-slate-400 text-slate-500
                md:hidden flex
                max-w-md md:max-w-md lg:max-w-md'>
                Selected works that demonstrate technical depth and design precision.
            </p>
        </div>
        <div>
            {loading? (
                  <div className="pnf">
                    <h6 className="pnf-heading">Loading Projects...</h6>
                  </div>
                ): (
                    <List 
                    grid={{ gutter: 1, column: 1 }} // Display 3 Items in one row
                        dataSource={projects}
                        // dataSource={allNotify}
                        renderItem={p => {
                            return (
                                <List.Item>
                                    <Card
                                        hoverable
                                        style={{
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            marginBottom: '30px',
                                            width: '80%',
                                            height: '400px' ,
                                            margin: '0 auto'
                                        }}
                                        // onClick={() => handleItemClick(p)} // Handle click
                                    >
                                      <div >
                                            <div className='OneItem'>
                                              <div className='Imagebox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                  <img
                                                    src={`/api/v1/LostAndFound/getLostItem-photo/${p._id}`}
                                                    // className="card-img-top"
                                                    alt={p.name}
                                                    style={{
                                                      width: 'auto',
                                                      height: '100%',
                                                      objectFit: 'cover',
                                                      borderRadius: '8px',
                                                  }}
                                                    />
                                              </div>
                                              
                                              <div className="card-body">
                                                <p className="card-title">{p.title}</p>
                                                <p className="card-title">{p.description}</p>
                                              </div>
                                            </div>
                                        </div>
                                      </Card>
                                    </List.Item>
                            )}}
                    />
                )}
        </div>
    </div>
  )
}

export default FeaturedProjectView;