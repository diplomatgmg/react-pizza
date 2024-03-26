import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'

const PizzaList = (): ReactElement => {
  return (
    <ul className="pizza__list">
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
      <PizzaItem />
    </ul>
  )
}

export default PizzaList
