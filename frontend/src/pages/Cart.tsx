import React, { type ReactElement } from 'react'
import CartComponent from '../components/Cart/Cart'
import Header from '../components/Header/Header'

const Cart = (): ReactElement => {
  return (
    <>
      <Header/>
      <div className="container">
        <CartComponent/>
      </div>
    </>

  )
}

export default Cart
