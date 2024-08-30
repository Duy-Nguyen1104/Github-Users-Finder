import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold text-white'>404</h1>
          <p className='mb-5'>Sorry, the page you are looking for could not be found.</p>
          <Link to='/' className='btn btn-primary'>
           <FaHome className='inline-bloc mr-2 text-lg' /> Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound