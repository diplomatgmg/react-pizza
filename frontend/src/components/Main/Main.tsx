import React, { type ReactElement } from 'react'
import PizzaList from './Pizza/PizzaList'

const Main = (): ReactElement => {
  return (
    <main className="main">
      <div className='pizza'>
        <PizzaList/>
      </div>
    </main>
  )
}

export default Main
