import { screen } from '@testing-library/react'
import DataTable from '../../src/components/DataTable'
import { renderWithProvider } from '../setupTest'
import filesDataResponse from '../dummy/filesData'

const preloadedState = {
  fileList: filesDataResponse,
  loading: false,
  error: null
}

test('renders React Test App header', async () => {
  renderWithProvider(<DataTable files={preloadedState.fileList.data} loading={preloadedState.loading} />, { preloadedState })

  const linkElement = screen.getByText('lAXcZxJMYiUzvxoyBhtsY')
  expect(linkElement).toBeInTheDocument()
})
