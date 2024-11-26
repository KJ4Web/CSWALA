'use client'
import React from 'react'
import Tilt from 'react-parallax-tilt'

const HeroImage = () => {
  return (
    <Tilt>
        <div data-aos='fade-left' data-aos-delay='1050' className='hidden lg:block'>
        <img src="/images/hero.png" alt="Hero" />
        </div>
    </Tilt>
  )
}

export default HeroImage