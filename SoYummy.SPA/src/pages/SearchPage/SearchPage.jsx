import SearchBar from "../../components/SearchBar/SearchBar";
import css from "./SearchPage.module.css";

const SearchPage = () => {
  return (
		<div>
			<h1 className={css.searchPageTitle}> Search</h1>
			<div className={css.searchContainer}>
				<SearchBar btnColor={"green"} />
			</div>
		</div>
  );
  
};

export default SearchPage;
