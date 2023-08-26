import '@testing-library/jest-dom/extend-expect'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { fileListReducer, fileReducer } from '../src/states/reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

const rootReducer = combineReducers({ file: fileReducer, fileList: fileListReducer })

/* eslint-disable no-undef */
export function renderWithProvider (
  ui,
  {
    preloadedState = {
      file: {
        fileList: [],
        loading: false,
        error: null
      },
      fileList: {
        files: [],
        loading: false,
        error: null
      }
    },
    store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk)
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper ({ children }) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
