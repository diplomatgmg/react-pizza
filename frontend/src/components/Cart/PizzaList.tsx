import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'
import { useGetCartQuery } from '../../redux/api'
import { useAppSelector } from '../../redux/hooks'

const PizzaList = (): ReactElement => {
  const { isAuthenticated } = useAppSelector(state => state.auth)

  const {
    data
  } = useGetCartQuery({})

  if (!isAuthenticated) {
    return <h1 style={{ textAlign: 'center', marginTop: '128px' }}>Необходимо авторизоваться!</h1>
  }

  return (
    <div className="cart__items">
      {data?.items.map(cartItem => <PizzaItem key={cartItem.id} pizza={cartItem.pizza} quantity={cartItem.quantity}/>)}
    </div>
  )
}

export default PizzaList
