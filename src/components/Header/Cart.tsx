import React, { type ReactElement } from 'react'
import CartSvg from '../../assets/svg/cart.svg'

const Cart = (): ReactElement => {
  return (
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
  )
}

export default Cart
