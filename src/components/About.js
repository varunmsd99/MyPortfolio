import React from 'react'
import face from '../images/face.png'
import { UserData } from '../utils/data'

const About = () => {
  return (
    <div className='bg-white min-h-[100dvh] flex flex-col pt-12 px-12 md:px-0' id='about'>
      <h1 className='text-3xl font-black my-4 ml-10 tracking-wide'>About</h1>
      <div className='flex md:flex-col'>
        <img src={face} alt='face' className='self-center w-[40vw] md:w-[67vw] rounded-full'/>
        <div className='flex-1 flex p-2 flex-col items-center justify-center text-clip rounded-xl'>
          <h1>{UserData.about}</h1>
        </div>
      </div>
    </div>
  )
}

export default About