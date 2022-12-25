const defaultState = {
  posts: []
}

export const increment = () => ({ type: 'INCREMENT' })
export const decrement = () => ({ type: 'DECREMENT' })
export const reset = () => ({ type: 'RESET' })

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'RESET':
      return { ...state, counter: 0 }
    default:
      return state
  }
}


export default postsReducer
