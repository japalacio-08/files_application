import React from 'react'
import Alert from 'react-bootstrap/Alert'

const TableAlert = ({ colSpan = 1, type = 'info', message = '' }) => {
  return (
    <>
      <tr>
        <td colSpan={colSpan} className='text-center'>
          <Alert aria-label='alert' key={type} variant={type}>
            {message}
          </Alert>
        </td>
      </tr>
    </>
  )
}

export default TableAlert
