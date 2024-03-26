import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'

interface PaginationItemProps {
  text: string
  isActive?: boolean
}

const PaginationItem: FC<PaginationItemProps> = ({ text, isActive }): ReactElement => {
  const className = clsx('pagination__item', {
    active: isActive
  })

  return <li className={className}><a href="#">{text}</a></li>
}

export default PaginationItem
