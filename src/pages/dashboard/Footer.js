import React from 'react'

const Footer = () => {
  return (
    <div className='relative '>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path>
      </svg>
      <div className='bg-black flex justify-center flex-col items-center absolute bottom-0 inset-x-0 top-[50%] text-gray-300'>
        <h1 className='text-white'>Designed and Develop By</h1>
        <h1 className=''>Someone anonymous</h1>
      </div>
    </div>
  )
}

export default Footer
