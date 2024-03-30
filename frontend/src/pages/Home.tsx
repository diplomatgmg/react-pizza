import React, { type ReactElement } from 'react'
import Category from '../components/Category/Category'
import Sort from '../components/Sort/Sort'
import Main from '../components/Main/Main'
import Pagination from '../components/Pagination/Pagination'
import Header from '../components/Header/Header'

const Home = (): ReactElement => {

  return (
    <>
      <Header isShowSearch/>
      <div className='container'>
        <Category/>
        <Sort/>
      </div>

      <div className='container'>
        <Main/>
      </div>

      <div className='container'>
        <Pagination/>
      </div>
    </>
  )
}

export default Home
