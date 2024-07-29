import React from 'react'
import { type SkeletonTypes } from '@/app/components/Skeleton/Skeleton.types'
const Skeleton: React.FC<SkeletonTypes> = ({ tdClasses }) => {
  const skeletonRows = Array.from({ length: 8 }, (_, index) => index)

  return (
    skeletonRows.map(index => (
      <tr className='flex-col' key={index}>
        <td className='max-lg:hidden'></td>
        <td className={`animate-pulse w-auto lg:pl-0 ${tdClasses}`}>
          <div className="h-6 w-full rounded-md bg-gray-300 "></div>
        </td>
        <td className={`animate-pulse ${tdClasses}`}>
          <div className="h-6 w-full rounded-md bg-gray-300 "></div>
        </td>
        <td className={`animate-pulse ${tdClasses}`}>
          <div className="h-6 w-full rounded-md bg-gray-300 "></div>
        </td>
        <td className={`animate-pulse ${tdClasses}`}>
          <div className="h-6 w-full rounded-md bg-gray-300 "></div>
        </td>
        <td className={`animate-pulse ${tdClasses}`}>
          <div className="h-6 w-full rounded-md bg-gray-300 "></div>
        </td>
        <td className={`animate-pulse ${tdClasses}`}>
          <div className="h-6 w-full rounded-md bg-gray-300 "></div>
        </td>
        <td className='max-lg:hidden'></td>
      </tr>
    ))
  )
}

export default Skeleton
