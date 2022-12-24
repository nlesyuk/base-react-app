import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/useContext'

export default function Login() {
  const navigate = useNavigate()
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = e => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    navigate('/posts')
  }

  return (
    <form>
      <h1>Login page</h1>
      <MyInput type="text" placeholder='login'/>
      <MyInput type="password" placeholder='password'/>
      <MyButton onClick={login}>submit</MyButton>
    </form>
  )
}
