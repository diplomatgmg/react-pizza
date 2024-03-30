import React, { type ReactElement } from 'react'
import Header from '../components/Header/Header'
import AuthComponent from '../components/Auth/Auth'

const Auth = (): ReactElement => {
  return (
    <>
      <Header/>
      <div className="container">
        <AuthComponent/>
      </div>
    </>
  )
}

export default Auth
