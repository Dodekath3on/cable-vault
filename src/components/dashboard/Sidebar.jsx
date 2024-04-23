import React from 'react'
import { Link } from 'react-router-dom'

// This is a temporary usage, we will only want to GET the information for the user, not GET all information and present the user information
const user = {
  'name': 'Samuel-DeSantis',
  // 'name': 'Michael-Scarn'
}

const generalLinks = [
  {
    'name': 'My Team',
    'href': '/team'
  },
  {
    'name': 'Settings',
    'href': '/settings'
  },
]

function Sidebar({ projects }) {

  const userProjects = (project) => {
    if (project.user == user.name) {
      return (
        <li>
          <Link to='/dashboard' className='hover:font-semibold'>{project.name}</Link>
        </li>
      )
    }
  }

  return (
    <section className='h-screen w-48 border-r-2'>
      <div className='border-b-2 p-4 pb-36'>
        <h2 className='text-xl text-primary font-semibold underline'>Projects</h2>
        <ul className='ml-2 text-lg space-y-1'>
          {projects.map(project => userProjects(project))}
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