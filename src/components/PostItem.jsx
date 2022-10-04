import React from 'react'

export default function PostItem() {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>1. Javascript </strong>
        <div>JS - programing lang</div>
      </div>
      <div className='post__btns'>
        <button type='button'>Delete</button>
      </div>
    </div>
  )
}
