import React from 'react'
import { FaCss3, FaJava, FaNode, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
const Tech = () => {
  return (
    <div className='my-3'>
      <h1 className='text-center text-4xl font-bold'>Technologies I use</h1>
      <div className='grid grid-cols-4 items-center pt-10 gap-y-10 my-10'>
        <FaReact className='w-full text-center hover:scale-105 transition-all ease-in hover:text-red-500 cursor-pointer ' size={150} />
        <FaJava className='w-full text-center' size={150} />
        <FaNode className='w-full text-center' size={150} />
        <FaPython className='w-full text-center animate-bounce' size={150} />
        <FaVuejs className='w-full text-center ' size={150} />
        <FaCss3 className='w-full text-center' size={150} />
      </div>
    </div>
  )
}

export default Tech
