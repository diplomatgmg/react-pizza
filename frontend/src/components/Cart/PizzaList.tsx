import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'

const PizzaList = (): ReactElement => {

  return (
    <div className="cart__items">
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
    </div>
  )
}

export default PizzaList
