import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import Project from "../Common/Projects"

export default function ProjectCard() {

    return (<>
        {Project.map((P) => {
            return (
                <div className='w-[49%] h-[49%] flex flex-col justify-between border-2 p-1 rounded-md overflow-hidden'>
                    <img src={P.Image} alt="CineBites" className='rounded-md h-[60%]' />
                    <div className='projIco flex flex-col h-[40%] justify-around'>
                        <span className=' self-center font-ubuntu text-xl'>{P.Name}</span>
                        <a href={P.GitHub} target="_blank" className='flex items-center'><i><FaGithub /></i>Github</a>
                        <a href={P.WebSite} target="_blank" className='flex items-center'><i><BsGlobe2 /></i>WebSite</a>
                    </div>
                </div>
            )
        })}
    </>)
}
