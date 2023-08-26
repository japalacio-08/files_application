export const Actions = {
  FETCH_FILES_START: 'FETCH_FILES_START',
  FETCH_FILES_SUCCESS: 'FETCH_FILES_SUCCESS',
  FETCH_FILES_ERROR: 'FETCH_FILES_ERROR',
  FETCH_FILE_LIST_START: 'FETCH_FILE_LIST_START',
  FETCH_FILE_LIST_SUCCESS: 'FETCH_FILE_LIST_SUCCESS',
  FETCH_FILE_LIST_ERROR: 'FETCH_FILE_LIST_ERROR'
}

export const Api = {
  FILES_API: 'http://localhost:3001/files/data?fileName=',
  FILE_LIST_API: 'http://localhost:3001/files/list'
}

export const TableHeaders = {
  files: [
    { label: 'File Name', key: 'file' },
    { label: 'Text', key: 'text' },
    { label: 'Number', key: 'number' },
    { label: 'Hex', key: 'hex' }
  ],
  fileList: [
    { label: 'File Name', key: 'file' }
  ]
}
