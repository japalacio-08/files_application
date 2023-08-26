import axios from 'axios'
import cacheService from './cacheService.js'
import logService from './logService.js'

const buildHeaders = (extras = {}) => {
  return {
    accept: 'application/json',
    ...extras
  }
}

const httpGet = async (url, headers = {}) => {
  try {
    const response = await axios.get(
      url,
      {
        headers: buildHeaders(headers)
      }
    )
    return response.data
  } catch (error) {
    logService.error({ message: error.response ?? error.message, type: 'error' })
    return null
  }
}

const httpService = {
  get: cacheService.cacheDecorator(httpGet, 'httpGet')
}

export default httpService
