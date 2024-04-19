import React from 'react'
import { Link } from 'react-router-dom';
import { FaVault } from "react-icons/fa6";

const navLinks = [
  {},
]

function Navbar() {
  return (
    <nav className='flex items-center justify-between flex-wrap p-6 border-b-2 border-b-50'>
      <a href='/' className='flex items-center flex-shrink-0 space-x-4'>
        <FaVault className='size-10 text-primary' />
        <h1 className='text-2xl font-semibold font-mono text-primary'>CABLE-VAULT</h1>
      </a>
      <Link to='sign_in' className='bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded-3xl'>Sign In</Link>
    </nav>
  )
}

export default Navbar