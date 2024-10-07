import React from 'react'
import { PROJECTS } from '../constants'
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section className='pt-20' id='projects'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-8 text-center text-3xl lg:text-4xl'>Projects</motion.h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols3 lg:grid-cols-3'>
                {PROJECTS.map((project) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={project.id}
                        className='relative overflow-hidden rounded-3xl aspect-square'>
                        <motion.img
                            src={project.image}
                            alt={project.name}
                            className='h-full w-full object-cover' />
                        <motion.div
                            className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 md:opacity-0 md:hover:opacity-100 transition-opacity duration-500'>
                            <div className='overflow-y-auto max-h-full w-full flex flex-col items-center'>
                                <h3 className='mb-2 text-xl font-bold'>{project.name}</h3>
                                <p className='mb-4 text-center text-sm'>{project.description}</p>
                                <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'>
                                    <div className='flex items-center'>
                                        <span>View on Github</span>
                                        <MdArrowOutward className='ml-1'/>
                                    </div>
                                </a>
                            </div>

                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects