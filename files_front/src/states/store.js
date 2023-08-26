import { createStore, applyMiddleware, combineReducers } from 'redux'
import { fileReducer, fileListReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ file: fileReducer, fileList: fileListReducer })

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
