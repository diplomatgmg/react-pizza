import React from 'react'
import './assets/css/style.scss'
import Header from './components/Header'
import Category from './components/Category'
import Sort from './components/Sort/Sort'
import Wrapper from './components/Wrapper'
import PaginationList from './components/Pagination/PaginationList'
import Main from './components/Main/Main'

const App = (): React.ReactElement => {
  return (
    <Wrapper className={'wrapper'}>
      <Header/>

      <Wrapper className={'container'}>
        <Wrapper className={'category'}>
          <Category/>
        </Wrapper>

        <Wrapper className={'sort'}>
          <Sort/>
        </Wrapper>
      </Wrapper>

      <Wrapper className={'container'}>
        <Main />
      </Wrapper>

      <Wrapper className={'container'}>
        <Wrapper className={'pagination'}>
          <PaginationList/>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default App
