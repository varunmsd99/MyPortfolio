import React from 'react'
import { ExperienceData, EducationData } from '../utils/data'

const Experience = () => {
  return (
    <div id='experience' className='min-h-screen bg-black pt-10 flex flex-col'>
      <h1 className='text-4xl font-honk my-4 ml-10 tracking-wide'>Experience</h1>
      <div className='flex-1 flex md:flex-col text-white p-10'>
        <div className='flex-1 p-8'>
          <h1>Work Experience</h1>
          {ExperienceData.map((x) => {
            return(
            <div className='flex'>
              <img src={x.img} alt='img' className='h-[4rem] w-[4rem] bg-white p-1 rounded-full' />
              <div>
                <h1>{x.role}</h1>
                <h2>{x.name}</h2>
                <h2>{x.duration}</h2>
                <h2>{x.description}</h2>
                <h2>{x.skills}</h2>
              </div>
            </div>
            )
          })}
        </div>
        <div className='flex-1 p-8'>
          <h1>Education</h1>
          {EducationData.map((x) =>{
            return(
              <div className='flex'>
                <img src={x.image} alt='img' className='h-[4rem] w-[4rem] bg-white p-1 rounded-full' />
                <div>
                  <h1>{x.stream}</h1>
                  <h2>{x.name}</h2>
                  <h2>{x.duration}</h2>
                  <h2>{x.description}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience