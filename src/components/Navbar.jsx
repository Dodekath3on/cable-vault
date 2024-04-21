import React from 'react'
import { Link } from 'react-router-dom';
import { FaVault } from "react-icons/fa6";

function Navbar() {

  const user = true

  const signedInNav = <div className='space-x-4'>
    <Link to='/' className='bg-transparent text-primary font-semibold hover:font-bold'>Sign Out</Link>
    <Link to='/feedback' className='bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-3xl'>Feedback</Link>
  </div>
  const signedOutNav = <Link to='sign_in' className='bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-3xl'>Sign In</Link>


  return (
    <nav className='flex items-center justify-between flex-wrap p-6 border-b-2 border-b-50'>
      <a href='/' className='flex items-center flex-shrink-0 space-x-4'>
        <FaVault className='size-10 text-primary' />
        <h1 className='text-2xl font-bold font-mono text-primary'>CABLE-VAULT</h1>
      </a>
      {/* If Signed in, see signed in Options */}
      {true ? signedInNav : signedOutNav }
    </nav>
  )
}

export default Navbar