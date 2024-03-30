import React, { type ReactElement } from 'react'
import PizzaLogoSvg from '../svg/Pizza'

const Logo = (): ReactElement => {
  return (
   <a className="logo" href="/">
       <PizzaLogoSvg size={64}/>
       <div className="logo__name">
         <p className="logo__title">React Pizza</p>
         <p className="logo__description">самая вкусная пицца во вселенной</p>
       </div>
   </a>
  )
}

export default Logo
