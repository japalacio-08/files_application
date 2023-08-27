import React, { useEffect, useMemo } from 'react'
import AppLayout from '../containers/AppLayout/index'
import { fetchFiles, fetchFileList } from '../states/actions'
import { connect } from 'react-redux'
import DataTable from '../components/DataTable'
import { TableHeaders } from '../utils/constants'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SearchFile from '../components/SearchFile'

const HomePage = ({
  fetchFiles, fileList, loading, error,
  fetchFileList, files, fileListloading, fileListerror
}) => {
  useEffect(() => {
    fetchFileList()
    fetchFiles()
  }, [fetchFiles, fetchFileList])

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
          <SearchFile
            fileListerror={fileListerror}
            files={files}
            fetchFiles={fetchFiles}
            fileListloading={fileListloading}
          />
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
