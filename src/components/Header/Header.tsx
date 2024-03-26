import React, { type ReactElement } from 'react'
import Search from './Search'
import Logo from './Logo'
import Cart from './Cart'

const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className='container'>
        <Logo/>
        <Search/>
        <Cart/>
      </div>
    </header>
  )
}

export default Header
