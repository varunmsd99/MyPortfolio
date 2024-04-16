import React from 'react'
import face from '../images/face.png'
import { UserData } from '../utils/data'

const About = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col pt-12 px-12 md:px-0' id='about'>
      <h1 className='text-[2.25rem] font-honk mt-4 ml-6 tracking-wide'>About</h1>
      <div className='flex flex-1 md:flex-col'>
        <div className='md:flex-none flex items-center justify-center'>
          <img src={face} alt='face' className='max-w-[33vw] md:max-w-[75vw] rounded-full'/>
        </div>
        <div className='flex-1 flex justify-center flex-col'>
          <div className='shadow-[0px_1px_4px_2px_#d4d5d9] m-6 text-clip text-[#727274] rounded-lg'>
            <div className='h-[1.75rem] bg-[#e5e7eb] flex items-center rounded-t-lg left-0 space-x-2 px-2'>
              <div className='w-[1rem] h-[1rem] bg-red-500 rounded-full' />
              <div className='w-[1rem] h-[1rem] bg-yellow-500 rounded-full' />
              <div className='w-[1rem] h-[1rem] bg-green-500 rounded-full' />
              <div className='flex-1 w-full flex justify-center items-center'>
                <h2 className='text-[#374151] font-semibold font-jura'>About Me</h2>
              </div>
              <div className='invisible w-[1rem] h-[1rem]' />
              <div className='invisible w-[1rem] h-[1rem]' />
              <div className='invisible w-[1rem] h-[1rem]' />
            </div>
            <div className='flex flex-col p-6 md:p-3'>
              <h1 className='pt-3 font-light indent-10 text-clip text-[1rem] font-jura'>{UserData.about}</h1>
              <div className='flex mt-4 justify-evenly md:flex-col'>
                <div className='flex-1 flex flex-col items-center p-2 mr-6 rounded-xl border-2 border-[#f3f4f6] md:w-full md:mb-6'>
                  <h1 className='font-jura text-black text-[1.25rem]'>What I do</h1>
                  <div>
                  {UserData.WhatIDo.map((x) => {
                    return(
                      <div className='flex bg-[#f4f5f9] p-2 md:p-3 my-2 rounded-xl'>
                        <div className='flex items-center justify-center pr-2'>
                          {x.icon}
                        </div>
                        <div className='flex flex-col justify-center pr-2'>
                          <h2 className='text-[1rem] leading-3 text-black pb-1 font-jura'>{x.title}</h2>
                        </div>
                      </div>
                    )
                  })}
                  </div>
                </div>
                <div className='flex-1 flex flex-col items-center p-2 rounded-xl border-2 border-[#f3f4f6] md:w-full'>
                  <h1 className='font-jura text-black text-[1.25rem]'>Interests</h1>
                  <div className='grid grid-cols-2 w-full gap-x-4'>
                  {UserData.Interests.map((x) => {
                    return(
                      <div className='flex bg-[#f4f5f9] p-2 md:p-3 my-2 rounded-xl'>
                        <div className='flex items-center justify-center pr-2'>
                          {x.icon}
                        </div>
                        
                        <div className='flex flex-col justify-center pr-2'>
                          <h2 className='text-[1rem] leading-3 text-black pb-1 font-jura'>{x.title}</h2>
                        </div>
                      </div>
                    )
                  })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About