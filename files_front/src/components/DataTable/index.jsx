import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import TableSpinner from '../TableSpinner'
import TableAlert from '../TableAlert'

const Record = ({ fileData, headers }) => {
  return (
    <>
      <tr key={`${fileData.key}`}>
        {
      headers.map(header => {
        return <td key={`${fileData.key}_${header.key}`}>{fileData[header.key]}</td>
      })
    }
      </tr>
    </>
  )
}

const Records = ({ files, headers }) => {
  return (
    <>
      {files.map(it => <Record key={it.key} fileData={it} headers={headers} />)}
    </>
  )
}

const Headers = ({ headers }) => {
  return (
    <tr key='table_headers'>
      {
          headers.map(header => (<th key={header.key}>{header.label}</th>))
        }
    </tr>
  )
}

const DataTable = ({ files = [], loading = false, error = null, headers = [], textAlign = 'start' }) => {
  return (
    <>
      <Container style={{ paddingTop: 18, textAlign }}>
        <Table striped bordered hover responsive>
          <thead>
            <Headers headers={headers} />
          </thead>
          <tbody>
            {loading && <TableSpinner colSpan={4} />}
            {!loading && error && <TableAlert colSpan={4} type='danger' message={error} />}
            {!loading && !error && <Records files={files} headers={headers} /> }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default DataTable
