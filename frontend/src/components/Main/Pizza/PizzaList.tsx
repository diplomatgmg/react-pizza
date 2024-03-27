import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'
import { useGetPizzasQuery } from '../../../redux/api'

const PizzaList = (): ReactElement => {
  const {
    data = [],
    isLoading
  } = useGetPizzasQuery({})

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ul className="pizza__list">
      {
        data.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza}/>)
      }
    </ul>
  )
}

export default PizzaList
