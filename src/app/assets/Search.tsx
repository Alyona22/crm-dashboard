import React from 'react'
import { type IconTypes } from '@/app/assets/IconTypes.types'

const SearchIcon = ({ className }: IconTypes) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24.000000"
         height="24.000000" viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip501_92">
          <rect id="search 1" width="24.000000" height="24.000000" fill="white" fillOpacity="0"/>
        </clipPath>
      </defs>
      <rect id="search 1" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0"/>
      <g clipPath="url(#clip501_92)">
        <path id="Vector"
              d="M11 19C6.58 19 3 15.41 3 11C3 6.58 6.58 3 11 3C15.41 3 19 6.58 19 11C19 15.41 15.41 19 11 19Z"
              stroke="currentColor" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round"/>
        <path id="Vector" d="M21 21L16.65 16.65" stroke="currentColor" strokeOpacity="1.000000" strokeWidth="2.000000"
              strokeLinejoin="round" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export default SearchIcon
