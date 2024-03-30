import React from 'react'
import './assets/css/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Black.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import LoginForm from './components/Auth/LoginForm'
import RegisterForm from './components/Auth/RegisterForm'

const App = (): React.ReactElement => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
