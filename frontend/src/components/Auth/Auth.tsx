import React, { type ReactElement } from 'react'

const Auth = (): ReactElement => {

  return (
    <div className="auth">
      <div className="auth__login">
        <h2>Вход</h2>
        <form>
          <input type="text" placeholder="Логин"/>
          <input type="password" placeholder="Пароль"/>
          <button className="btn" type="submit">Войти</button>
        </form>
      </div>
      <div className="auth__register">
        <h2>Регистрация</h2>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Логин"/>
          <input type="password" placeholder="Пароль"/>
          <input type="password" placeholder="Повторите пароль"/>
          <button className="btn" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  )
}

export default Auth
