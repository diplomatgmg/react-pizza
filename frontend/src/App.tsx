import React from 'react'
import './assets/css/style.scss'
import Header from './components/Header/Header'
import Category from './components/Category/Category'
import Sort from './components/Sort/Sort'
import Main from './components/Main/Main'
import Pagination from './components/Pagination/Pagination'

const App = (): React.ReactElement => {
  return (
    <div className='wrapper'>
      <Header/>

      <div className='container'>
        <Category/>
        <Sort/>
      </div>

      <div className='container'>
        <Main/>
      </div>

      <div className='container'>
        <Pagination />
      </div>
    </div>
  )
}

export default App
