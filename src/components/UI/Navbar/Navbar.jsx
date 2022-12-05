import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/useContext'
import MyButton from '../button/MyButton'

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = e => {
    e.preventDefault()
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
      <nav>
        <MyButton onClick={logout}>logout</MyButton>
        <Link to="/about">about</Link>
        <Link to="/posts">posts</Link>
      </nav>
  )
}
