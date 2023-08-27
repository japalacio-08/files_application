import Router from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './states/store'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Provider testId='provider' store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
