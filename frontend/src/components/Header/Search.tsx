import React, { type ReactElement } from 'react'
import SearchSvg from '../../assets/svg/search.svg'

const Search = (): ReactElement => {
  return (
    <div className="search">
      <label className="search__label" htmlFor="search"></label>
      <img className="search__icon" src={SearchSvg} alt=""/>
      <input className="search__input" id="search" type="text" placeholder="Поиск пиццы..."/>
    </div>
  )
}

export default Search
