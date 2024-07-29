import React from 'react'
import { type InputTypes } from '@/app/components/Input/Input.types'

export const Input: React.FC<InputTypes> = ({ value, onChange, className, placeholder }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}
