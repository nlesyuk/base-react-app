import  React from 'react'
import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default function PostList({posts, title, remove}) {
  if (!posts.length) {
    return  (<h1>Posts don't exist</h1>)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{ title }</h1>
      <TransitionGroup className="todo-list">
        {posts.map((post, index) => {
           return <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
              >
              <PostItem remove={remove} number={index+1} post={post} key={post.id} />
             </CSSTransition>
          })
        }
      </TransitionGroup>
    </div>
  )
}
