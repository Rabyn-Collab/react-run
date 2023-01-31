import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { changeQuery } from '../features/menuSlice';

const SearchNewsField = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (val, { resetForm }) => {
      dispatch(changeQuery(val.query));
      resetForm();
    }
  });

  return (
    <div>

      <form onSubmit={formik.handleSubmit} className='w-[50%] pl-5 pb-6 pt-9'>
        <div className='relative'>
          <input type="search" placeholder='search movies' id='query' name='query' onChange={formik.handleChange} value={formik.values.query} className='block w-full pl-5 py-1 rounded-full outline-none border border-gray-600 text-gray-700' />

          <div className='absolute right-2 inset-y-0 flex items-center pr-2'>
            <button type='submit' className='text-green-700 '><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default SearchNewsField
