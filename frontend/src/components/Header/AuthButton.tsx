import React, { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useLogoutMutation } from '../../redux/api'
import { setLogoutSuccess } from '../../redux/authSlice'

const Auth = (): ReactElement => {
  const {
    email,
    tokens,
    isAuthenticated
  } = useAppSelector(state => state.auth)

  const [logoutMutation] = useLogoutMutation()
  const dispatch = useAppDispatch()

  const handleLogout = async (): Promise<void> => {
    try {
      await logoutMutation({ refresh: tokens?.refresh })
      dispatch(setLogoutSuccess())

    } catch (error) {
      console.error('Ошибка при выполнении запроса на выход из учетной записи:', error)
    }
  }

  if (isAuthenticated) {
    return (
      <>
        <span style={{ marginLeft: '24px' }}>{email}</span>
        <a className="login-logout btn is-logged-in" onClick={handleLogout}>
          Выйти
        </a>
      </>
    )
  }

  return <a className="login-logout btn" href="/login">Войти</a>
}

export default Auth
