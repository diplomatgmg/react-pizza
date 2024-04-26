import React, { type ReactElement } from 'react'
import PizzaItem from './PizzaItem'
import { useGetPizzasQuery } from '../../../redux/api'
import PizzaItemSkeleton from './PizzaItemSkeleton'
import { useSearchParams } from '../../../redux/hooks'
import InfoMessage from '../InfoMessage'

const PizzaList = (): ReactElement => {
  const {
    data,
    isLoading,
    isError
  } = useGetPizzasQuery(useSearchParams())

  if (isError) {
    return <InfoMessage
      title={'Произошла ошибка 😕'}
      description={'Нет соединения с бекендом.'}/>
  }



  if (isLoading || data === undefined) {
    return (
      <ul className="pizza__list">
        {isLoading && [...Array(4)].map((_, index) => <PizzaItemSkeleton key={index}/>)}
      </ul>
    )
  }

  if (data.results.length === 0) {
    return <InfoMessage
      title={'Пиццы не найдены 😕'}
      description={'Попробуйте поискать другие.'}/>
  }

  return (
    <ul className="pizza__list">
      {data.results.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza}/>)}
    </ul>
  )
}

export default PizzaList
