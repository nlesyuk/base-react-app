import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
