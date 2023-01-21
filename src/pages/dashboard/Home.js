import React from 'react'
import Footer from './Footer'
import Intro from './Intro'
import Tech from './Tech'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-2 items-center mb-10 px-11   md:grid-cols-1 md:gap-7 '>

        <div className='h-[450px]'>
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop autoplay ></lottie-player>

        </div>


        <div className='space-y-1'>
          <h1 className='text-4xl font-bold'>Hi, I am John </h1>
          <h2 className='font-semibold'>Some Dev, Freelancer, Rounder</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
        </div>

      </div>
      <Tech />
      <Intro />
      <Footer />
    </>
  )
}

export default Home
