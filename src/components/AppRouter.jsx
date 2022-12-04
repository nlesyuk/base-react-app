import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
