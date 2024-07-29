import { type FC } from 'react'

export interface SidebarTypes {
  onMenuOpen: () => void
}

export interface SidebarItem {
  url: string
  title: string
  icon: FC<{ className?: string }>
  showIcon?: boolean
}
