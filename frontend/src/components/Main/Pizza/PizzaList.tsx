import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'
import { useGetPizzasQuery } from '../../../redux/api'
import PizzaItemSkeleton from './PizzaItemSkeleton'

const PizzaList = (): ReactElement => {
  const {
    data = [],
    isLoading
  } = useGetPizzasQuery({})

  return (
    <ul className="pizza__list">
      {isLoading && [...Array(6)].map((_, index) => <PizzaItemSkeleton key={index}/>)}
      {!isLoading && data.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza}/>)}
    </ul>
  )
}

export default PizzaList
