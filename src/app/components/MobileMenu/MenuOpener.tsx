import { type MobileMenuTypes } from '@/app/components/MobileMenu/MobileMenu.types'
import React from 'react'

const MenuOpener: React.FC<MobileMenuTypes> = ({ menuIsOpen, onMenuOpen }) => {
  const navOpenerClasses = `relative block z-10 lg:hidden w-10 h-8 rounded-lg 
        after:content[""] after:h-0.5 after:left-2 after:right-2 
        after:bg-black after:absolute after:top-3/4 after:transition-all 
        after:duration-300 after:ease-in-out before:content[""] 
        before:h-0.5 before:left-2 before:right-2 before:bg-black 
        before:absolute before:top-1/4 before:transition-all 
        before:duration-300 before:ease-in-out ${menuIsOpen
    ? 'after:bg-white after:!top-1/2 after:rotate-45 before:-rotate-45 before:bg-white before:!top-1/2'
    : ''}`

  return (
    <button onClick={onMenuOpen} className={navOpenerClasses} aria-label='Menu opener'>
            <span
              className={`${menuIsOpen ? 'fixed left-0 right-0 bottom-0 top-0 bg-black opacity-75 -z-10' : ''}`}
            />
      <span
        className={`h-0.5 bg-black absolute left-2 right-2 top-1/2 transition-all duration-300 ease-in-out ${menuIsOpen ? 'opacity-0' : ''}`}></span>
    </button>
  )
}

export default MenuOpener
