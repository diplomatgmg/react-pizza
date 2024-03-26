import React, { type ReactElement } from 'react'
import PizzaList from './Pizza/PizzaList'
import Error from './Error'

const Main = (): ReactElement => {
  return (
    <main className="main">
      <p className="main__title">Все пиццы</p>
      <Error />
      <div className='pizza'>
        <PizzaList/>
      </div>
    </main>
  )
}

export default Main
