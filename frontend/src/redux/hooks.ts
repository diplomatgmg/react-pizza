import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from './store'

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useSearchParams = (): RootState['searchParams'] => useAppSelector(state => state.searchParams)

export { useAppDispatch, useAppSelector, useSearchParams }
