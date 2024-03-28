import React, { type ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'

const PaginationItemSkeleton = (): ReactElement => {
  return <li className="pagination__skeleton"><Skeleton width={52} height={52} borderRadius={50}/></li>
}

export default PaginationItemSkeleton
