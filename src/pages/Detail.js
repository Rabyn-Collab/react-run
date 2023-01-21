import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {

  const { state } = useLocation();

  return (
    <div className='p-5'>
      <img className='w-[50%] h-[370px] object-cover' src={state.post.imageUrl} alt="" />
      <h1 className='text-2xl my-3'>{state.post.title}</h1>
      <p className='text-gray-900'>{state.post.detail}</p>
    </div>
  )
}

export default Detail
