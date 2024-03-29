import React, { type ReactElement } from 'react'
import Logo from './Logo'
import Cart from './Cart'

const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className='container'>
        <Logo/>
        <Cart/>
      </div>
    </header>
  )
}

export default Header
