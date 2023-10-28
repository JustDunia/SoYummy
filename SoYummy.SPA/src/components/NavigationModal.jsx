import css from "../components/NavigationModal.module.css";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import modalBgSpinach from "../images/burgerMenu/burger_menu_spinach_bottom_mob_1x.png";

const NavigationModal = () => {
	return (
		<div className={css.navModalContainer}>
			<ul className={css.navModalList}>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLink : ""
						}
						to={Home}
					>
						<span>Categories</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLink : ""
						}
						to={Home}
					>
						<span>Add recipes</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLink : ""
						}
						to={Home}
					>
						<span>My recipes</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLink : ""
						}
						to={Home}
					>
						<span>Favorites</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLink : ""
						}
						to={Home}
					>
						<span>Shopping list</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLink : ""
						}
						to={Home}
					>
						<span>Search</span>
					</NavLink>
				</li>
			</ul>
			<img
				className={css.navModalBgSpinach}
				src={modalBgSpinach}
				alt="Young spinach leafs"
			/>
		</div>
	);
};

export default NavigationModal;
