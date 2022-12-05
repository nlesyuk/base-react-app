import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../context/useContext'
import { privateRoutes, publicRoutes } from '../router'

export default function AppRouter() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
// 2:41
  return (
    isAuth
    ?
      <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />
        )}
      </Routes>
    :
      <Routes>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />
        )}
      </Routes>
  )
}
