import React from 'react'
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom'

export default function PostItem({post, number, remove}) {
  let navigate = useNavigate()
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{post.id}. {post.title}</strong>
        <div>{ post.body }</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}
