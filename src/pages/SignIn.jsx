import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='mt-64 max-w-screen px-4'>
      <div className='flex flex-col max-auto'>
        <h1 className='text-3xl text-center text-primary font-bold mb-6'>Sign in to your account</h1>
        <form action="" className='flex flex-col m-auto mb-16'>
          <label htmlFor="email" className='mb-2 font-semibold'>Email</label>
          <input type="email" className='border rounded-lg mb-2 px-2 py-1' placeholder='email@buisness.com' />
          <label htmlFor="password" className='mb-2 font-semibold'>Password</label>
          <input type="password" className='border rounded-lg mb-6 px-2 py-1' placeholder='********' />
          <div className='text-right'>
            <button className=' bg-primary hover:bg-secondary hover:text-primary text-white font-semibold border py-2 px-4 rounded-2xl'>Sign In</button>
            {/* <input type="submit" value='Sign In' className=' bg-primary hover:bg-secondary text-white font-semibold border py-2 px-4 rounded-2xl' /> */}
          </div>
        </form>
        <div className='flex text-primary text-sm gap-x-2 justify-center'>
          <p className='font-semibold'>New to Cable-Vault?</p>
          <Link to='/sign_up' className='font-bold underline hover:text-secondary'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn