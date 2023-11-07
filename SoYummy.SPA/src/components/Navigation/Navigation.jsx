import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo/Logo";
import NavigationModal from "./NavigationModal";
import css from "../Navigation/Navigation.module.css";

const Navigation = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className={css.navContainer}>
			<Link to="/">
				<Logo />
			</Link>
			<div className={css.navBar}>
				<ul className={css.navBarList}>
					<li className={css.navBarItem}>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navBarLinkActive : css.navBarLink
							}
							to="/categories"
						>
							<span>Categories</span>
						</NavLink>
					</li>
					<li className={css.navBarItem}>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navBarLinkActive : css.navBarLink
							}
							to="/add"
						>
							<span>Add recipes</span>
						</NavLink>
					</li>
					<li className={css.navBarItem}>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navBarLinkActive : css.navBarLink
							}
							to="/recipe/:recipeId"
						>
							<span>My recipes</span>
						</NavLink>
					</li>
					<li className={css.navBarItem}>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navBarLinkActive : css.navBarLink
							}
							to="/favorite"
						>
							<span>Favorites</span>
						</NavLink>
					</li>
					<li className={css.navBarItem}>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navBarLinkActive : css.navBarLink
							}
							to="/shopping-list"
						>
							<span>Shopping list</span>
						</NavLink>
					</li>
					<li className={css.navBarItem}>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.searchIconActive : css.searchIcon
							}
							to="/search"
						></NavLink>
					</li>
				</ul>
			</div>

			<div
				className={css.menuToggle}
				onClick={() => setNavOpen(!navOpen)}
			>
				<div className={css.navBurger}>
					<span
						className={
							navOpen
								? `${css.lineTop} ${css.spin}`
								: `${css.lineTop}`
						}
					></span>
					<span
						className={
							navOpen
								? `${css.lineMid} ${css.spin}`
								: `${css.lineMid}`
						}
					></span>
					<span
						className={
							navOpen
								? `${css.lineBot} ${css.spin}`
								: `${css.lineBot}`
						}
					></span>
				</div>
			</div>

			<div
				className={
					navOpen ? `${css.navModalOpen}` : `${css.navModalClose}`
				}
			>
				<NavigationModal />
			</div>
		</nav>
	);
};

export default Navigation;
