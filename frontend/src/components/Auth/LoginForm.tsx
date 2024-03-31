import React, { type ReactElement } from 'react'
import Header from '../Header/Header'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../redux/api'
import { setLoginSuccess } from '../../redux/authSlice'
import { useAppDispatch } from '../../redux/hooks'

interface FormData {
  email: string
  password: string
}

const LoginForm = (): ReactElement => {
  const { register, handleSubmit } = useForm<FormData>()
  const [loginMutation, { isError }] = useLoginMutation()
  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginMutation(data).unwrap()
      dispatch(setLoginSuccess(response))

    } catch (error) {
      console.error('Ошибка входа:', error)
    }
  })

  return (
    <>
      <Header/>
      <div className="container">
        <div className="auth">
          <h2>Вход</h2>
          <form onSubmit={onSubmit}>
            <input type="email" placeholder="Почта" {...register('email')}/>
            <input type="password" placeholder="Пароль" {...register('password')}/>
            {isError && <p className="auth__error">Проверьте корректность данных!</p>}
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
