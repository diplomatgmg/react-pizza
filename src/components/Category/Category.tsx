import React, { type ReactElement } from 'react'
import CategoryList from './CategoryList'

const Category = (): ReactElement => {
  return (
    <div className="category">
      <CategoryList/>
    </div>
  )
}

export default Category
