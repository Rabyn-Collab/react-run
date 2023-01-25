import React from 'react'
import { useGetMovieByCategoryQuery } from '../features/movieSlice'

const Home = () => {

  // const m ={
  //   id: 1,
  //   title: 'lio'
  // };

  // const {id, title} = m;

  const { data, isError, isLoading, error } = useGetMovieByCategoryQuery('popular');

  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <div>
      {data && data.results.map((movie) => {
        return <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="" />
        </div>
      })}
    </div>
  )
}

export default Home
