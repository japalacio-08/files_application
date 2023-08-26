import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

const Record = ({ fileData }) => {
  const lines = useMemo(() => {
    return fileData.lines
  }, [fileData])

  return (
    <>
      {
      lines.map(line => {
        return (
          <tr key={line.hex}>
            <td>{fileData.file}</td>
            <td>{line.text}</td>
            <td>{line.number}</td>
            <td>{line.hex}</td>
          </tr>
        )
      })
    }

    </>
  )
}

const DataTable = ({ files = [], loading }) => {
  return (
    <>
      <Container style={{ paddingTop: 18, textAlign: 'start' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {files.map(it => <Record key={it.file} fileData={it} />).flat(Infinity)}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default DataTable
