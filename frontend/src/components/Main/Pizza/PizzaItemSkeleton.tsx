import React, { type ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PizzaItemSkeleton = (): ReactElement => {
  return (
    <li className="pizza__item pizza__skeleton">
      <Skeleton className="pizza__image"/>
      <Skeleton className="pizza__name"/>
      <Skeleton className="pizza__ingredients" />
      <Skeleton className="pizza__options"/>
      <div className="pizza__details">
        <Skeleton className="pizza__price"/>
        <Skeleton className="pizza__cart"/>
      </div>
    </li>
  )
}

export default PizzaItemSkeleton
