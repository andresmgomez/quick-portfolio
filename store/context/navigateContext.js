import { createContext, useReducer } from 'react'
import { setActiveSection } from '@/utils/index'

const navigateType = {
	navbar: 'navbar',
	popup: 'popup',
}
const NavigateContext = createContext()

const reducer = (state, action) => {
	switch (action.navigateType) {
		case navigateType.navbar:
			return {
				...state,
				navbar: action.payload,
			}
		case navigateType.popup:
			return {
				...state,
				popupPage: !state.popupPage,
			}
		default:
			return state
	}
}

const state = props => {
	const initialState = {
		navbar: 'home',
		popupPage: false,
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const changePage = value => {
		dispatch({
			navigateType: navigateType.navbar,
			payload: value,
		})
		setActiveSection(value)
	}

	const openPopupPage = () => {
		dispatch({
			navigateType: navigateType.popup,
		})
	}

	const { currentPage, popupPage } = state

	return (
		<NavigateContext.Provider
			value={{ currentPage, popupPage, changePage, openPopupPage }}
		>
			{props.children}
		</NavigateContext.Provider>
	)
}

export default state
export { NavigateContext }
