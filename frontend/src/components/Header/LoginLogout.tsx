import React, { type ReactElement } from 'react'

const Auth = (): ReactElement => {
  return (
    <>
      <a className="login-logout btn" href="/auth">Войти</a>
      <a className="login-logout btn is-logged-in" href="/auth">Выйти</a>
    </>
  )
}

export default Auth
