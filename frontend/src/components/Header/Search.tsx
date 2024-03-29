import React, { type ChangeEvent, type FormEvent, type ReactElement, useState } from 'react'
import SearchSvg from '../../assets/svg/search.svg'
import { useAppDispatch } from '../../redux/hooks'
import { setName } from '../../redux/searchParamsSlice'

const Search = (): ReactElement => {
  const [input, setInput] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  const handleSubmitForm = (e: FormEvent): void => {
    e.preventDefault()

    dispatch(setName(input))
  }

  return (
    <form className="search" onSubmit={handleSubmitForm}>
      <label className="search__label" htmlFor="search"></label>
      <img className="search__icon" onClick={handleSubmitForm} src={SearchSvg} alt=""/>
      <input className="search__input" value={input} onChange={handleChangeInput} placeholder="Поиск пиццы..."/>
    </form>
  )
}

export default Search
