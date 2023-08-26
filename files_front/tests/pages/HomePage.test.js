import { screen } from '@testing-library/react'
import HomePage from '../../src/pages/HomePage'
import filesDataResponse from '../dummy/filesData'
import { renderWithProvider } from '../setupTest'
import { MemoryRouter } from 'react-router-dom'
const preloadedState = {
  file: {
    fileList: filesDataResponse.data,
    loading: false,
    error: null
  },
  fileList: {
    files: [],
    loading: false,
    error: null
  }
}

test('renders DataTable with record and header', async () => {
  renderWithProvider(
    <MemoryRouter initialEntries={['/']}><HomePage /></MemoryRouter>,
    { preloadedState }
  )

  const childElement = screen.getByText('lAXcZxJMYiUzvxoyBhtsY')
  expect(childElement).toBeInTheDocument()
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()
})
