import React from 'react'

function Conductors({ conduit }) {
  conduit.conductors.map(conductor => {
    return (
      <>
        <tr className='border-b-2'>
          <td></td>
          <td className='py-2 px-5 font-semibold'>Tag</td>
          <td className='py-2 px-5 font-semibold'>Cable</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='border-b-2'>
          <td className=''></td>
          <td className='py-2 px-5'>{conductor.tag}</td>
          <td className='py-2 px-5'>{conductor.cable}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </>
  )})
}

export default Conductors