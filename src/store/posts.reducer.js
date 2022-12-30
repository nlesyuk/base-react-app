const defaultState = {
  posts: []
}

export const increment = (payload) => ({ type: 'ADD_POST', payload })
export const decrement = () => ({ type: 'REMOVE' })

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, posts: [...state.posts,] }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}


export default postsReducer
