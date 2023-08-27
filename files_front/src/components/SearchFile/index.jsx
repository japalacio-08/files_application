import React, { useMemo, useState, useDeferredValue, useCallback } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Spinner } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'

const SearchFile = (
  {
    fileListerror = false,
    files = [],
    fetchFiles,
    fileListloading = false
  }
) => {
  const [fileName, setFileName] = useState('')
  const deferredfileName = useDeferredValue(fileName)

  const isValidSearch = useMemo(() => {
    return (fileName.length > 0) && files.includes(fileName[0])
  }, [fileName, files])

  const closeCallback = (callback) => {
    callback()
    fetchFiles()
  }

  const handleSubmit = useCallback(() => {
    fetchFiles(deferredfileName)
  }, [deferredfileName, fetchFiles])

  return (
    <Row>
      {fileListerror &&
        <Alert aria-label='alert' variant='danger'>
          Something went wrong while fetching the avaiable files list.
        </Alert>}
      {!fileListerror &&
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
                  {!!selected.length &&
                    <Button
                      variant='outline-dark'
                      size='sm'
                      onClick={() => closeCallback(onClear)}
                      type='button'
                    >X
                    </Button>}
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
        </>}
    </Row>
  )
}

export default SearchFile
