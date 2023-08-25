import dotenv from 'dotenv'
import cacheService from './cacheService.js'
import httpService from './httpService.js'

dotenv.config()

const API_KEY = `Bearer ${process.env.API_KEY}`
const EXTERNAL_API = 'https://echo-serv.tbxnet.com/v1/secret'

const FILENAMES_API_URL = `${EXTERNAL_API}/files`

const getAllFiles = async (filename = '') => {
  const fileNames = await getCachedFilenames()
  const allFiles = await Promise.all(
    fileNames.map(it => getCachedFile(it))
  )
  if (!filename) { return allFiles }

  return allFiles.filter(it => it.file.includes(filename))
}

const getFile = async (fileName) => {
  const smbUrl = `${EXTERNAL_API}/file/${fileName}`
  try {
    const fileContent = await httpService.get(smbUrl, { Authorization: API_KEY })
    const lines = fileContent.trim().split('\n').slice(1).map(line => {
      const [, text, number, hex] = line.split(',')
      return { text, number: number ? parseInt(number) : null, hex: hex ?? null }
    })

    return { file: fileName, lines }
  } catch (error) {
    return { file: fileName, lines: [] }
  }
}

const getFilenames = async () => {
  const { files } = await httpService.get(FILENAMES_API_URL, { Authorization: API_KEY })
  return files
}

// Decorates for caching

const getCachedAllFiles = cacheService.cacheDecorator(getAllFiles, 'getAllFiles')
const getCachedFile = cacheService.cacheDecorator(getFile, 'getFile')
const getCachedFilenames = cacheService.cacheDecorator(getFilenames, 'getFilenames')

const fileManagerService = {
  getAllFiles: getCachedAllFiles,
  getFile: getCachedFile,
  getFilenames: getCachedFilenames,
  getCachedAllFiles,
  getCachedFile,
  getCachedFilenames
}

export default fileManagerService
