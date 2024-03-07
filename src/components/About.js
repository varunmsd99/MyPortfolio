import React from 'react'
import face from '../images/face.png'

const About = () => {
  return (
    <div className='bg-white min-h-[100dvh] pt-10' id='about'>
        <img src={face} alt='face' className='self-center w-[40vw] md:w-[67vw] rounded-full'/>
    </div>
  )
}

export default About