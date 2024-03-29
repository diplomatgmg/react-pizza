import React, { type ReactElement } from 'react'
import CartSvg from '../../assets/svg/cart.svg'

const Cart = (): ReactElement => {
  return (
    <a className="header-cart" href='/cart'>
      <div className="header-cart__total">
        <b>1240</b> ₽
      </div>
      <span className="header-cart__delimiter"></span>
      <div className="header-cart__info">
        <img className="header-cart__icon" src={CartSvg} alt=""/>
        <p className="header-cart__quantity">3</p>
      </div>
    </a>
  )
}

export default Cart
