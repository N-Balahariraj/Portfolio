import React from 'react'
import ProjectCard from './ProjectCard'

export default function Project() {
    return (
        <div id="Projects" className='Article p-4'>
            <div className='w-[50%] h-[90%]'>
                <span className='text-4xl font-nunito font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>PROJECTS</span>
                <div className='mt-4 h-[100%] flex flex-wrap justify-between'>
                    <ProjectCard/>
                </div>
            </div>
            <div className='w-[50%]'>
                <img src={process.env.PUBLIC_URL + "Projects.png"} alt="" />
            </div>
        </div>
    )
}
