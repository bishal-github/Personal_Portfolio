import React from 'react'
import MyImg from '../assets/bishal_shrees.png'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='w-full h-full flex justify-center'>
            <div className='max-w-[1000px] flex flex-col w-full'>
                <div className='py-8 flex items:start sm:items-center justify-center mt-14'>
                    <p className='font-bold text-4xl border-b-4 border-pink-600'>About</p>
                </div>
                <div className='grid md:grid-cols-2 gap-8 px-4 py-6'>
                    <div className='flex justify-center items-center'>
                        <img src={MyImg} className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover rounded-full border-2 border-pink-600' alt="" />
                    </div>
                    <div className='w-full grid grid-rows-2'>
                        <p className='text-xl sm:text-2xl font-bold py:2 sm:py-4 mx-auto flex items-start md:items-end'>
                            Hi, I'm Bishal, nice to meet you. Please take a look around. 
                        </p>
                        <p2 className=' sm:text-xl flex items-start  sm:py-2 mt-[-15px] sm:mt-0 mx-auto'>
                            I'm passionate about building excellent website and web applications. Eager to learn modern programming languages, frontend and backend frameworks and technologies to be proficient software developer.
                        </p2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
