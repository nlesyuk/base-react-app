import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/useContext'
import MyButton from '../button/MyButton'

import classes from './Navbar.module.css'

export default function Navbar() {
  const navigate = useNavigate()
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = e => {
    e.preventDefault()
    setIsAuth(false)
    localStorage.removeItem('auth')
    navigate('/login')
  }

  return (
      <nav className={classes.nav}>
        <Link to="/about">about</Link>
        <Link to="/posts">posts</Link>
        <div className={classes.button}>
        {isAuth
          ? <MyButton onClick={logout}>logout</MyButton>
          : <Link to="/login">login</Link>
        }
        </div>
      </nav>
  )
}
