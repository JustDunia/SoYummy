import css from '../SearchBar/SearchBar.module.css'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchRecipes } from '../../redux/search/search.selectors'
import { searchRecipes } from '../../redux/search/search.operations'
import { useState } from 'react'

const SearchBar = ({ btnColor }) => {
	const dispatch = useDispatch()
	const [keyword, setKeyword] = useState('')
	const handleSearch = e => {
		e.preventDefault()
		console.log(e.target)
		try {
			dispatch(searchRecipes(keyword))
		} catch (error) {
			console.log('errror', error)
		}
	}
	const recipes = useSelector(selectSearchRecipes)

	return (
		<div className={btnColor === 'black' ? css.searchBarContainer : css.searchBarContainerGreen}>
			<form className={css.bg}>
				<input
					className={css.searchBarInput}
					type='text'
					placeholder='Find recipe'
					onChange={e => setKeyword(e.target.value)}
				/>
				<button
					className={btnColor === 'black' ? css.searchBarBtn : css.searchBarBtnGreen}
					type='submit'
					onClick={e => handleSearch(e)}
				>
					Search
				</button>
			</form>
		</div>
	)
}

SearchBar.propTypes = {
	btnColor: PropTypes.string,
}

export default SearchBar
