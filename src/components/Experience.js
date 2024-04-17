import React from 'react'
import { ExperienceData, EducationData } from '../utils/data'

const Experience = () => {
  return (
    <div id='experience' className='min-h-screen bg-black pt-10 flex flex-col'>
      <h1 className='text-4xl font-honk my-4 ml-6 tracking-wide'>Experience</h1>
      <div className='flex-1 flex md:flex-col text-white px-10 pb-8 md:px-0'>
        <div className='flex-1 p-8 md:p-4'>
          <h1 className='mb-10 font-tilt-warp text-[#cacaca] px-2 text-4xl font-normal tracking-wide'>Work Experience</h1>
          {ExperienceData.map((x) => {
            return(
            <div className='flex flex-col m-6 p-4 border-[1px] border-[#f3f4f6] rounded-lg md:m-3'>
              <div className='flex'>
                <img src={x.img} alt='img' className='h-[4rem] w-[4rem] bg-white p-1 rounded-full' />
                <div className='px-4'>
                  <h1 className='font-big-shoulder text-xl font-black text-[#f3f4f6]'>{x.role}</h1>
                  <h2 className='font-tilt-neon text-lg font-medium text-[#f3f4f6]'>{x.name}</h2>
                  <h2 className='font-jura text-[#f3f4f6]'>{x.duration}</h2>
                </div>
              </div>
              <h2 className='indent-8 font-jura text-[#86868b] mb-2'>{x.description}</h2>
              <h2 className='font-jura text-[#0071E3] font-semibold'>{`Skills: ${x.skills}`}</h2>
            </div>
            )
          })}
        </div>
        <div className='flex-1 p-8 md:p-4'>
          <h1 className='mb-10 font-tilt-warp text-[#cacaca] text-4xl px-2 font-normal tracking-wide'>Education</h1>
          {EducationData.map((x) =>{
            return(
              <div className='flex flex-col m-6 p-4 border-[1px] border-[#f3f4f6] rounded-lg md:m-0 md:mx-3 md:mb-6'>
                <div className='flex'>
                  <img src={x.image} alt='img' className='h-[4rem] w-[4rem] bg-white p-1 rounded-full' />
                  <div className='px-4'>
                    <h1 className='font-big-shoulder text-xl font-black text-[#f3f4f6]'>{x.stream}</h1>
                    <h2 className='font-tilt-neon text-lg font-medium text-[#f3f4f6]'>{x.name}</h2>
                    <h2 className='font-jura text-[#f3f4f6]'>{x.duration}</h2>
                  </div>
                </div>
                <h2 className='indent-8 font-jura text-[#86868b]'>{x.description}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience