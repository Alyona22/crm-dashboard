'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Thead from '@/app/components/Thead/Thead'
import Tbody from '@/app/components/Tbody/Tbody'
import Search from '@/app/components/Search/Search'
import { Pagination } from '@/app/components/Pagination/Pagination'
import { customerData } from '@/app/components/Tbody/customer.mock'
import { theadData } from '@/app/components/Thead/thead.mock'
import { useDebouncedCallback } from 'use-debounce'

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8
  const [isLoading, setIsLoading] = useState(false)

  const filteredData = useMemo(() => {
    return customerData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone.includes(searchTerm) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const totalPages = Math.ceil(filteredData.length / pageSize)
  const displayedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const debouncedSetIsLoading = useDebouncedCallback(() => {
    setIsLoading(false)
  }, 1000)

  useEffect(() => {
    setIsLoading(true)
    debouncedSetIsLoading()
    return () => { debouncedSetIsLoading.cancel() }
  }, [searchTerm, currentPage, debouncedSetIsLoading])

  return (
        <>
            <div className='bg-white rounded-4xl shadow-sideBarShadow'>
                <div className='md:flex md:items-end md:justify-between pt-[30px] px-6 lg:pl-[38px] lg:pr-[53px] md:pb-[39px]'>
                    <div className='mb-5 md:mb-0'>
                        <h3 className='font-semibold text-[22px] leading-[33px] mb-[7px] capitalize'>All customers</h3>
                        <span className='text-green-1 capitalize'>Active members</span>
                    </div>
                    <Search onSearch={setSearchTerm}/>
                </div>
                <div className='md:overflow-x-auto'>
                    <table className='w-full'>
                        <Thead {...theadData} />
                        <Tbody customerData={displayedData} isLoading={isLoading}/>
                    </table>
                </div>
                {filteredData.length !== 0 && (<div className='lg:flex max-lg:text-center justify-between max-lg:flex-wrap max-lg:justify-center px-6 pt-8 lg:pl-[38px] lg:pr-10 pb-10'>
                    <p
                        className='text-gray-4 mb-4 lg:mb-0'>Showing data 1 to {displayedData.length} of {customerData.length} entries</p>
                    {filteredData.length > pageSize && (<Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    )}
                </div>
                )}
            </div>
        </>
  )
}

export default Customers
