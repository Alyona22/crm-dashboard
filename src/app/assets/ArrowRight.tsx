import React from 'react'
import { type IconTypes } from '@/app/assets/IconTypes.types'

const ArrowRight = ({ className }: IconTypes) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16.000000"
         height="16.000000" viewBox="0 0 16 16" fill="none">
      <defs>
        <clipPath id="clip501_157">
          <rect id="chevron-right 2" width="16.000000" height="16.000000" fill="white" fillOpacity="0"/>
        </clipPath>
      </defs>
      <rect id="chevron-right 2" width="16.000000" height="16.000000" fill="currentColor" fillOpacity="0"/>
      <g clipPath="url(#clip501_157)">
        <path id="Vector" d="M6 12L10 8L6 4" stroke="currentColor" strokeOpacity="1.000000" strokeWidth="2.000000"
              strokeLinejoin="round" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export default ArrowRight
