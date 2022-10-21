import { useState } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/MySelect/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'title', body: 'description' },
    { id: 2, title: 'asd', body: 'rrr' },
    { id: 3, title: 'dfdfs', body: 'hhh' }
  ])

  function createPost(newPost) {
    setPosts([...posts, { title: newPost.title, body: newPost.body }])
  }

  function removePost(post) {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  const [selectedSort, setSelectedSort] = useState('')
  const options = [
    { value: 'title', name: 'Title' },
    { value: 'body', name: 'Body' },
  ]
  function sortPost(sort) {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect value={selectedSort} options={options} onChange={sortPost} defaultValue='Sort by' />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title={'list of item'} />
        : <h1>Posts doesn't exist</h1>
      }

    </div>
  );
}

export default App;
