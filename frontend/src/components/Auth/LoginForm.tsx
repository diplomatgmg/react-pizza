import React, { type ReactElement } from 'react'
import Header from '../Header/Header'

const LoginForm = (): ReactElement => {
  return (
    <>
      <Header/>
      <div className="container">

        <div className="auth">
            <h2>Вход</h2>
            <form>
              <input type="text" placeholder="Логин"/>
              <input type="password" placeholder="Пароль"/>
              <div className="auth__container">
                <button className="btn" type="submit">Войти</button>
                <a href='/register'>Нет аккаунта?</a>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default LoginForm
