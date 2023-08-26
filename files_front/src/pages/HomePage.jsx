import React, { useEffect } from 'react'
import AppLayout from '../containers/AppLayout/index'
import { fetchFiles } from '../states/actions'
import { connect } from 'react-redux'
import DataTable from '../components/DataTable'

const HomePage = ({ fetchFiles, fileList, loading }) => {
  useEffect(() => {
    fetchFiles()
  }, [fetchFiles])

  return (
    <>
      <AppLayout>
        <DataTable files={fileList} loading />
      </AppLayout>
    </>
  )
}

const mapStateToProps = state => ({
  fileList: state.fileList,
  loading: state.loading
})

const mapDispatchToProps = {
  fetchFiles
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
