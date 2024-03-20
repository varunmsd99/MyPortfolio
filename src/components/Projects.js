import React from 'react'
import { ProjectData } from '../utils/data'

const Projects = () => {
  return (
    <div id='projects' className='min-h-[100dvh] bg-white pt-10 flex md:flex-col'>
        {ProjectData.map((x) => {
          return(
          <div className='flex-1' key={x.title}>
            <img src={x.img} alt={x.title} className='object-cover' />
          </div>)
        })}
    </div>
  )
}

export default Projects