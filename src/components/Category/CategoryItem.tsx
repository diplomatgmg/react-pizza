import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'

interface CategoryItemProps {
  text: string
  isActive?: boolean
}

const CategoryItem: FC<CategoryItemProps> = ({ text, isActive }): ReactElement => {
  const className = clsx('category__item', {
    active: isActive
  })
  return <li className={className}><a href="#">{text}</a></li>
}

export default CategoryItem
