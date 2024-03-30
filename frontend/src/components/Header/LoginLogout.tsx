import React, { type ReactElement } from 'react'

const Auth = (): ReactElement => {
  return (
    <>
      <a className="login-logout btn" href="/login">Войти</a>
      <a className="login-logout btn is-logged-in" href="#/logout">Выйти</a>
    </>
  )
}

export default Auth
