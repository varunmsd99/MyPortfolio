import React from 'react';
import SplineKeyboard from './SplineKeyboard';
import { SkillsData } from '../utils/data';

const Skills = () => {
  return (
    <div id='skills' className='min-h-screen bg-black text-white pt-12 px-12 md:px-0 flex flex-col'>
      <h1 className='text-4xl font-honk  my-4 ml-10 tracking-wide'>Skills</h1>
      <div className='flex-1 flex md:flex-col'>
        <div className='flex-1 flex items-center justify-center md:w-full md:flex-none'>
          <SplineKeyboard />
        </div>
        <div className='flex-1 p-10 grid grid-cols-2 gap-4 md:p-4'>
          {SkillsData.map((x) =>{
            return(
              <div key={x.title} className='flex p-2 flex-col items-center justify-center text-clip bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-200 rounded-xl'>
                <h1 className='text-center text-xl font-semibold'>{x.title}</h1>
                <h2 className='text-center text-sm font-thin pt-2'>{x.text}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills