import { screen } from '@testing-library/react'
import HomePage from '../../src/pages/HomePage'
import { renderWithProvider } from '../setupTest'
import { MemoryRouter } from 'react-router-dom'
import filesDataResponse from '../dummy/filesData'

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
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()

  const searchElement = screen.getByText('Search by File Name')
  expect(searchElement).toBeInTheDocument()
})
