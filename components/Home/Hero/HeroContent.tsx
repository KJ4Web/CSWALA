import React from 'react'

const HeroContent = () => {
  return (
    <div>
        {/* Title */}
        <h1  data-aos='fade-right' className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>Your Gateway <br /> to Tech Success.</h1>
        <h1 data-aos='fade-right' className='text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>- CSWALA, Together We Thrive.</h1>
        {/* Description */}
        <p data-aos='fade-left' data-aos-delay='150' className='text-sm md:text-base text-white text-opacity-60'>CSWALA offers expert-led web development courses online, empowering you to master <br /> in-demand skills and launch your tech career today.</p>
        {/* Buttons */}
        <div className='mt-7 flex items-center space-x-4'>
            <button data-aos='zoom-in' data-aos-delay='300' className='button__cls bg-green-700 hover:bg-green-900'>Get Started</button>
            <button data-aos='zoom-in' data-aos-delay='450' className='button__cls bg-yellow-600 hover:bg-yellow-800'>Learn More</button>
        </div>
        {/* Stats */}
        <div className='flex items-center flex-wrap space-x-16 mt-7'>
            <div data-aos='fade-up' data-aos-delay='600'>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>270+</p>
                <p className='w-[100px] h-[3px] bg-green-600 mt-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='750'>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>5750+</p>
                <p className='w-[100px] h-[3px] bg-blue-600 mt-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='900'>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>50+</p>
                <p className='w-[100px] h-[3px] bg-pink-600 mt-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent