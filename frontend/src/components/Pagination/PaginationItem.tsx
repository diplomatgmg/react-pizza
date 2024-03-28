import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'

interface PaginationItemProps {
  page: number
  currentPage: number
  onClick: (newPage: number) => void
}

const PaginationItem: FC<PaginationItemProps> = ({ page, currentPage, onClick }): ReactElement => {
  const className = clsx('pagination__item', {
    active: page === currentPage
  })

  return <li className={className} onClick={() => onClick(page)}>{page}</li>
}

export default PaginationItem
