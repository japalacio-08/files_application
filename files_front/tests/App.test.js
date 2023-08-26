import { screen } from '@testing-library/react'
import App from '../src/App'
import { renderWithProvider } from './setupTest'

test('renders React Test App header', async () => {
  renderWithProvider(<App />)

  const linkElement = screen.getByText(/React Test App/i)
  expect(linkElement).toBeInTheDocument()
})
