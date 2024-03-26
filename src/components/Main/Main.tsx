import React, { type ReactElement } from 'react'
import Wrapper from '../Wrapper'
import PizzaList from '../Pizza/PizzaList'
import Error from './Error'

const Main = (): ReactElement => {
  return (
    <main className="main">
      <p className="main__title">Все пиццы</p>
      <Error />
      <Wrapper className={'pizza'}>
        <PizzaList/>
      </Wrapper>

    </main>
  )
}

export default Main
