import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'

interface SortItemProps {
  text: string
  isActive?: boolean
}

const SortItem: FC<SortItemProps> = ({ text, isActive }): ReactElement => {
  const className = clsx('sort__item', {
    active: isActive
  })

  return <li className={className}>{text}</li>
}

export default SortItem
