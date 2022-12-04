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
import { getPageCount } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';

function App() {
  const options = [
    { value: 'title', name: 'Title' },
    { value: 'body', name: 'Body' },
  ]

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = +response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
    console.log('totalPage', totalCount, totalPage, page)
  })

  function createPost(newPost) {
    setPosts([...posts, { title: newPost.title, body: newPost.body }])
    setVisible(false)
  }
  function removePost(post) {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  // useEffect(() => {
  //   fetchPosts()
  // }, [page])
  function onChangePage(page) {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <MyButton onClick={() => fetchPosts(limit, page)}>fetch</MyButton>
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

      <Pagination
        totalPages={totalPage}
        onChangePage={onChangePage}
        currentPage={page}
      />

    </div >
  );
}

export default App;
