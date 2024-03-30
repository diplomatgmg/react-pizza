import React, { type ReactElement } from 'react'
import CartSvg from '../svg/Cart'

const Cart = (): ReactElement => {
  return (
    <a className="header-cart" href='/cart'>
      <div className="header-cart__total">
        <b>1240</b> ₽
      </div>
      <span className="header-cart__delimiter"></span>
      <div className="header-cart__info">
        <CartSvg color={'#fff'} size={18}/>
        <p className="header-cart__quantity">3</p>
      </div>
    </a>
  )
}

export default Cart
