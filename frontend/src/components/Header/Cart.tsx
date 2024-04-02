import React, { type ReactElement } from 'react'
import CartSvg from '../svg/Cart'
import { useGetCartQuery } from '../../redux/api'

const Cart = (): ReactElement => {
  const {
    data,
    isLoading,
    isError
  } = useGetCartQuery({})

  if (isLoading || isError || data?.items.length === 0 || data === undefined) {
    return (
      <a className="header-cart btn" href='/cart'>
        <div className="header-cart__total">
          <b>0</b> ₽
        </div>
        <span className="header-cart__delimiter"></span>
        <div className="header-cart__info">
          <CartSvg color={'#fff'} size={18}/>
          <p className="header-cart__quantity">0</p>
        </div>
      </a>
    )
  }

  const cartSum = data.items.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.pizza.price, 0)

  return (
    <a className="header-cart btn" href='/cart'>
      <div className="header-cart__total">
        <b>{cartSum}</b> ₽
      </div>
      <span className="header-cart__delimiter"></span>
      <div className="header-cart__info">
        <CartSvg color={'#fff'} size={18}/>
        <p className="header-cart__quantity">{data.items.length}</p>
      </div>
    </a>
  )
}

export default Cart
