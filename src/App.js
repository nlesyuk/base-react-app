import { useState, useMemo } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts'

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
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


  function createPost(newPost) {
    setPosts([...posts, { title: newPost.title, body: newPost.body }])
    setVisible(false)
  }
  function removePost(post) {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className="App">
      <MyButton onClick={() => setVisible(!visible)}>
        Create user
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '16px 0' }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        options={options}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'list of item'} />

    </div >
  );
}

export default App;
