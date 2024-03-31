import React, { type ReactElement } from 'react'
import Header from '../Header/Header'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../redux/api'
import { useNavigate } from 'react-router-dom'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

const RegisterForm = (): ReactElement => {
  const { register, handleSubmit } = useForm<FormData>()
  const [registerMutation, { isError }] = useRegisterMutation()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerMutation(data).unwrap()
      navigate('/login', { state: { isRegistered: true } })
    } catch (error: any) {
      console.error('Ошибка входа.', error.data)
    }
  })

  return (
    <>
      <Header/>
      <div className="container">
        <div className="auth">
          <h2>Регистрация</h2>
          <form onSubmit={onSubmit}>
            <input type="email" placeholder="Email" {...register('email')}/>
            <input type="password" placeholder="Пароль" {...register('password')}/>
            <input type="password" placeholder="Повторите пароль" {...register('confirm_password')}/>
            {isError && <p className="auth__error">Пароли не совпадают!!</p>}
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
