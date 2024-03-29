import React, { type ReactElement } from 'react'
import Category from '../components/Category/Category'
import Search from '../components/Header/Search'
import Sort from '../components/Sort/Sort'
import Main from '../components/Main/Main'
import Pagination from '../components/Pagination/Pagination'

const Home = (): ReactElement => {

  return (
    <>
      <div className='container'>
        <Category/>
        <Search/>
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
