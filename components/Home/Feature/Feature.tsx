'use client'

import React from 'react'
import { FaAward, FaBriefcase } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'

const Feature = () => {
  return (
    <div className='p-16 pb-16'>
        <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto'>
            {/* Image */}
            <Tilt>
              <div data-aos='zoom-in' data-aos-anchor-placement='top-center'>
                <img src="/images/f.png" alt="Feature Image" width={1000} height={1000} />
                </div>  
            </Tilt>
            {/* Text Content */}
            <div data-aos='fade-left' data-aos-anchor-placement='top-center' data-aos-delay='150'>
            {/* Sub-Heading */}
            <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                <FaBriefcase className='h-6 w-6 text-white' />
            </div>
            <h1 className='text-xl text-black font-semibold'>Premium Learning Experience</h1>
        </div>
            {/* Main Heading */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Proving amazing online courses.</h1>
            <div className='mt-8 mb-6'>
                <h1 className='text-lg md:text-2xl text-black text-opacity-80 font-semibold'>Master the skills that matter to you</h1>
                <p className='text-sm md:text-base text-black text-opacity-80 mt-4'>
                CSWALA enables you to master essential skills through tailored courses, flexible learning options, and expert support, helping you succeed in your personal and professional journey.</p>
            </div>
            <div className='mt-8 mb-6'>
                <h1 className='text-lg md:text-2xl text-black text-opacity-80 font-semibold'>Increase your learning skills.</h1>
                <p className='text-sm md:text-base text-black text-opacity-80 mt-4'>
                CSWALA helps you increase your learning skills with engaging courses, personalized resources, and expert support, empowering you to grow, adapt, and excel in your goals.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Feature