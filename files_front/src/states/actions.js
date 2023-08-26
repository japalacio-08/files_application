import axios from 'axios'
import { Actions, Api } from '../utils/constants'

export const fetchFiles = (fileName = '') => dispatch => {
  dispatch({ type: Actions.FETCH_FILES_START })

  axios.get(`${Api.FILES_API}${fileName}`)
    .then((response) => {
      dispatch({
        type: Actions.FETCH_FILES_SUCCESS,
        payload: response.data.data
      })
    })
    .catch((error) => {
      dispatch({
        type: Actions.FETCH_FILES_ERROR,
        error: error?.response?.data?.message || 'Something went wrong'
      })
    })
}

export const fetchFileList = () => dispatch => {
  dispatch({ type: Actions.FETCH_FILE_LIST_START })

  axios.get(Api.FILE_LIST_API)
    .then((response) => {
      dispatch({
        type: Actions.FETCH_FILE_LIST_SUCCESS,
        payload: response.data.data
      })
    })
    .catch((error) => {
      dispatch({
        type: Actions.FETCH_FILE_LIST_ERROR,
        error: error?.response?.data?.message || 'Something went wrong'
      })
    })
}
