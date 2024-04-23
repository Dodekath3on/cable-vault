import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/dashboard/Sidebar'
import Table from '../../components/dashboard/Table'

// https://flowbite.com/blocks/application/advanced-tables/ See: Table with Expandable Rows

const dashboardContent = [
  {
    'user': 'Samuel-DeSantis',
    'name': 'Station 1',
    'conduits': [
      {
        'tag': 'K01',
        'size': 2,
        'from': 'RTU',
        'to': 'Actuator',
        'conductors': [
          {
            'tag': 'C01',
            'cable': '12C-8AWG'
          }
        ]
      },
      {
        'tag': 'K02',
        'size': 2,
        'from': 'RTU',
        'to': 'Actuator',
        'conductors': [
          {
            'tag': 'C02',
            'cable': '12C-8AWG'
          }
        ]
      },
      {
        'tag': 'K03',
        'size': 2,
        'from': 'RTU',
        'to': 'Actuator',
        'conductors': [
          {
            'tag': 'C03',
            'cable': '12C-8AWG'
          }
        ]
      }
    ]
  },
  {
    'user': 'Samuel-DeSantis',
    'name': 'Station 2',
    'conduits': [
      {
        'tag': 'K01',
        'size': 2,
        'from': 'RTU',
        'to': 'Actuator',
        'conductors': [
          {
            'tag': 'C01',
            'cable': '12C-8AWG'
          }
        ]
      }
    ]
  },
  {
    'user': 'Michael-Scarn',
    'name': 'Station 3',
    'conduits': [
      {
        'tag': 'K01',
        'size': 2,
        'from': 'RTU',
        'to': 'Actuator',
        'conductors': [
          {
            'tag': 'C01',
            'cable': '12C-8AWG'
          }
        ]
      }
    ]
  },
]

function Dashboard() {
  return (
    <main className='flex'>
      <Sidebar projects={dashboardContent}/>
      <section className='p-6 w-screen'>
        <h2 className='text-2xl'>Overview</h2>
        <Table project={dashboardContent[0]}/>
      </section>
    </main>
  )
}

export default Dashboard