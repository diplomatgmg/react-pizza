import React, { type ReactElement } from 'react'
import ArrowTopSvg from '../../assets/svg/arrow-top.svg'
import SortList from './SortList'

const Sort = (): ReactElement => {
  return (
   <div className="sort">
     <img className="sort__icon" src={ArrowTopSvg} alt=""/>
     <p className="sort__text">Сортировка по:</p>
     <span className="sort__criteria">популярности</span>
     <SortList />
   </div>
  )
}

export default Sort
