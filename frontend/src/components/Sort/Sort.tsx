import React, { type ReactElement, useState } from 'react'
import ArrowTopSvg from '../../assets/svg/arrow-top.svg'
import SortList from './SortList'
import { useSearchParams } from '../../redux/hooks'
import { translateOrderingName } from '../../utils'

const Sort = (): ReactElement => {
  const { ordering } = useSearchParams()
  const [isShowSortList, setIsShowSortList] = useState<boolean>(false)

  const handleSetOrdering = (): void => {
    setIsShowSortList(prevState => !prevState)
  }

  return (
   <div className="sort">
     <img className="sort__icon" src={ArrowTopSvg} alt=""/>
     <p className="sort__text">Сортировка по:</p>
     <span className="sort__criteria" onClick={handleSetOrdering}>{translateOrderingName(ordering)}</span>
     { isShowSortList && <SortList handleCloseModal={handleSetOrdering}/> }
   </div>
  )
}

export default Sort
