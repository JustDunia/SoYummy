import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Logo from "./Logo";
import NavigationModal from "./NavigationModal";
import css from "./Navigation.module.css";

const Navigation = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className={css.navContainer}>
			<Link to={Home}>
				<Logo />
			</Link>
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

			<div className={navOpen ? `${css.navModalOpen}` : `${css.navModalClose}`}>
				<NavigationModal />
			</div>
		</nav>
	);
};

export default Navigation;

// style={{
// top: navOpen ? "0" : "-100%",
// transitionDelay: navOpen ? "0s" : "0s",
// }}
