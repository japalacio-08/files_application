import axios from 'axios'
import cacheService from './cacheService.js'

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
    return null
  }
}

const httpService = {
  get: cacheService.cacheDecorator(httpGet, 'httpGet')
}

export default httpService
