import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] =useState(false);

    const handleClick=()=>{
        setNav(!nav);
    }

  return (
    <div className='fixed w-full h-[80px] bg-[#0a192f] text-gray-300 px-4 flex items-center justify-between'>
        <div>
            <h1 className='font-bold text-3xl md:text-4xl text-pink-600'>Bishal.</h1>
        </div>

          <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer hover:text-pink-600'><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer hover:text-pink-600'><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className='px-4 cursor-pointer hover:text-pink-600'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='px-4 cursor-pointer hover:text-pink-600'><Link to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='px-4 cursor-pointer hover:text-pink-600'><Link className='hover:text-pink-600' to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

      <div className='md:hidden z-10' onClick={handleClick}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
            <li className='py-6 text-4xl cursor-pointer hover:text-pink-600'><Link onClick={handleClick} to="hero" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl cursor-pointer hover:text-pink-600'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl cursor-pointer hover:text-pink-600'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl cursor-pointer hover:text-pink-600'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl cursor-pointer hover:text-pink-600'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        <div className='fixed left-0 top-[35%] hidden lg:flex flex-col'>
            <ul>
                <li className='flex w-[150px] h-[60px] justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'><a className='flex w-full justify-between items-center text-gray-300' href="https://www.linkedin.com/in/bishal-shrees-466102234">LinkedIn<FaLinkedin size={30} /></a></li>
                <li className='flex w-[150px] h-[60px] justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'><a className='flex w-full justify-between items-center text-gray-300' href="https://github.com/bishal-github">Github<FaGithub size={30} /></a></li>
                <li className='flex w-[150px] h-[60px] justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[0px] duration-300 bg-green-600'><Link className='flex w-full justify-between items-center text-gray-300' to='contact'smooth={true} duration={500}>Email<HiOutlineMail size={30} /></Link></li>
                <li className='flex w-[150px] h-[60px] justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f88]'><a className='flex w-full justify-between items-center text-gray-300' href="">Resume<BsFillPersonLinesFill size={30} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
