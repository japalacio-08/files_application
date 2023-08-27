import axios from 'axios'
import { screen } from '@testing-library/react'
import HomePage from '../../src/pages/HomePage'
import filesDataResponse from '../dummy/filesData'
import { renderWithProvider } from '../setupTest'
import { MemoryRouter } from 'react-router-dom'

test('renders DataTable with record and header', async () => {
  axios.get.mockResolvedValueOnce(filesDataResponse)

  renderWithProvider(
    <MemoryRouter initialEntries={['/']}><HomePage /></MemoryRouter>,
  )
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()
})
