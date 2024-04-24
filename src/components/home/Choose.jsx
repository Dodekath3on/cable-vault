import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Features() {
  return (
    <section className='pb-96'>
      <h1 className='text-center text-5xl pt-24 pb-12 text-balance font-mono'>Why choose Cable Vault?</h1>
      <div className='sm:flex p-8 gap-10 max-auto justify-center'>
        <div className='bg-red-100 rounded-lg p-6 max-w-lg mb-8'>
          <h2 className='text-xl font-bold text-center text-red-700 text-balance mb-4'>Cable & Conduit Schedules without Cable Vault</h2>
          <ul className='text-red-700 px-8 space-y-2'>
            <li className='flex items-center gap-2'><FaArrowRight />Some stuff here</li>
            <li className='flex items-center gap-2'><FaArrowRight />More stuff here</li>
            <li className='flex items-center gap-2'><FaArrowRight />The rest of the stuff here</li>
          </ul>
        </div>
        <div className='bg-green-100 rounded-lg p-6 max-w-lg mb-8'>
          <h2 className='text-xl font-bold text-center text-green-700 text-balance mb-4'>Cable & Conduit Schedules with Cable Vault</h2>
          <ul className='text-green-700 px-8 space-y-2'>
            <li className='flex items-center gap-2'><FaArrowRight />Some stuff here</li>
            <li className='flex items-center gap-2'><FaArrowRight />More stuff here</li>
            <li className='flex items-center gap-2'><FaArrowRight />The rest of the stuff here</li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Features