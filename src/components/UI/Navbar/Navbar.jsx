import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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

  const navLinkClasses = ({ isActive }) => [classes['nav__link'], isActive ? classes['nav__link-active'] : undefined].filter(Boolean).join(' ')

  return (
      <nav className={classes.nav}>
        <NavLink to="/about" className={navLinkClasses}>about</NavLink>
        {isAuth && <NavLink to="/posts" className={navLinkClasses}>posts</NavLink>}
        <div className={classes.button}>
        {isAuth
          ? <MyButton onClick={logout}>logout</MyButton>
          : <NavLink to="/login" className={navLinkClasses}>login</NavLink>
        }
        </div>
      </nav>
  )
}
