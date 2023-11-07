import css from "../SearchBar/SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ btnColor }) => {
	return (
		<div className={css.searchBarContainer}>
			<form className={css.bg}>
				<input
					className={css.searchBarInput}
					type="text"
					placeholder="Find recipe"
				/>
			</form>
			<button className={css.searchBarBtn} type="submit">
				Search
			</button>
		</div>
	);
};

SearchBar.propTypes = {
	btnColor: PropTypes.string,
};

export default SearchBar;
