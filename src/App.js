import { useState, useMemo, useEffect } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import { usePosts } from './hooks/usePosts'
import { useFetching } from './hooks/useFetching'
import PostService from './API/PostService'

function App() {
  const options = [
    { value: 'title', name: 'Title' },
    { value: 'body', name: 'Body' },
  ]

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  function createPost(newPost) {
    setPosts([...posts, { title: newPost.title, body: newPost.body }])
    setVisible(false)
  }
  function removePost(post) {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className="App">
      <MyButton onClick={() => fetchPosts()}> fetch</MyButton>
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
      {postsError && <h1>{postsError}</h1>}
      {isPostsLoading
        ? <Loader centered={true} />
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'list of item'} />
      }

    </div >
  );
}

export default App;
