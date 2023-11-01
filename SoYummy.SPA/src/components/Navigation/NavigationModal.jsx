import css from "./NavigationModal.module.css";
import { NavLink } from "react-router-dom";

const NavigationModal = () => {
const imagePath = "/src/images/burgerMenu/";
	
	return (
		<div className={css.navModalContainer}>
			<ul className={css.navModalList}>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLinkActive : css.navModalLink
						}
						to="/categories"
					>
						<span>Categories</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLinkActive : css.navModalLink
						}
						to="/add"
					>
						<span>Add recipes</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLinkActive : css.navModalLink
						}
						to="/recipe/:recipeId"
					>
						<span>My recipes</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLinkActive : css.navModalLink
						}
						to="/favorite"
					>
						<span>Favorites</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLinkActive : css.navModalLink
						}
						to="/shopping-list"
					>
						<span>Shopping list</span>
					</NavLink>
				</li>
				<li className={css.navModalItem}>
					<NavLink
						className={({ isActive }) =>
							isActive ? css.navModalLinkActive : css.navModalLink
						}
						to="/search"
					>
						<span>Search</span>
					</NavLink>
				</li>
			</ul>
			<picture>
				{/* Tablet from 768 px */}
				<source
					srcSet={`${imagePath}burger_menu_spinach_bottom_tab_1x.png,
						${imagePath}burger_menu_spinach_bottom_tab_2x.png 2x`}
					media="(min-width: 768px)"
				/>
				{/* Phone from 320  */}
				<img
					className={css.navModalBgSpinach}
					srcSet={`${imagePath}burger_menu_spinach_bottom_mob_2x.png 2x`}
					src={`${imagePath}burger_menu_spinach_bottom_mob_1x.png`}
					alt="Young spinach leafs"
				/>
			</picture>
		</div>
	);
};

export default NavigationModal;
