import { fileReducer, fileListReducer } from '../../src/states/reducers'
import { Actions } from '../../src/utils/constants'

const initialState = {
  fileList: [],
  loading: false,
  error: null
}

describe('fileReducer actions', () => {
  it('should return the initial state when no action is passed', () => {
    const state = fileReducer(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('should set loading to true when FETCH_FILES_START action is passed', () => {
    const action = { type: Actions.FETCH_FILES_START }
    const state = fileReducer(initialState, action)
    expect(state.loading).toBe(true)
  })

  it('should set loading to false and fileList to action payload when FETCH_FILES_SUCCESS action is passed', () => {
    const fileList = ['file1', 'file2']
    const action = { type: Actions.FETCH_FILES_SUCCESS, payload: fileList }
    const state = fileReducer(initialState, action)
    expect(state.loading).toBe(false)
    expect(state.fileList).toEqual(fileList)
  })

  it('should set loading to false and error to action error when FETCH_FILES_ERROR action is passed', () => {
    const error = 'Error fetching files'
    const action = { type: Actions.FETCH_FILES_ERROR, error }
    const state = fileReducer(initialState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toEqual(error)
  })
})

const initialFileListState = {
  files: [],
  loading: false,
  error: null
}

describe('fileListReducer actions', () => {
  it('should return the initial state when no action is passed', () => {
    const state = fileListReducer(undefined, {})
    expect(state).toEqual(initialFileListState)
  })

  it('should set loading to true when FETCH_FILES_START action is passed', () => {
    const action = { type: Actions.FETCH_FILE_LIST_START }
    const state = fileListReducer(initialFileListState, action)
    expect(state.loading).toBe(true)
  })

  it('should set loading to false and fileList to action payload when FETCH_FILES_SUCCESS action is passed', () => {
    const files = ['file1', 'file2']
    const action = { type: Actions.FETCH_FILE_LIST_SUCCESS, payload: files }
    const state = fileListReducer(initialFileListState, action)
    expect(state.loading).toBe(false)
    expect(state.files).toEqual(files)
  })

  it('should set loading to false and error to action error when FETCH_FILES_ERROR action is passed', () => {
    const error = 'Error fetching files'
    const action = { type: Actions.FETCH_FILE_LIST_ERROR, error }
    const state = fileListReducer(initialFileListState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toEqual(error)
  })
})
