import React from 'react'

function Table({ project }) {
  return (
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
  )
}

export default Table