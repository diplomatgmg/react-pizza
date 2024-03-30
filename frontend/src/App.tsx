import React from 'react'
import './assets/css/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Auth from './pages/Auth'

import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Black.ttf'
import './assets/fonts/Nunito-Bold.ttf'

const App = (): React.ReactElement => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
