import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

export default function Post() {
  const { id } = useParams()

  const [post, setPost] = useState('')
  const [fetchPost, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPost(id)
  }, [id])

  return (
    <div>
      { isLoading
        ? <Loader/>
        : post
          ? <div>
              <p>ID:{post.id}, UserId:{post.userId}</p>
              <h1>{ post.title }</h1>
              <p>{post.body}</p>
            </div>
          : <h1>Post with id:{id}</h1>
      }
      {error && <h2>{error}</h2>}
    </div>
  )
}
