import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/dashboard/Sidebar'

// https://flowbite.com/blocks/application/advanced-tables/ See: Table with Expandable Rows

function Dashboard() {
  return (
    <main className='flex'>
      <Sidebar />
      <section className='p-6 w-screen'>
        <h2 className='text-2xl'>Overview</h2>
        <table className='table-auto'>
          <thead>
            <tr className='border-b-2'>
              <th className='pr-4'><label htmlFor=""><input type="checkbox" /></label></th>
              <th className='pr-4'>Tag</th>
              <th className='pr-4'>Size</th>
              <th className='pr-4'>To</th>
              <th className='pr-4'>From</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className='border-b-2'>
              <td><label htmlFor=""><input type="checkbox" /></label></td>
              <td>K01</td>
              <td>2"</td>
              <td>RTU</td>
              <td>Boiler Building</td>
            </tr>
            <tr className='border-b-2'>
              <td><label htmlFor=""><input type="checkbox" /></label></td>
              <td>K02</td>
              <td>1"</td>
              <td>RTU</td>
              <td>Compressor Building</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Dashboard