import MenuOpener from '@/app/components/MobileMenu/MenuOpener'
import Logo from '@/app/components/Logo/Logo'
import React from 'react'
import type { MobileMenuTypes } from '@/app/components/MobileMenu/MobileMenu.types'

const MobileMenu: React.FC<MobileMenuTypes> = ({ onMenuOpen, menuIsOpen }) => {
  return (
    <div className='flex justify-between items-center p-6 lg:hidden'>
      <Logo/>
      <MenuOpener menuIsOpen={menuIsOpen} onMenuOpen={onMenuOpen}/>
    </div>
  )
}

export default MobileMenu
