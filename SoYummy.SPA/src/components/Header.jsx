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
			<h1 className={css.soYummyTag}>
				<span className={css.soPart}>So</span>
				<span className={css.yummyPart}>Yummy</span>
			</h1>
			<span className={css.whatToCookTxt}>
				&quot;What to cook?&quot; is not only a recipe app, it is, in
				fact, your cookbook. You can add your own recipes to save them
				for the future.
			</span>
			<img
				className={css.smallSpinach}
				src={smallSpinach}
				alt="Young spinach leafs"
			/>
			<img className={css.bowl} src={bowl} alt="Bowl full of veg" />
			<img
				className={css.bigSpinach}
				src={bigSpinach}
				alt="Young spinach leafs"
			/>
			<img className={css.bgHeader} src={bgHeader} alt="Small spinach" />
		</div>
	);
};

export default Header;
