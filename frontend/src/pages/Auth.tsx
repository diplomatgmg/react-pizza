import React, { type ReactElement } from 'react'
import Header from '../components/Header/Header'
import LoginForm from '../components/Auth/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm'

const Auth = (): ReactElement => {
  return (
    <>
      <Header/>
      <div className="container">
        <LoginForm />
        <RegisterForm />
      </div>
    </>
  )
}

export default Auth
