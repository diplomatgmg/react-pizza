import React, { type ReactElement } from 'react'
import Logo from './Logo'
import Cart from './Cart'
import Search from './Search'

const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className='container'>
        <Logo/>
        <Search />
        <Cart/>
      </div>
    </header>
  )
}

export default Header
