import React from 'react'
import face from '../images/face.png'
import { UserData } from '../utils/data'

const About = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col pt-12 px-12 md:px-0' id='about'>
      <h1 className='text-4xl font-honk mt-4 ml-6 tracking-wide'>About</h1>
      <div className='flex flex-1 md:flex-col'>
        <div className='flex-1 md:flex-none flex items-center justify-center'>
          <img src={face} alt='face' className='max-w-[33vw] md:max-w-[75vw] rounded-full'/>
        </div>
        <div className='flex-1 flex justify-center flex-col'>
          <div className='bg-[#f6f6f9be] backdrop-blur-md shadow-[0px_1px_4px_2px_#d4d5d9] m-5 px-16 py-20 md:p-4 text-clip text-[#727274] rounded-3xl indent-10'>
            <h1 className='font-bungee-spice indent-0 text-4xl font-extrabold bg-[linear-gradient(to_right,#eca658,#f391a6,#e188c3,#a58de3,#56abec,#737eb7,#c8638c,#dd5d57,#df6c51)] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient'>{UserData.name}</h1>
              {UserData.about.map((x) => {
                return(<h1 className='pt-3 font-light text-lg font-jura' key={x}>{x}</h1>)
              })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default About