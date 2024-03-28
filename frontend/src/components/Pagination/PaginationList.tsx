import React, { type ReactElement } from 'react'
import PaginationItem from './PaginationItem'
import { useGetPizzasQuery } from '../../redux/api'
import { useAppDispatch, useAppSelector, useSearchParams } from '../../redux/hooks'
import { setPage } from '../../redux/searchParamsSlice'
import PaginationItemSkeleton from './PaginationItemSkeleton'

const PaginationList = (): ReactElement => {
  const dispatch = useAppDispatch()
  const { page } = useAppSelector(state => state.searchParams)
  const { data, isLoading } = useGetPizzasQuery(useSearchParams())

  const handleChangePage = (page: number): void => {
    dispatch(setPage(page))
  }

  if (isLoading || data === undefined) {
    return (
      <ul className="pagination__list">
        {isLoading && [...Array(6)].map((_, index) => <PaginationItemSkeleton key={index}/>)}
      </ul>
    )
  }

  const { total_pages: totalPages } = data

  return (
    <ul className="pagination__list">
      {[...Array(totalPages)].map((_, index) => (
        <PaginationItem
          key={index}
          page={index + 1}
          currentPage={page}
          onClick={handleChangePage}
        />
      ))}
    </ul>
  )
}

export default PaginationList
