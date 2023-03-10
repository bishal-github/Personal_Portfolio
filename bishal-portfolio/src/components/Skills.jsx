import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Sass from '../assets/sass.jpg'
import Bootstrap from '../assets/bootstrap.png'
import Github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>//These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt="" />
                    <p>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="" />
                    <p>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={Sass} alt="" />
                    <p>Sass</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="" />
                    <p>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="" />
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
