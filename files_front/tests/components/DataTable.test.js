import { screen } from '@testing-library/react'
import DataTable from '../../src/components/DataTable'
import { renderWithProvider } from '../setupTest'
import filesDataResponse from '../dummy/filesData'

const preloadedState = {
  fileList: filesDataResponse,
  loading: false,
  error: null
}

test('renders DataTable with record and header', async () => {
  renderWithProvider(<DataTable files={preloadedState.fileList.data} loading={preloadedState.loading} />, { preloadedState })

  const childElement = screen.getByText('lAXcZxJMYiUzvxoyBhtsY')
  expect(childElement).toBeInTheDocument()
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()
})

test('does not render DataTable with record, just header', async () => {
  renderWithProvider(<DataTable />, { preloadedState })

  const childElement = screen.queryByText('lAXcZxJMYiUzvxoyBhtsY')
  expect(childElement).toBeNull()
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()
})
