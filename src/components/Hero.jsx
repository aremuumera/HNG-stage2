import React from 'react'
import heroImage from '../assets/hero2.png'

const Hero = ({heroCatalog, cat1, cat2}) => {
  return (
    <div className='bg-bg1'>
      <div className="mt-[20px] mb-[100px] bg-[rgb(237,237,239)] sm:h-[300px] h-[230px] flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between xl:pl-[150px] lg:pl-[80px] pl-[30px]">
        <div className="text-black pt-[40px] z-[1000]">
            <h1 className='font-bold md:text-[50px] sm:text-[20px] text-[18px]'>{heroCatalog}</h1>
            <p className='sm:text-[18px] text-[14px]'>{cat1}<span className="text-blue">{cat2}</span></p>
        </div>
        <div className="flex justify-center sm:ml-[50px]   overflow-x-hidden">
            <img src={heroImage} alt="Hero" className="sm:max-w-[550px] sm:h-[280px] max-w-[300px] sm:mr-[0px] -mr-[180px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero
