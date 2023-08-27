import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import SearchFile from '../../src/components/SearchFile'
import axios from 'axios'
import '../setupTest'

describe('SearchFile', () => {
  it('should call fetchFiles with the deferred file name when a valid file name is searched', () => {
    axios.get.mockResolvedValueOnce({ data: { data: [] } })
    // Arrange
    const fileListerror = false
    const files = ['file1', 'file2']
    const fetchFiles = jest.fn()
    const fileListloading = false
    render(<SearchFile fileListerror={fileListerror} files={files} fetchFiles={fetchFiles} fileListloading={fileListloading} />)
    const searchInput = screen.getByRole('combobox')
    const searchButton = screen.getByText('Search')

    // Act
    fireEvent.change(searchInput, { target: { value: 'file1' } })
    const optionElement = screen.getByLabelText('file1')
    fireEvent.click(optionElement)
    fireEvent.click(searchButton)

    // Assert
    expect(fetchFiles).toHaveBeenCalledWith(['file1'])
  })

  it('should show Typeahead component when files is null', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: [] } })
    // Arrange
    const fileListerror = false
    const fetchFiles = jest.fn()
    const fileListloading = false

    // Act

    render(<SearchFile fileListerror={fileListerror} fetchFiles={fetchFiles} fileListloading={fileListloading} />)

    let searchInput
    await waitFor(() => {
      searchInput = screen.getByRole('combobox')
    })

    fireEvent.focusIn(searchInput)

    let optionElement
    await waitFor(() => {
      optionElement = screen.getByRole('option')
    })

    // Assert
    expect(optionElement).toBeInTheDocument()
  })

  it('should error message if fileListerror is true', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: [] } })
    // Arrange
    const fileListerror = true
    const fetchFiles = jest.fn()

    // Act
    render(<SearchFile fileListerror={fileListerror} fetchFiles={fetchFiles} />)

    const optionElement = screen.getByText('Something went wrong while fetching the avaiable files list.')

    // Assert
    expect(optionElement).toBeInTheDocument()
  })

  it('should works fine if we do not send fileListerror', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: [] } })
    // Arrange
    const fetchFiles = jest.fn()

    // Act
    render(<SearchFile fetchFiles={fetchFiles} />)

    const searchInput = screen.getByRole('combobox')

    // Assert
    expect(searchInput).toBeInTheDocument()
  })

  it('use times button for remove search', () => {
    axios.get.mockResolvedValueOnce({ data: { data: [] } })
    // Arrange
    const fileListerror = false
    const files = ['file1', 'file2']
    const fetchFiles = jest.fn()
    const fileListloading = false
    render(<SearchFile fileListerror={fileListerror} files={files} fetchFiles={fetchFiles} fileListloading={fileListloading} />)
    let searchInput = screen.getByRole('combobox')
    const searchButton = screen.getByText('Search')

    // Act
    fireEvent.change(searchInput, { target: { value: 'file1' } })
    const optionElement = screen.getByLabelText('file1')
    fireEvent.click(optionElement)
    fireEvent.click(searchButton)

    // Assert
    expect(fetchFiles).toHaveBeenCalledWith(['file1'])

    const timesButton = screen.getByText('X')
    fireEvent.click(timesButton)
    searchInput = screen.getByRole('combobox')
    expect(searchInput.value).toBe('')
  })
})
