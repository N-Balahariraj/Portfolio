import React from 'react'

export default function About() {
    return (
        <div id="About" className='Article'>
            <div className='w-[50%]'>
                <img src={process.env.PUBLIC_URL + "About.png"} alt="loading..." />
            </div>
            <div className='w-[50%] p-5 font-roboto font-bold'>
                <span className='text-4xl font-nunito bg-clip-text text-transparent bg-gradient-to-r from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>ABOUT<br /></span>
                <div className='mt-10 w-[100%] text-justify'>
                    Hi, I’m N.Balahariraj, a fullstack developer and designer based in
                    Coimbatore. I have an year of experience in creating stunning
                    websites.I love combining my technical skills with my creative
                    flair to deliver solutions that are both functional and beautiful.
                    When I’m not coding or designing, I enjoy playing chess, reading
                    sci-fi novels, and learning new languages.Feel free to browse my
                    portfolio to see some of my work samples. If you like what you see,
                    don’t hesitate to contact me for your next project.
                </div>
            </div>
        </div>
    )
}
