import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-4xl font-bold'>Who am I</h1>

      <div className='h-[390px] w-[390px] mt-7 border-4 border-green-400 bg-black rounded-full text-white flex  flex-col items-center justify-center'>

        <div>
          <h1>Name : Some Person</h1>
          <h1>Email: someperson@gmail.com</h1>
          <h1>Tel:9777777</h1>
          <h1>Age:90</h1>
          <h1>Experience:python, java, dart</h1>

        </div>


      </div>
    </div>
  )
}

export default Intro
