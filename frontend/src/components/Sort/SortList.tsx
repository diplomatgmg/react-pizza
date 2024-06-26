import React, { type FC, type ReactElement } from 'react'
import SortItem from './SortItem'
import { useAppDispatch } from '../../redux/hooks'
import { setOrdering } from '../../redux/searchParamsSlice'
import { type OrderingFields } from '../../@types/searchParams'

interface SortListProps {
  handleCloseModal: () => void
}

const SortList: FC<SortListProps> = ({ handleCloseModal }): ReactElement => {
  const dispatch = useAppDispatch()

  const handleSetOrdering = (ordering: OrderingFields): void => {
    dispatch(setOrdering(ordering))
    handleCloseModal()
  }

  return (
    <ul className="sort__list">
      <SortItem text={'умолчанию'} handleSetOrdering={() => handleSetOrdering('')}></SortItem>
      <SortItem text={'цене ↓'} handleSetOrdering={() => handleSetOrdering('price')}></SortItem>
      <SortItem text={'цене ↑'} handleSetOrdering={() => handleSetOrdering('-price')}></SortItem>
      <SortItem text={'алфавиту ↓'} handleSetOrdering={() => handleSetOrdering('name')}></SortItem>
      <SortItem text={'алфавиту ↑'} handleSetOrdering={() => handleSetOrdering('-name')}></SortItem>
    </ul>
  )
}

export default SortList
