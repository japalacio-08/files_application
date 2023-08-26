import '@testing-library/jest-dom/extend-expect'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../src/states/reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

export function renderWithProvider (
  ui,
  {
    preloadedState = {
      fileList: [],
      loading: false,
      error: null
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
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
