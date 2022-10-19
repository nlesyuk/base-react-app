import { useState, useRef } from 'react'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

export default function PostPage() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'title', body: 'description' },
    { id: 2, title: 'title', body: 'description' },
    { id: 3, title: 'title', body: 'description' }
  ])

  const [title, setTitle] = useState('title')
  const [body, setBody] = useState('body')

  // hook useRef
  // const inputRef = useRef()
  // <input ref={inputRef} />
  // console.log(inputRef.current.value)

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title, body)
    const newPost = { id: Date.now(), title, body }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }


  return (
    <div className="App">
      <form>
        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
        <MyInput value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Body" />
        <MyButton onClick={addNewPost}>create</MyButton>
      </form>
      <PostList posts={posts} title={'list of item'} />
    </div>
  );
}


