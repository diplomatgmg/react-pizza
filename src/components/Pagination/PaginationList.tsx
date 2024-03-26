import React, { type ReactElement } from 'react'
import PaginationItem from './PaginationItem'

const PaginationList = (): ReactElement => {

  return (
    <ul className="pagination__list">
      <PaginationItem text={'<'} />
      <PaginationItem text={'1'} />
      <PaginationItem text={'2'} isActive />
      <PaginationItem text={'3'} />
      <PaginationItem text={'4'} />
      <PaginationItem text={'5'} />
      <PaginationItem text={'>'} />
    </ul>
  )
}

export default PaginationList
