import fileManagerService from '../services/fileManagerService.js'
import * as renderService from '../services/renderService.js'

export const data = async (filename) => {
  const files = await fileManagerService.getAllFiles(filename)
  return renderService.success({ data: files })
}
