import React from 'react'
import { type customerData } from '@/app/components/Tbody/Tbody.types'

const Thead: React.FC<customerData> = ({ name, company, phone, email, country, status }) => {
  const thClasses = 'border-b border-gray-4 text-gray-4 font-normal text-left capitalize px-2 pb-[13.5px]'

  return (
    <thead className='max-md:hidden'>
    <tr>
      <th
        className={`md:sticky md:left-0 bg-white z-10 md:w-4 md:min-w-4 lg:w-[38px] lg:min-w-[38px] ${thClasses}`}></th>
      <th
        className={`whitespace-nowrap md:sticky md:left-4 xl:left-[38px] bg-white z-10 relative pl-0 ${thClasses}`}>{name}</th>
      <th className={thClasses}>{company}</th>
      <th className={thClasses}>{phone}</th>
      <th className={thClasses}>{email}</th>
      <th className={thClasses}>{country}</th>
      <th className={`text-right pr-[23px] ${thClasses}`}>{status}</th>
      <th className={`md:w-4 md:min-w-4 lg:w-11 lg:min-w-11 ${thClasses}`}></th>
    </tr>
    </thead>
  )
}

export default Thead
