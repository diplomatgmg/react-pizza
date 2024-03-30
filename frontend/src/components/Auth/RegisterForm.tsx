import React, { type ReactElement } from 'react'
import Header from '../Header/Header'

const RegisterForm = (): ReactElement => {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="auth">
          <h2>Регистрация</h2>
          <form>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Логин"/>
            <input type="password" placeholder="Пароль"/>
            <input type="password" placeholder="Повторите пароль"/>
            <div className="auth__container">
              <button className="btn" type="submit">Зарегистрироваться</button>
              <a href="/login">Есть аккаунт?</a>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default RegisterForm
