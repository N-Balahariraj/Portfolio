import React from 'react'
import { FaCss3, FaCode, FaReact, FaNodeJs, FaJava, FaFigma, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiDjango, SiFlask, SiCplusplus, SiC } from "react-icons/si";
import { BsTools, BsFiletypeXml } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";

export default function Skills() {
    return (
        <div id="Skills" className='Article p-4'>
            <div className='w-[50%]'>
                <img src={process.env.PUBLIC_URL + "Skills.png"} alt="" />
            </div>
            <div className='w-[50%]'>
                <span className='text-4xl font-nunito font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>SKILLS</span>
                <div className='flex justify-between w-[100%] h-[50%]'>
                    <div className='w-[49%] h-[90%] flex flex-col justify-between mt-4 border-2 rounded-md p-2'>
                        <span className=' font-roboto font'>FullStack WebDevelopment</span>
                        <span>FrontEnd</span>
                        <div className='codeIco flex'>
                            <i><FaCode /></i>
                            <i><FaCss3 /></i>
                            <i><IoLogoJavascript /></i>
                            <i><FaReact /></i>
                        </div>
                        <span>BackEnd</span>
                        <div className='codeIco flex'>
                            <i><FaNodeJs /></i>
                            <i><SiExpress /></i>
                            <i><SiMongodb /></i>
                        </div>
                    </div>
                    <div className='w-[49%] h-[90%] flex flex-col justify-between mt-4 border-2 rounded-md p-2'>
                        <span className=' font-roboto'>App Development</span>
                        <span>FrontEnd</span>
                        <div className='codeIco flex'>
                            <i><BsFiletypeXml /></i>
                            <i><BsTools /></i>
                            <i><FaJava /></i>
                        </div>
                        <span>BackEnd</span>
                        <div className='codeIco flex'>
                            <i><GrMysql /></i>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-[100%] h-[50%]'>
                    <div className='w-[49%] h-[85%] flex flex-col mt-4 border-2 rounded-md p-2'>
                        <span className=' font-roboto'>UI / UX Desigining</span>
                        <div className='codeIco flex mt-4'>
                            <i><FaFigma /></i>
                        </div>
                    </div>
                    <div className='w-[49%] h-[85%] flex flex-col justify-between mt-4 border-2 rounded-md p-2'>
                        <span className=' font-roboto'>Other Languages Frameworks</span>
                        <span>Python Programming</span>
                        <div className='codeIco flex'>
                            <i><FaPython /></i>
                            <i><SiDjango /></i>
                            <i><SiFlask /></i>
                        </div>
                        <span>C Programming</span>
                        <div className='codeIco flex'>
                            <i><SiC /></i>
                            <i><SiCplusplus /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
