import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// <IoIosArrowUp />
// <IoIosArrowDown />

function Table({ project }) {

  const toggleConductors = conduit => {
    console.log(conduit.tag)
    let conductors = document.getElementById(conduit.tag)
    if (conductors.style.visibility === 'hidden') {
      conductors.style.visibility = 'visible'
    } else {
      conductors.style.visibility = 'hidden'
    }
  }

  return (
    <div className='border-2 rounded-xl size-fit'>
      <table className='table-auto m-6'>
        <thead className=''>
          <tr className='text-left'>
            <th className='px-5'>Tag</th>
            <th className='px-5'></th>
            <th className='px-5'>Size</th>
            <th className='px-5'>To</th>
            <th className='px-5'>From</th>
          </tr>
        </thead>
        <tbody className=''>
          {project.conduits.map(conduit => {
            return (
              <>
                <tr className='border-b-2'>
                  <td className='py-2 px-5'>{conduit.tag}</td>
                  <td className='py-2 px-5'><button onClick={() => toggleConductors(conduit)}><IoIosArrowUp /></button></td>
                  <td className='py-2 px-5'>{conduit.size}</td>
                  <td className='py-2 px-5'>{conduit.to}</td>
                  <td className='py-2 px-5'>{conduit.from}</td>
                  <td className='py-2 px-5'>
                    <button className='border-2 rounded-xl py-1 px-2 font-semibold border-blue-800 hover:bg-blue-200 text-blue-800'>Update</button>
                    </td>
                  <td className='py-2 px-5'>
                    <button className='border-2 rounded-xl py-1 px-2 font-semibold border-red-800 hover:bg-red-200 text-red-800'>Delete</button>
                    </td>
                </tr>
              </>
          )})}
          <tr className='border-b-2'>
            <td className='p-2'>
              <input
                type="text"
                className='border-2 rounded-xl px-2 max-w-36'
                placeholder='Tag' />
            </td>
            <td></td>
            <td className='p-2'>
              <input
                type="text"
                className='border-2 rounded-xl px-2'
                placeholder='Size' />
            </td>
            <td className='p-2'>
              <input
                type="text"
                className='border-2 rounded-xl px-2'
                placeholder='To' />
            </td>
            <td className='p-2'>
              <input
                type="text"
                className='border-2 rounded-xl px-2'
                placeholder='From' />
            </td>
            <td className='py-2 px-5'>
              <button className='border-2 rounded-xl py-1 px-2 font-semibold border-green-800 hover:bg-green-200 text-green-800'>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Table