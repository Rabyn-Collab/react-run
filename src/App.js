import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Detail from './pages/Detail'
import Home from './pages/Home'
import MovieByCategory from './pages/MovieByCategory'
import Search from './pages/Search'


const App = () => {
  return (
    <>

      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='page/:category' element={<MovieByCategory />} />
        <Route path='search/movie/:searchText' element={<Search />} />
        <Route path='/movie/detail' element={<Detail />} />

      </Routes>



    </>
  )
}

export default App
