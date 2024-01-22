import React from 'react';
import C from '../assets/skills/c.png';
import Java from '../assets/skills/java.png';
import JavaScript from '../assets/skills/javascript.png';
import HTML from '../assets/skills/html.png';
import CSS from '../assets/skills/css.png';
import Python from '../assets/skills/python.png';
import ReactImg from '../assets/skills/react.png';
import Git from '../assets/skills/git.png';
import GitHub from '../assets/skills/github.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#6d045b] text-gray-200'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-4'>//These are the technologies I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={Java} alt="Java icon" />
            <p className='my-4'>JAVA</p>
          </div>

          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={C} alt="C icon" />
            <p className='my-4'>C</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={Python} alt="Python icon" />
            <p className='my-4'>PYTHON</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={ReactImg} alt="ReactImg icon" />
            <p className='my-4'>REACT</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={Git} alt="Git icon" />
            <p className='my-4'>GIT</p>
          </div>
          
          <div className='shadow-sm bg-[#8d227b] shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto my-4' src={GitHub} alt="GitHub icon" />
            <p className='my-4'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills