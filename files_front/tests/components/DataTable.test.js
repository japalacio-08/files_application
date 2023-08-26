import { screen } from '@testing-library/react'
import DataTable from '../../src/components/DataTable'
import { renderWithProvider } from '../setupTest'
import filesDataResponse from '../dummy/filesData'
import { TableHeaders } from '../../src/utils/constants'

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

const processedMock = preloadedState.file.fileList.map(file => {
  const lines = file.lines.map(line => {
    return {
      file: file.file,
      ...line,
      key: line.hex
    }
  })
  return lines
}).flat(Infinity)

test('renders DataTable with record and header', async () => {
  renderWithProvider(<DataTable headers={TableHeaders.files} files={processedMock} loading={preloadedState.loading} />, { preloadedState })

  const childElement = screen.getByText('lAXcZxJMYiUzvxoyBhtsY')
  expect(childElement).toBeInTheDocument()
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()
})

test('does not render DataTable with record, just header', async () => {
  renderWithProvider(<DataTable headers={TableHeaders.files} />, { preloadedState })

  const childElement = screen.queryByText('lAXcZxJMYiUzvxoyBhtsY')
  expect(childElement).toBeNull()
  const headerElement = screen.getByText('File Name')
  expect(headerElement).toBeInTheDocument()
})

test('render spiner for table', async () => {
  renderWithProvider(<DataTable loading />, { preloadedState })

  const childElement = screen.getByLabelText('spinner')
  expect(childElement).toBeInTheDocument()
})

test('render Alert for table', async () => {
  renderWithProvider(<DataTable error='Dummy Error' />, { preloadedState })

  const childElement = screen.getByLabelText('alert')
  expect(childElement).toBeInTheDocument()
})
