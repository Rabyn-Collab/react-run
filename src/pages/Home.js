import React from 'react'
import { useNavigate } from 'react-router-dom';
import MovieShow from '../components/MovieShow';
import { useGetMovieByCategoryQuery } from '../features/movieSlice'

const Home = () => {


  const { data, isError, isLoading, error } = useGetMovieByCategoryQuery('popular');
  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[500px]'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_a2chheio.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <>
      <MovieShow movies={data} />
      <button onClick={() => {
        nav(`/movie/${data?.page}`, {
          state: {
            path: 'popular',
            page: data.page + 1
          }
        })
      }} className='bg-cyan-200 p-2'>Next Page</button>

    </>
  )
}

export default Home
