import React from 'react'
import Image from 'next/image'
import { type UserTypes } from '@/app/components/User/User.types'

const User: React.FC<UserTypes> = ({ photo, name, position }) => {
  return (
    <div className='flex items-center gap-3 mb-20 lg:mb-12 mt-auto group'>
      <Image
        className='transition-all duration-300 group-hover:scale-110'
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
      />
      <div>
        <p className='font-medium'>{name}</p>
        <p className='text-xs text-gray-3 capitalize'>{position}</p>
      </div>
    </div>
  )
}

export default User
