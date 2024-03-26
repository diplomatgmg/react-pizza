import React, { type ReactElement } from 'react'
import PaginationList from './PaginationList'

const Pagination = (): ReactElement => {
  return (
    <div className="pagination">
      <PaginationList/>
    </div>
  )
}

export default Pagination
