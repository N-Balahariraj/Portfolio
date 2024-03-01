import React from 'react'

export default function Home() {
    return (
        <div id="Home" className='Article'>
            <div className='w-[50%] flex flex-col items-center justify-center font-roboto'>
                <span className=' font-bold text-2xl text-left'>
                    Hi, there
                    <br />
                    Iam N.Balahariraj
                    <br />
                    <span className='text-4xl bg-clip-text text-transparent bg-gradient-to-l from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>
                        A FullStack Developer
                    </span>
                </span>
            </div>

            <div className='w-[50%] flex flex-col items-center justify-center rounded-full bg-gradient-to-l from-[#f85c81] via-[#9c75d0] to-[#6d82f9]'>
                <span className='w-[75%] h-[75%] rounded-full bg-white flex items-center justify-center'>
                    <img src={process.env.PUBLIC_URL + "my-photo.jpg"} alt="my-image" className='rounded-full h-[100%] w-[100%]' />
                </span>
            </div>
        </div>
    )
}

{/* <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Gradient Title</h1> */ }
