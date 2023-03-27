import React from 'react'
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div className='m-6'>
         <p className=' text-4xl mb-3'>404 not found</p>
        <Link to="/">Click here back to <strong className='underline text-blue-600'>Home</strong> </Link>
    </div>
  )
}
export default NotFound404