import * as renderService from '../services/renderService.js'

export const home = () => {
  return renderService.success({ message: 'Welcome!' })
}
