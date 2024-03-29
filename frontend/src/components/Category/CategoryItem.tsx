import React, { type FC, type ReactElement } from 'react'
import clsx from 'clsx'
import _ from 'lodash'
import { useSearchParams } from '../../redux/hooks'

interface CategoryItemProps {
  name: string
  isActive?: boolean
  onClick: (category: string) => void
}

const CategoryItem: FC<CategoryItemProps> = ({ name, onClick }): ReactElement => {
  const { category } = useSearchParams()

  const className = clsx('category__item', {
    active: category === name
  })
  return <li className={className} onClick={() => onClick(name)}>{_.capitalize(name)}</li>
}

export default CategoryItem
