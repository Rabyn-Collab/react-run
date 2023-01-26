import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MovieByCategory from './pages/MovieByCategory'


const App = () => {
  return (
    <>

      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='page/:category' element={<MovieByCategory />} />

      </Routes>



    </>
  )
}

export default App
