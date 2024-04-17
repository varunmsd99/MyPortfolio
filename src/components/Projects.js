import React from 'react'
import { ProjectData } from '../utils/data'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen bg-white pt-10 flex flex-col'>
      <h1 className='text-4xl font-honk my-4 ml-6 tracking-wide'>Projects</h1>
      <div className='flex md:flex-col m-4'>
      {ProjectData.map((x, count) => {
          return(
          <div className='flex-1 p-4 items-center justify-center h-max' key={x.title}>
            <h2 className='font-big-shoulder text-xl font-black text-[#86868b]'>{`No. ${String(count+1).padStart(2, '0')}`}</h2>
            <h1 className='font-tilt-warp text-3xl font-black tracking-wide'>{x.title}</h1>
            <h2 className='font-tilt-neon text-lg font-light text-[#86868b]'>{x.subtitle}</h2>
            <h3 className='font-jura text-[#484849] text-sm indent-5 my-4'>{x.summary}</h3>
            <div className='flex justify-center items-start'>
              <h1 className='font-jura text-[#484849] text-sm font-semibold text-nowrap'>Tech Stack: &nbsp;</h1>
              <h2 className='text-[#0071E3] font-jura text-sm'>{x.techs}</h2>
            </div>
            <div className='flex justify-center items-center gap-4 my-6'>
              <Link to={x.githubLink} className='text-white bg-[#0071E3] text-sm border-[1px] border-[#0071E3] py-2 px-4 rounded-full hover:bg-[#0071FF] hover:border-[#0071FF]'>GitHub Link</Link>
              <Link to={x.projectLink} className='text-[#0071E3] text-sm border-[1px] border-[#0071E3] py-2 px-4 rounded-full hover:text-white hover:bg-[#0071FF]'>Live Demo</Link>
            </div>
            <img src={x.img} alt={x.title} className='object-cover rounded-xl border-2 border-[#e5e7eb]' />
          </div>)
        })}
      </div>
    </div>
  )
}

export default Projects