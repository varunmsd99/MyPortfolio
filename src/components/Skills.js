import React from 'react';
import SplineKeyboard from './SplineKeyboard';

const Skills = () => {
  return (
    <div id='skills' className='min-h-[100dvh] bg-black text-white pt-12 flex flex-col'>
      <h1 className='text-3xl font-black p-3 tracking-wide'>Skills</h1>
      <div className='flex-1 flex justify-center items-center mt-4 md:flex-col-reverse'>
        <div className='flex-1'>

        </div>
        <div className='flex flex-1 items-start w-full'>
          <SplineKeyboard />
        </div>
      </div>
    </div>
  )
}

export default Skills