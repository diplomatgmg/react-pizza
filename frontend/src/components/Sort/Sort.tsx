import React, { type ReactElement, useState } from 'react'
import SortList from './SortList'
import { useSearchParams } from '../../redux/hooks'
import { translateOrderingName } from '../../utils'
import ArrowTop from '../svg/ArrowTop'

const Sort = (): ReactElement => {
  const { ordering } = useSearchParams()
  const [isShowSortList, setIsShowSortList] = useState<boolean>(false)

  const handleSetOrdering = (): void => {
    setIsShowSortList(prevState => !prevState)
  }

  return (
   <div className="sort">
     <div className="sort__icon">
       <ArrowTop color={'#2c2c2c'} size={12} />
     </div>
     <p className="sort__text">Сортировка по:</p>
     <span className="sort__criteria" onClick={handleSetOrdering}>{translateOrderingName(ordering)}</span>
     { isShowSortList && <SortList handleCloseModal={handleSetOrdering}/> }
   </div>
  )
}

export default Sort
