import React, { type ReactElement } from 'react'
import PizzaLogoSvg from '../../assets/svg/pizza-logo.svg'

const Logo = (): ReactElement => {
  return (
   <a className="logo" href="/">
       <img className="logo__image" src={PizzaLogoSvg} alt=""/>
       <div className="logo__name">
         <p className="logo__title">React Pizza</p>
         <p className="logo__description">самая вкусная пицца во вселенной</p>
       </div>
   </a>
  )
}

export default Logo
