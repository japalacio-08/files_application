import { Actions } from '../utils/constants'

const initialState = {
  fileList: [],
  loading: false,
  error: null
}

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_FILES_START:
      return {
        ...state,
        loading: true
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
        error: action.error
      }
    default:
      return state
  }
}

export default fileReducer
