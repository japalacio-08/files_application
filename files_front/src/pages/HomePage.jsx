import React, { useEffect, useMemo, useState, useDeferredValue, useCallback } from 'react'
import AppLayout from '../containers/AppLayout/index'
import { fetchFiles, fetchFileList } from '../states/actions'
import { connect } from 'react-redux'
import DataTable from '../components/DataTable'
import { TableHeaders } from '../utils/constants'
import Container from 'react-bootstrap/Container'
import { Typeahead } from 'react-bootstrap-typeahead'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Spinner } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

const HomePage = ({
  fetchFiles, fileList, loading, error,
  fetchFileList, files, fileListloading, fileListerror
}) => {
  const [fileName, setFileName] = useState('')

  const deferredfileName = useDeferredValue(fileName)

  const isValidSearch = useMemo(() => {
    return (fileName.length > 0) && files.includes(fileName[0])
  }, [fileName, files])

  const closeCallback = (callback) => {
    callback()
    fetchFiles()
  }

  useEffect(() => {
    fetchFileList()
    fetchFiles()
  }, [fetchFiles, fetchFileList])

  const handleSubmit = useCallback(() => {
    fetchFiles(deferredfileName)
  }, [deferredfileName, fetchFiles])

  const processedFiles = useMemo(() => {
    return fileList.map(file => {
      const lines = file.lines.map(line => {
        return {
          file: file.file,
          ...line,
          key: line.hex
        }
      })
      return lines
    }).flat(Infinity)
  }, [fileList])

  return (
    <>
      <AppLayout>
        <Container style={{ paddingTop: 18, textAlign: 'center' }}>
          <Row>
            {
              fileListerror &&
              <Alert aria-label='alert' variant='danger'>
                Something went wrong while fetching the avaiable files list.
              </Alert>
            }
            {
              !fileListerror &&
              <>
                <Col xs='12' lg='12'>
                  <h6>Search by File Name</h6>
                </Col>
                <Col xs='12' lg='10'>
                  <Typeahead
                    id='pagination-example'
                    options={files}
                    paginate={false}
                    placeholder='Search by File Name...'
                    onChange={setFileName}
                    isValid={isValidSearch}
                  >
                    {({ onClear, selected }) => (
                      <div style={{ position: 'relative', top: -34, float: 'right', marginRight: 30 }}>
                        {
                          !!selected.length &&
                            <Button
                              variant='outline-dark'
                              size='sm'
                              onClick={() => closeCallback(onClear)}
                              type='button'
                            >X
                            </Button>
                        }
                        {fileListloading && <Spinner animation='grow' size='sm' />}
                      </div>
                    )}
                  </Typeahead>
                </Col>
                <Col xs='12' lg='2'>
                  <div className='d-grid gap-2'>
                    <Button disabled={!isValidSearch} onClick={handleSubmit} type='button'>Search</Button>
                  </div>
                </Col>
              </>
            }
          </Row>

          <Row>
            <DataTable
              files={processedFiles}
              loading={loading}
              error={error}
              headers={TableHeaders.files}
            />
          </Row>

        </Container>

      </AppLayout>
    </>
  )
}

const mapStateToProps = state => ({
  fileList: state.file.fileList,
  loading: state.file.loading,
  error: state.file.error,

  files: state.fileList.files,
  fileListloading: state.fileList.loading,
  fileListerror: state.fileList.error
})

const mapDispatchToProps = {
  fetchFiles,
  fetchFileList
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
