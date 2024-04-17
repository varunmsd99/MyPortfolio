import React from 'react';
import SplineKeyboard from './SplineKeyboard';
import { SkillsData } from '../utils/data';

const Skills = () => {
  return (
    <div id='skills' className='min-h-screen bg-black text-white pt-12 px-12 pb-10 md:px-0 flex flex-col'>
      <h1 className='text-4xl font-honk my-4 ml-6 tracking-wide'>Skills</h1>
      <div className='h-full flex-1 flex items-center md:flex-col'>
        <div className='flex-1 flex flex-col items-center justify-center w-full h-full'>
          <SplineKeyboard />
          <h3 className='text-xs text-[#86868b]'>Press "J, T, R, W, 5, 3" or click(tap)</h3>
        </div>
        <div className='flex-1 flex flex-col border-2 border-gray-700 rounded-xl m-6'>
          <div className='h-[1.75rem] bg-[#374151] flex items-center rounded-t-lg left-0 space-x-2 px-2'>
            <div className='w-[1rem] h-[1rem] bg-red-500 rounded-full' />
            <div className='w-[1rem] h-[1rem] bg-yellow-500 rounded-full' />
            <div className='w-[1rem] h-[1rem] bg-green-500 rounded-full' />
            <div className='flex-1 w-full flex justify-center items-center'>
              <h2 className='text-[#e5e7eb] font-semibold font-jura'>My Skills</h2>
            </div>
            <div className='invisible w-[1rem] h-[1rem]' />
            <div className='invisible w-[1rem] h-[1rem]' />
            <div className='invisible w-[1rem] h-[1rem]' />
          </div>
          <div className='flex-1 p-8 grid grid-cols-2 gap-4 md:p-4'>
          {SkillsData.map((x) =>{
            return(
              <div key={x.title} className='flex p-8 flex-col items-center justify-center text-clip bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-200 rounded-xl'>
                <h1 className='text-center text-xl font-bold tracking-wide'>{x.title}</h1>
                <h2 className='text-center text-sm pt-2 font-jura tracking-wide'>{x.text}</h2>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;