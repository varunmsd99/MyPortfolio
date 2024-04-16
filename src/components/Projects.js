import React from 'react'
import { ProjectData } from '../utils/data'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen bg-white pt-10 flex flex-col'>
      <h1 className='text-4xl font-honk my-4 ml-10 tracking-wide'>Projects</h1>
      <div className='flex md:flex-col'>
      {ProjectData.map((x, count) => {
          return(
          <div className='p-2 items-center justify-center' key={x.title}>
            <h2 className='font-tilt-wrap text-xl font-black'>{`No. ${String(count+1).padStart(2, '0')}`}</h2>
            <h1 className='font-tilt-warp text-3xl font-black tracking-wide'>{x.title}</h1>
            <h2 className='font-tilt-neon text-lg font-light text-gray-400'>{x.subtitle}</h2>
            <h3>{x.summary}</h3>
            <h2>{`Tech Stack: ${x.techs}`}</h2>
            <img src={x.img} alt={x.title} className='object-cover' />
          </div>)
        })}
      </div>
    </div>
  )
}

export default Projects