
import { combineReducers } from 'redux';
import counterReducer from './counter.reducer'

const rootReducers = combineReducers({
  counter: counterReducer
})

export default rootReducers
