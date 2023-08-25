import logService from './logService.js'

export const unprocessableEntity = ({ data = null, message = null }) => {
  return response({
    data,
    message,
    status: 422
  })
}

export const unauthorized = ({ data = null, message = null }) => {
  return response({
    data,
    message,
    status: 401
  })
}

export const success = ({ data = null, message = null }) => {
  return response({
    data,
    message,
    status: 200
  })
}

export const response = ({ data = null, message = null, status = 200 }) => {
  return {
    data,
    message,
    status
  }
}

export const httpResponse = (res, response = {}) => {
  logService.debug(response)
  return res.status(response.status).json(response)
}

const renderService = {
  unprocessableEntity,
  unauthorized,
  success,
  response,
  httpResponse
}

export default renderService
