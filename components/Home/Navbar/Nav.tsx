'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

// Define Props Types
type Props = {
    openNav: () => void
}

const Nav = ({openNav}:Props) => {
    const [navBg,setNavBg]=useState(false)

    useEffect(()=>{
      const handler =()=>{
        if(window.scrollY>90){
            setNavBg(true)
        }
        if(window.scrollY<90){
            setNavBg(false)
        }
      }
      
      window.addEventListener('scroll', handler)

      return ()=>  window.removeEventListener('scroll', handler)
    })
  return (
    <div className={`fixed ${navBg?'bg-indigo-800':'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <h1 className='font-semibold text-4xl text-white'>CSWALA</h1>
            {/* Navlinks */}
            <div className='hidden lg:flex items-center space-x-10'>
              {navLinks.map((link)=>{
                return (
                <Link key={link.id} href={link.url}>
                    <p className='nav_link'>{link.label}</p>
                </Link>
                )
              })}  
            </div>
            {/* Button */}
            <div className='flex items-center space-x-4'>
                <button className='md:px-10 md:py-2 px-8 py-5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg'>Signup Now</button>
                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
    </div>
    </div>
  )
}

export default Nav