import React from 'react'
import { Link } from 'react-router-dom'

function Feedback() {
  return (
    <div className='mt-32 md:mt-64 max-w-screen px-4'>
      <div className='flex flex-col max-auto'>
        <h1 className='text-3xl text-center text-primary font-bold mb-6 text-balance'><p>Let us know what you</p><p>would like to see next!</p></h1>
        <form action="" className='flex flex-col m-auto mb-8'>
          <label htmlFor="email" className='mb-2 font-semibold'>Message</label>
          <textarea type="text" className='border rounded-lg mb-8 w-80 h-48 resize px-2 py-1' placeholder='Your message goes here...' />
          <div className='text-right'>
            <Link to='/' className=' bg-primary hover:bg-secondary hover:text-primary text-white font-semibold border py-2 px-4 rounded-2xl'>Send</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback