
import { createStore } from 'redux';
import rootReducers from './reducers'

const store = createStore(rootReducers)
// store has 3 states
// getState() - get state
// dispatch - change state
// subscibe on changes

export default store
