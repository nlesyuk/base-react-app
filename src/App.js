import { useState, useMemo } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/MySelect/MySelect';

function App() {
  const options = [
    { value: 'title', name: 'Title' },
    { value: 'body', name: 'Body' },
  ]

  const [posts, setPosts] = useState([
    { id: 1, title: 'title', body: 'description' },
    { id: 2, title: 'asd', body: 'rrr' },
    { id: 3, title: 'dfdfs', body: 'hhh' }
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function createPost(newPost) {
    setPosts([...posts, { title: newPost.title, body: newPost.body }])
  }
  function removePost(post) {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  function sortPost(sort) {
    setSelectedSort(sort)
  }

  const sortedPosts = useMemo(() => {
    console.log('sortfn')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MyInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search" />
      <MySelect value={selectedSort} options={options} onChange={sortPost} defaultValue='Sort by' />
      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'list of item'} />
        : <h1>Posts doesn't exist</h1>
      }

    </div>
  );
}

export default App;
