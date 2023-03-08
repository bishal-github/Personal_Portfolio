import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bishal Shrees</h1>
        <h2 className='text-4xl sm:text-7xl text-[#8892b0]'>I'm a Frontend/React Developer.</h2>
        <p className='text-[#8892b0] max-w-[700px] py-4'>I'm fully focused on building and deploy responsive websites and web applications. Seeking an opportunity as a front-end developer at software companies.</p>
        <div>
          <button className='border-2 group text-white px-6 py-2 flex items-center my-2 hover:bg-pink-600 hover:border-pink-600'>View Works <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>
        </div>

      </div>
    </div>
  )
}

export default Hero
