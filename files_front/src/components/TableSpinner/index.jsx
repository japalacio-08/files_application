import React from 'react'
import AppSpinner from '../AppSpinner'

const TableSpinner = ({ colSpan = 1 }) => {
  return (
    <>
      <tr>
        <td colSpan={colSpan} className='text-center'>
          <AppSpinner />
        </td>
      </tr>
    </>
  )
}

export default TableSpinner
