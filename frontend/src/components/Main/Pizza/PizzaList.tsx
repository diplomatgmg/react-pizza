import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'
import { useGetPizzasQuery } from '../../../redux/api'
import PizzaItemSkeleton from './PizzaItemSkeleton'
import { useSearchParams } from '../../../redux/hooks'

const PizzaList = (): ReactElement => {
  const {
    data,
    isLoading
  } = useGetPizzasQuery(useSearchParams())

  if (isLoading || data === undefined) {
    return (
      <ul className="pizza__list">
        {isLoading && [...Array(4)].map((_, index) => <PizzaItemSkeleton key={index}/>)}
      </ul>
    )
  }

  return (
    <ul className="pizza__list">
       { data.results.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza}/>)}
    </ul>
  )
}

export default PizzaList
