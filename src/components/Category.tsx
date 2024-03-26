import React, { type ReactElement } from 'react'

const Category = (): ReactElement => {
  return (
    <ul className="category__list">
      <li className="category__item active"><a href="#">Все</a></li>
      <li className="category__item"><a href="#">Мясные</a></li>
      <li className="category__item"><a href="#">Сырные</a></li>
      <li className="category__item"><a href="#">Острые</a></li>
      <li className="category__item"><a href="#">Гриль</a></li>
      <li className="category__item"><a href="#">Вегетарианские</a></li>
    </ul>
  )
}

export default Category
