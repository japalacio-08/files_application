import { Actions } from '../utils/constants'

const initialState = {
  fileList: [],
  loading: false,
  error: null
}

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_FILES_START:
      return {
        ...state,
        loading: true,
        fileList: []
      }
    case Actions.FETCH_FILES_SUCCESS:
      return {
        ...state,
        loading: false,
        fileList: action.payload
      }
    case Actions.FETCH_FILES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        fileList: []
      }
    default:
      return state
  }
}

const initialFileListState = {
  files: [],
  loading: false,
  error: null
}

export const fileListReducer = (state = initialFileListState, action) => {
  switch (action.type) {
    case Actions.FETCH_FILE_LIST_START:
      return {
        ...state,
        loading: true,
        files: []
      }
    case Actions.FETCH_FILE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        files: action.payload
      }
    case Actions.FETCH_FILE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        files: []
      }
    default:
      return state
  }
}
