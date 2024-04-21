import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='pt-36'>
      <div className='p-6 mb-64'>
        <h1 className='text-4xl md:text-5xl mb-4 font-semibold font-mono'><p className='leading-tight'>Engineering Solutions</p><p className='leading-tight'>for Engineers</p></h1>
        <p className='text-lg font-semibold mb-6 ml-2'>Develop cable and conduit schedules faster and more efficiently.</p>
        <Link to='/sign_in' className='ml-2 bg-primary hover:bg-secondary hover:text-primary text-white font-semibold border py-2 px-4 rounded-2xl'>Get Started</Link>
      </div>
    </section>
  )
}

export default Hero