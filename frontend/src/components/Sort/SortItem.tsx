import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'

interface SortItemProps {
  text: string
  isActive?: boolean
  handleSetOrdering: () => void
}

const SortItem: FC<SortItemProps> = ({ text, isActive, handleSetOrdering }): ReactElement => {
  const className = clsx('sort__item', {
    active: isActive
  })

  return <li className={className} onClick={handleSetOrdering}>{text}</li>
}

export default SortItem
