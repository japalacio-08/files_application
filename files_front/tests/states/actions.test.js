import axios from 'axios'
import { fetchFiles, fetchFileList } from '../../src/states/actions'
import { Actions, Api } from '../../src/utils/constants'

describe('fetchFiles', () => {
  it('should dispatch FETCH_FILES_START action', async () => {
    const dispatch = jest.fn()
    fetchFiles()(dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: Actions.FETCH_FILES_START })
  })

  it('should make a successful GET request', async () => {
    const dispatch = jest.fn()
    const mockResponse = { data: { data: 'test data' } }
    axios.get.mockResolvedValueOnce(mockResponse)

    await fetchFiles()(dispatch)
    expect(axios.get).toHaveBeenCalledWith(Api.FILES_API)

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.FETCH_FILES_START
    })

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.FETCH_FILES_SUCCESS,
      payload: 'test data'
    })
  })

  it('should make a corrupted GET request', async () => {
    const dispatch = jest.fn()
    const mockResponse = new Error('Dummy error')
    axios.get.mockRejectedValueOnce(mockResponse)

    try {
      await fetchFiles()(dispatch)
    } catch (error) {
      expect(dispatch).toHaveBeenCalledWith({
        type: Actions.FETCH_FILES_ERROR,
        payload: error
      })
    }

    expect(axios.get).toHaveBeenCalledWith(Api.FILES_API)
    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.FETCH_FILES_START
    })
  })
})

describe('fetchFileList', () => {
  it('should dispatch FETCH_FILE_LIST_START action', async () => {
    const dispatch = jest.fn()
    fetchFileList()(dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: Actions.FETCH_FILE_LIST_START })
  })

  it('should make a successful GET request', async () => {
    const dispatch = jest.fn()
    const mockResponse = { data: { data: 'test data' } }
    axios.get.mockResolvedValueOnce(mockResponse)

    await fetchFileList()(dispatch)
    expect(axios.get).toHaveBeenCalledWith(Api.FILE_LIST_API)

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.FETCH_FILE_LIST_START
    })

    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.FETCH_FILE_LIST_SUCCESS,
      payload: 'test data'
    })
  })

  it('should make a corrupted GET request', async () => {
    const dispatch = jest.fn()
    const mockResponse = new Error('Dummy error')
    axios.get.mockRejectedValueOnce(mockResponse)

    try {
      await fetchFileList()(dispatch)
    } catch (error) {
      expect(dispatch).toHaveBeenCalledWith({
        type: Actions.FETCH_FILE_LIST_ERROR,
        payload: error
      })
    }

    expect(axios.get).toHaveBeenCalledWith(Api.FILE_LIST_API)
    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.FETCH_FILE_LIST_START
    })
  })
})
