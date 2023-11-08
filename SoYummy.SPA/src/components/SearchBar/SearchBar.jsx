import css from "../SearchBar/SearchBar.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchRecipes } from "../../redux/search/search.selectors";
import { searchRecipes } from "../../redux/search/search.operations";

const SearchBar = ({ btnColor }) => {
	const dispatch = useDispatch();
	// console.log(dispatch(searchRecipes("Chicken")));

	const handleSearch = () => {
		try {
			dispatch(searchRecipes("Dessert"))
		} catch (error) {
			console.log("errror", error);
		}
	}

	return (
		<div
			className={
				btnColor === "black"
					? css.searchBarContainer
					: css.searchBarContainerGreen
			}
		>
			<form className={css.bg}>
				<input
					className={css.searchBarInput}
					type="text"
					placeholder="Find recipe"
				/>
			</form>

			<button
				className={
					btnColor === "black"
						? css.searchBarBtn
						: css.searchBarBtnGreen
				}
				type="submit"
				onClick={() => handleSearch()}
			>
				Search
			</button>
		</div>
	);
};

SearchBar.propTypes = {
	btnColor: PropTypes.string,
};

export default SearchBar;
