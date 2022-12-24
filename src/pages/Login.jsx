import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/useContext'

export default function Login() {
  const navigate = useNavigate()
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('`1234567890`')

  const login = e => {
    console.table(username, password)
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    navigate('/posts')
  }

  return (
    <form>
      <h1>Login page</h1>
      <MyInput
        type="text"
        placeholder='login'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <MyInput
        type="password"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MyButton onClick={login}>submit</MyButton>
    </form>
  )
}
