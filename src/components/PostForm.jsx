import React, {useState} from 'react';
import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'

function PostForm({create}) {
  const [post, setPost] = useState({title: '', body: ''})

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      ...post
    }
    create(newPost) // callback that push up newPost to the parent component
    setPost({title: '', body: ''})
  }

  return (
      <form>
        {/* управляемый компонент */}
        <MyInput
          type="text"
          placeholder='title'
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
        />
        <MyInput
          type="text"
          placeholder='body'
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
        />
        {/* НЕ управляемый\Не Контролируемый компонент */}
        {/*
          <input type="text" ref={bodyInputRef}/>
          <MyInput
            ref={bodyInputRef}
            type="text"
            placeholder='body'
          />
        */}
        <MyButton type='button' onClick={addNewPost}>submit</MyButton>
      </form>
  );
}

export default PostForm;