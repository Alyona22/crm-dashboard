'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/app/components/Logo/Logo'
import { sidebarData } from '@/app/components/Sidebar/sidebar.mock'
import { userData } from '@/app/components/User/user.mock'
import ArrowRight from '@/app/assets/ArrowRight'
import User from '@/app/components/User/User'
import MobileMenu from '@/app/components/MobileMenu/MobileMenu'
import React, { useEffect, useState } from 'react'
import { type SidebarItem } from '@/app/components/Sidebar/Sidebar.types'

const Sidebar = () => {
  const pathname = usePathname()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add('fixed', 'overflow-hidden', 'w-full')
    } else {
      document.body.classList.remove('fixed', 'overflow-hidden', 'w-full')
    }
  }, [menuIsOpen])

  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <>
      <MobileMenu menuIsOpen={menuIsOpen} onMenuOpen={onMenuOpen}/>
      <header
        className={`bg-white px-6 py-9 flex flex-col transition-transform duration-300 shadow-sideBarShadow 
    max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:h-lvh max-lg:overflow-y-auto
    w-full max-w-[306px] ${menuIsOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}`}
      >
        <Logo/>
        <nav>
          <ul className='list-none max-lg:mt-8'>
            {sidebarData.map((item: SidebarItem, index: number) => {
              const isActive = pathname === item.url

              return (
                <li key={index} className='mb-[18px]'>
                  <Link href={item.url}
                        title={item.title}
                        className={`text-gray-2 font-medium max-h-[46px] flex items-center gap-4 p-3 rounded-lg transition-colors duration-300 ${
                          isActive ? 'bg-purple text-white' : 'hover:bg-purple hover:text-white'
                        }`}
                  >
                    <item.icon className='mr-2'/>
                    {item.title}
                    {(item.showIcon === true) && <ArrowRight className='ml-auto'/>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <User {...userData} />
      </header>
    </>
  )
}

export default Sidebar
