import React, { type ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'
import _ from 'lodash'

const CategoryItemSkeleton = (): ReactElement => {
  const randomWith = _.random(20, 160)
  return <li className="category__item category__skeleton"><Skeleton width={randomWith}/></li>
}

export default CategoryItemSkeleton
