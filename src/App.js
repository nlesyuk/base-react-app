import { useState, useRef } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'title', body: 'description' },
    { id: 2, title: 'title', body: 'description' },
    { id: 3, title: 'title', body: 'description' }
  ])

  function createPost(newPost) {
    setPosts([...posts, { title: newPost.title, body: newPost.body }])
  }

  function removePost(post) {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title={'list of item'} />
        : <h1>Posts doesn't exist</h1>
      }

    </div>
  );
}

export default App;
