import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col  items-center space-y-7  mt-9'>
      <h1 className='text-4xl font-bold'>Who am I</h1>
      <div className='h-[400px] flex flex-col justify-center items-center text-justify text-gray-300 w-[400px] my-4 rounded-full bg-black border-[5px] border-green-400 '>
        <div>
          <h1>Name : Some Person</h1>
          <h1>Email : someperson@gmail.com</h1>
          <h1>Tel : 9777777</h1>
          <h1>Age : 90</h1>
          <h1>Experience : python, java, dart node.js</h1>
        </div>


      </div>
    </div>
  )
}

export default Intro
