import React from 'react'
import { ProjectData } from '../utils/data'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen bg-white pt-10 flex flex-col'>
      <h1 className='text-4xl font-honk my-4 ml-10 tracking-wide'>Projects</h1>
      <div className='flex'>
      {ProjectData.map((x) => {
          return(
          <div className='flex-1' key={x.title}>
            <img src={x.img} alt={x.title} className='object-cover' />
          </div>)
        })}
      </div>
    </div>
  )
}

export default Projects