import React, { type ReactElement } from 'react'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../../redux/api'
import CategoryItemSkeleton from './CategoryItemSkeleton'
import { useAppDispatch } from '../../redux/hooks'
import { setCategory, setPage } from '../../redux/searchParamsSlice'

const CategoryList = (): ReactElement => {
  const dispatch = useAppDispatch()

  const {
    data,
    isLoading
  } = useGetCategoriesQuery({})

  const handleChangeCategory = (category: string): void => {
    dispatch(setCategory(category))
    dispatch(setPage(1))
  }

  if (isLoading || data === undefined) {
    return (
      <ul className="category__list">
        {[...Array(6)].map((_, index) => <CategoryItemSkeleton key={index}/>)}
      </ul>
    )
  }

  return (
    <ul className="category__list">
      {data.map(category => <CategoryItem key={category.id} name={category.name} onClick={handleChangeCategory} />)}
    </ul>
  )
}

export default CategoryList
