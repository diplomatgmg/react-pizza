import React, { type ReactElement } from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = (): ReactElement => {
  return (
    <ul className="category__list">
      <CategoryItem text={'Все'} isActive/>
      <CategoryItem text={'Мясные'}/>
      <CategoryItem text={'Сырные'}/>
      <CategoryItem text={'Острые'}/>
      <CategoryItem text={'Гриль'}/>
      <CategoryItem text={'Вегетарианские'}/>
      <CategoryItem text={'Экзотические'}/>
    </ul>
  )
}

export default CategoryList
