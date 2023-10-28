import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import css from "./Header.module.css";
import smallSpinach from "../images/soYummy/spinach_top_left_1x_mob.png";
import bowl from "../images/soYummy/bowl_veg_top_right_1x_mob.png";
import bigSpinach from "../images/soYummy/spinach_top_right_1x_mob.png";
import bgHeader from "../images/soYummy/bg_top_right_1x_mob.png";


const Header = () => {
	return (
		<div className={css.headerContainer}>
			<Navigation />
			<img
				className={css.smallSpinach}
				src={smallSpinach}
				alt="Small spinach"
			/>
			<img className={css.bowl} src={bowl} alt="Small spinach" />
			<img
				className={css.bigSpinach}
				src={bigSpinach}
				alt="Small spinach"
			/>
			<img className={css.bgHeader} src={bgHeader} alt="Small spinach" />
		</div>
	);
};

export default Header;
