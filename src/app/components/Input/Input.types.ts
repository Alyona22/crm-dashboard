import type React from 'react'

export interface InputTypes {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  placeholder?: string
  type: string
}
