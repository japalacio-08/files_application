import axios from 'axios'
import { Actions, Api } from '../utils/constants'

export const fetchFiles = () => dispatch => {
  dispatch({ type: Actions.FETCH_FILES_START })

  axios.get(Api.FILES_API)
    .then((response) => {
      dispatch({
        type: Actions.FETCH_FILES_SUCCESS,
        payload: response.data.data
      })
    })
    .catch((error) => {
      dispatch({
        type: Actions.FETCH_FILES_ERROR,
        error
      })
    })
}
