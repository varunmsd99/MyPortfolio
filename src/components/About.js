import React from 'react'
import face from '../images/face.png'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className='bg-white min-h-screen pt-10' id='about'>
        <h1>About</h1>
        <img src={face} alt='face' className='self-center w-52 h-52 rounded-full -z-10'/>
        <Link to='' className='-my-40'>Contact me</Link>
    </div>
  )
}

export default About