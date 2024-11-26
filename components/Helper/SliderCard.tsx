import React from 'react'
import { FaStar } from 'react-icons/fa';

// Define the type
type Props={
    name: string;
    image: string;
    role: string;
}

const SliderCard = ({ image,name,role }:Props) => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap items-center space-x-10'>
    <div className='h-full w-full'>
        <img src={image} alt="image" width={350} height={350} className='w-full h-full'/>
    </div>
    <div className='mt-6 mb-7'>
        <div className='flex items-center'>
            <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
            <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
            <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
            <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
            <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
        </div>
        <p className='mt-6 text-gray-900 w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold text-opacity-80'>"CSWALA’s web development course transformed my skills with practical projects, expert guidance, and a supportive learning environment, boosting my confidence and career opportunities."</p>
        <div className='mt-7'>
            <h1 className='text-xl text-black font-semibold'>{name}</h1>
            <p className='text-lg text-black text-opacity-65'>{role}</p>
        </div>
    </div>
    </div>
  )
}

export default SliderCard