import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../router'

export default function AppRouter() {
  return (
    <Routes>
      {routes.map(route =>
        <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />
      )}
    </Routes>
  )
}
