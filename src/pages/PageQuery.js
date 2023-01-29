import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MovieShow from '../components/MovieShow';
import { useGetMovieByCategoryQuery, useGetMovieByPageQuery } from '../features/movieSlice'

const PageQuery = () => {
  const nav = useNavigate();

  const { state } = useLocation();

  console.log(state);

  const { data, isError, isLoading, error } = useGetMovieByPageQuery({
    path: state.path,
    page: state.page
  });



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
            path: state.path,
            page: data.page + 1
          }
        })
      }} className='bg-cyan-200 p-2'>Next Page</button>
    </>
  )
}

export default PageQuery
