import React from 'react'
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

export default function Contact() {
    return (
        <div id="Contact" className='Article p-4'>
            <div className='w-[50%]'>
                <span className='text-4xl font-nunito font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>CONTACT</span>
                <div className='contactIco mt-10'>
                    <a href="tel:9865598737"><i><FaPhoneAlt /></i>9865598737</a>
                    <a href="mailto:balahariraj2@gmail.com"><i><IoMail /></i>balahariraj2@gmail.com</a>
                    <a href="https://www.instagram.com/_u/nbhr2589/" target="_blank">
                        <i><AiFillInstagram /></i>nbhr2589
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61554962687999" target="_blank">
                        <i><FaFacebook /></i>facebook
                    </a>
                </div>
            </div>
            <form className='w-[50%] flex flex-col items-center justify-around rounded-2xl bg-gradient-to-bl from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>
                <span>Wanna Know More?</span>
                <input type="text" placeholder='Name' className='w-[80%] h-[8%] rounded-md text-center'/>
                <input type="text" placeholder='Email' className='w-[80%] h-[8%] rounded-md text-center'/>
                <textarea name="" id="" cols="30" rows="10" className='w-[80%] rounded-md'></textarea>
                <button className='w-[80%] h-[8%] border-2 rounded-md flex justify-center items-center'>Send Message<IoSend className='mx-4'/></button>
            </form>
        </div>
    )
}
