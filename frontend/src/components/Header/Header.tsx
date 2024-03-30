import React, { type FC, type ReactElement } from 'react'
import Logo from './Logo'
import Cart from './Cart'
import Search from './Search'

interface HeaderProps {
  isShowSearch?: boolean
}

const Header: FC<HeaderProps> = ({ isShowSearch = false }): ReactElement => {
  return (
    <div className='container'>
      <header className="header">
        <Logo/>
        {isShowSearch && <Search/>}
        <Cart/>
      </header>
    </div>
  )
}

export default Header
