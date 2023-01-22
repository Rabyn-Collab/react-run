import React from 'react'

function Main() {
  return (
    <div className='grid grid-cols-2 items-center px-[2%]'>
      <div className='h-[450px]'>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
      <div className=''>
        <h1 className='text-4xl font-bold'>Hi, I am John </h1>
        <h2 className='py-2 text-rose-500'>Some Dev, Freelancer, Rounder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>


    </div>
  )
}

export default Main
