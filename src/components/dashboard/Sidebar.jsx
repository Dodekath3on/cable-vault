import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <section className='h-screen w-48 border-r-2'>
      <div className='border-b-2 p-4 pb-36'>
        <h2 className='text-xl text-primary font-semibold underline'>Projects</h2>
        <ul className='ml-2 text-lg space-y-1'>
          <li>
            <Link to='/dashboard' className='hover:font-semibold'>New Project 1</Link>
          </li>
          <li>
            <Link to='/dashboard' className='hover:font-semibold'>New Project 2</Link>
          </li>
          <li>
            <Link to='/dashboard' className='hover:font-semibold'>New Project 3</Link>
          </li>
        </ul>
      </div>
      <div className='p-4'>
        <h2 className='text-xl text-primary font-semibold underline'>General</h2>
        <ul className='ml-2 text-lg space-y-1'>
          <li>
            <Link to='/dashboard' className='hover:font-semibold'>My Team</Link>
          </li>
          <li>
            <Link to='/dashboard' className='hover:font-semibold'>Settings</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sidebar