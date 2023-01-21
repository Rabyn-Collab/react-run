import { Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Modal from './components/Modal'


const App = () => {

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail' element={<Detail />} />
        <Route path='about' element={<About />} />
        <Route path='post/:type' element={<Modal />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
