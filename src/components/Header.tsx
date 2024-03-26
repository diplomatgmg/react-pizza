import React, { type ReactElement } from 'react'
import PizzaLogoSvg from '../assets/svg/pizza-logo.svg'
import SearchSvg from '../assets/svg/search.svg'
import CartSvg from '../assets/svg/cart.svg'

const Header = (): ReactElement => {

  return (
   <header className="header">
     <div className="container">
       <div className="logo">
         <img className="logo__image" src={PizzaLogoSvg} alt=""/>
         <div className="logo__name">
           <p className="logo__title">React Pizza</p>
           <p className="logo__description">самая вкусная пицца во вселенной</p>
         </div>
       </div>
       <div className="search">
         <label className="search__label" htmlFor="search"></label>
         <img className="search__icon" src={SearchSvg} alt=""/>
         <input className="search__input" id="search" type="text" placeholder="Поиск пиццы..."/>
       </div>
       <div className="cart">
         <div className="cart__total">
           <b>1240</b> ₽
         </div>
         <span className="cart__delimiter"></span>
         <div className="cart__info">
           <img className="cart__icon" src={CartSvg} alt=""/>
           <p className="cart__quantity">3</p>
         </div>
       </div>
     </div>
   </header>
  )
}

export default Header
