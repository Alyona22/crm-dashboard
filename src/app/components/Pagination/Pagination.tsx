import React from 'react'
import ArrowPrev from '@/app/assets/ArrowPrev'
import ArrowNext from '@/app/assets/ArrowNext'
import { type PaginationTypes } from '@/app/components/Pagination/Pagination.types'

const getPageNumbers = (currentPage: number, totalPages: number): Array<number | string> => {
  const pageNumbers: Array<number | string> = []

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    pageNumbers.push(1)

    if (currentPage <= 3) {
      for (let i = 2; i <= Math.min(4, totalPages - 1); i++) {
        pageNumbers.push(i)
      }
      if (totalPages > 4) {
        pageNumbers.push('...')
        pageNumbers.push(totalPages)
      }
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push('...')
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage > 4) {
        pageNumbers.push('...')
      }
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i)
      }
      if (currentPage < totalPages - 3) {
        pageNumbers.push('...')
      }
      pageNumbers.push(totalPages)
    }
  }

  return pageNumbers
}

export const Pagination: React.FC<PaginationTypes> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages)
  const btnClasses = 'rounded flex justify-center items-center text-xs leading-none py-[6px] px-[9px] bg-gray-6 text-gray-7 border border-gray-5 w-6 h-6 hover:bg-purple hover:border-purple hover:text-white transition-colors duration-300'
  const btnClassesDisabled = currentPage >= totalPages ? 'pointer-events-none' : ''
  return (
    <div className="flex justify-center items-end space-x-3">
      <button
        onClick={() => {
          onPageChange(currentPage - 1)
        }}
        disabled={currentPage <= 1}
        className={btnClasses}
        aria-label='Previous page'
      >
        <ArrowPrev/>
      </button>
      {pageNumbers.map((page, index) =>
        page === '...'
          ? (
            <span key={index}>...</span>
            )
          : (
            <button
              key={index}
              onClick={() => {
                onPageChange(page as number)
              }}
              className={`${btnClasses} ${currentPage === page ? 'bg-purple text-white' : ''}`}
            >
              {page}
            </button>
            )
      )}
      <button
        onClick={() => {
          onPageChange(currentPage + 1)
        }}
        disabled={currentPage >= totalPages}
        className={`${btnClasses} ${btnClassesDisabled}`}
        aria-label='Next page'
      >
        <ArrowNext/>
      </button>
    </div>
  )
}
