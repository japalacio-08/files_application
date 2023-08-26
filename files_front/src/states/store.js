import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers' // Esto importará el archivo combinado de reducers
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
