import React from 'react'
import { type StatusTypes } from '@/app/components/Status/Status.types'

const Status: React.FC<StatusTypes> = ({ status }) => {
  let statusClass

  switch (status) {
    case 'Active':
      statusClass = 'text-green-2 bg-green-3 border-green-2'
      break
    case 'Inactive':
      statusClass = 'text-red-1 bg-red-2 border-red-1'
      break
    default:
      console.error('Please provide customer status')
      break
  }

  return (
    <span
      className={`border rounded py-1 px-2 text-center font-medium inline-block w-20 ${statusClass}`}>{status}</span>
  )
}

export default Status
