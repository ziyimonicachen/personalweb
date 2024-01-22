import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#6d045b]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'> 
          <p className='text-[#e7e3d5]'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#eaccf6]'>Ziyi "Monica" Chen</h1>
          <h2 className='text-4xl sm:text-7xl font=bold text-[#f1e9c3]'>I'm a software engineer.</h2>
          <p className='text-[#ddd9c7] py-4 max-w-[700px]'>I am student pursuing a double degree in Operations Management & Business Analytics and Computer Science who is expecting to graduate in Spring 2025. Having a curious mind, I am constantly seeking opportunities to learn and grow, work on meaningful projects, and add skills into my skillset. Welcome to my portfolio, take a look around! </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cc5dcf] hover:border-[#eaccf6]'>View Work 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default Home