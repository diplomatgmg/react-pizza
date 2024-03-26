import React, { type ReactElement } from 'react'
import SortItem from './SortItem'

const SortList = (): ReactElement => {
  return (
    <ul className="sort__list">
      <SortItem text={'цене ↓'}></SortItem>
      <SortItem text={'цене ↑'}></SortItem>
      <SortItem text={'популярности ↓'}></SortItem>
      <SortItem text={'популярности ↑'}></SortItem>
      <SortItem text={'алфавиту ↓'}></SortItem>
      <SortItem text={'алфавиту ↑'}></SortItem>
    </ul>
  )
}

export default SortList
