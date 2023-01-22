import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/dashboard/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Footer from './components/Footer'


const App = () => {

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail' element={<Detail />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
