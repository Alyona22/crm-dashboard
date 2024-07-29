import React from 'react'
import Status from '../Status/Status'
import { theadData } from '@/app/components/Thead/thead.mock'
import Skeleton from '@/app/components/Skeleton/Skeleton'
import { type TbodyTypes } from '@/app/components/Tbody/Tbody.types'
import Link from 'next/link'

const Tbody: React.FC<TbodyTypes> = ({ customerData, isLoading }) => {
  const tdClasses = 'font-medium border-b border-b-gray-5 h-[69px] p-2 vertical-center max-md:flex max-md:items-center max-md:justify-between max-md:before:inline-block max-md:before:content-[attr(data-label)]'

  return (
    <tbody>

    {isLoading
      ? (
        <Skeleton tdClasses={tdClasses}/>
        )
      : customerData.length === 0
        ? (
          <tr>
            <td></td>
            <td colSpan={6} className="text-lg text-center py-6">
              No search results
            </td>
            <td></td>
          </tr>
          )
        : (
            customerData.map((item, index) => (
            <tr className='max-md:border-b-8 border-b-gray-5 rounded-bl' key={index}>
              <td className='max-md:hidden md:sticky md:left-0 bg-white z-10'></td>
              <td data-label={theadData.name}
                  className={`whitespace-nowrap md:sticky md:left-4 xl:left-[38px] bg-white z-10 md:pl-0 ${tdClasses}`}>{item.name}</td>
              <td data-label={theadData.company} className={tdClasses}>{item.company}</td>
              <td data-label={theadData.phone} className={`whitespace-nowrap ${tdClasses}`}>
                <Link href={`tel:${item.phone}`}>{item.phone}</Link>
              </td>
              <td data-label={theadData.email} className={`whitespace-nowrap ${tdClasses}`}>
                <Link href={`mailto:${item.email}`}>{item.email}</Link>
              </td>
              <td data-label={theadData.country} className={tdClasses}>{item.country}</td>
              <td data-label={theadData.status} className={`md:text-right md:pr-0 ${tdClasses}`}><Status
                status={item.status}/></td>
              <td className='max-md:hidden'></td>
            </tr>
            ))
          )}
    </tbody>
  )
}

export default Tbody
