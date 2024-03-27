import React, { type ReactElement, useState } from 'react'
import ArrowTopSvg from '../../assets/svg/arrow-top.svg'
import SortList from './SortList'

const Sort = (): ReactElement => {
  const [isShowSortList, setIsShowSortList] = useState<boolean>(false)

  return (
   <div className="sort">
     <img className="sort__icon" src={ArrowTopSvg} alt=""/>
     <p className="sort__text">Сортировка по:</p>
     <span className="sort__criteria" onClick={() => setIsShowSortList(prevState => !prevState)}>популярности</span>
     { isShowSortList && <SortList /> }
   </div>
  )
}

export default Sort
