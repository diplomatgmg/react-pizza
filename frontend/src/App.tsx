import React from 'react'
import './assets/css/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = (): React.ReactElement => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
