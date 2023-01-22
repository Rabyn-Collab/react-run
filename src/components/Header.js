import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { change } from '../features/post';

const Header = () => {
  const { toggle } = useSelector((store) => store.post);
  const dispatch = useDispatch();


  const links = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <div className='bg-black flex justify-between py-3 px-10 text-white items-baseline z-50 sticky top-0'>


      <div>


        <NavLink to='/' replace={true}> <h1 className='text-2xl'>Demo</h1></NavLink>


        {toggle === true && <div className='flex-col mt-2 space-y-2 hidden sm:flex  '>
          {links.map((l, i) => {
            return <NavLink onClick={() => dispatch(change())} className='menu-item' key={i} to={l.path}>{l.name}</NavLink>;
          })}
        </div>}
      </div>




      {toggle === true ? <button className='hidden sm:block mt-1' onClick={() => dispatch(change())} > <i className="fa-solid fa-xmark fa-xl"></i></button> : <button onClick={() => dispatch(change())} className='hidden  sm:block mt-1'><i className="fa-solid fa-bars fa-xl "></i></button>
      }



      <div className='space-x-5  sm:hidden'>
        <NavLink className='menu-item' to='/about'>About</NavLink>
        <NavLink className='menu-item' to='/contact'>Contact</NavLink>

      </div>


    </div>
  )
}

export default Header
