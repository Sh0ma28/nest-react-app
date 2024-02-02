import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { login, register } from '../features/user/user.actions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
  })
  const [isLoginForm, setIsLoginForm] = useState(true)

  function handleLoginFormChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'username')
      setLoginForm({ ...loginForm, username: e.target.value })
    if (e.target.name === 'password')
      setLoginForm({ ...loginForm, password: e.target.value })
  }

  function handleRegisterFormChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'username')
      setRegisterForm({ ...registerForm, username: e.target.value })
    if (e.target.name === 'password')
      setRegisterForm({ ...registerForm, password: e.target.value })
  }

  async function loginFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = await dispatch(login(loginForm))
    navigate('/')
    console.log(data)
  }

  async function registerFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = await dispatch(register(registerForm))
    console.log(data)
  }
  return (
    <div className="Login">
      <button onClick={() => setIsLoginForm(!isLoginForm)}>
        {isLoginForm ? 'Зарегистрироваться' : 'Войти'}
      </button>
      {isLoginForm ? (
        <form onSubmit={loginFormSubmit}>
          <label>Логин</label>
          <input
            placeholder="Имя пользователя"
            value={loginForm.username}
            name="username"
            onChange={handleLoginFormChange}
          ></input>
          <input
            placeholder="Пароль"
            value={loginForm.password}
            name="password"
            onChange={handleLoginFormChange}
          ></input>
          <button type="submit">Войти</button>
        </form>
      ) : (
        <form onSubmit={registerFormSubmit}>
          <label>Регистрация</label>
          <input
            placeholder="Имя пользователя"
            value={registerForm.username}
            onChange={handleRegisterFormChange}
            name="username"
          ></input>
          <input
            placeholder="Пароль"
            value={registerForm.password}
            onChange={handleRegisterFormChange}
            name="password"
          ></input>
          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  )
}

export default Login
