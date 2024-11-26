import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        {/* Define Grid */}
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
            {/* First Footer Part */}
            <div>
            <h1 className='font-semibold text-3xl text-white'>CSWALA</h1>
            <p className='text-white text-opacity-50 text-sm mt-3'>Your Gateway to Tech Success.</p>
            {/* Social Links */}
            <div className='flex items-center space-x-4 mt-6'>
                <FaFacebookF className='w-6 h-6 text-blue-600'/>
                <FaGithub className='w-6 h-6 text-purple-600'/>
                <FaTwitter className='w-6 h-6 text-sky-500'/>
                <FaYoutube className='w-6 h-6 text-red-700'/>
            </div>
            </div>
            {/* Second Footer Part */}
            <div>
                <h1 className='footer__heading'>Popular</h1>
                <p className='footer__link'>Web Development</p>
                <p className='footer__link'>Hacking</p>
                <p className='footer__link'>UI/UX Design</p>
                <p className='footer__link'>App Development</p>
                <p className='footer__link'>DevOPS</p>
                <p className='footer__link'>Digital Marketing</p>
            </div>
        {/* Third Footer Part */}
        <div>
            <h1 className='footer__heading'>Quick Links</h1>
            <p className='footer__link'>Home</p>
            <p className='footer__link'>About</p>
            <p className='footer__link'>Courses</p>
            <p className='footer__link'>Instructor</p>
            <p className='footer__link'>Profile</p>
            <p className='footer__link'>Privacy Policy</p>
            </div>
            {/* Fourth Footer Part (Newsletter) */}
            <div>
                <h1 className='footer__heading'>Subscribe our Newsletter</h1>
                <input type="text" placeholder='Enter your email' className='px-6 py-2 rounded-lg bg-gray-700 w-full text-white outline-none' />
                <button className='px-6 py-2 mt-4 bg-rose-700 rounded-lg w-full text-white outline-none'>Subscribe</button>
            </div>
        </div>
        <p className='text-center mt-4 text-base text-white text-opacity-70'>&copy; 2024 CSWALA, All Rights Reserved</p>
    </div>
  )
}

export default Footer