import css from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
	const imagePath = "/src/images/soYummy/";

	return (
		<div className={css.headerContainer}>
			<h1 className={css.soYummyTag}>
				<span className={css.soPart}>So</span>
				<span className={css.yummyPart}>Yummy</span>
			</h1>
			<span className={css.whatToCookTxt}>
				&quot;What to cook?&quot; is not only a recipe app, it is, in
				fact, your cookbook. You can add your own recipes to save them
				for the future.
			</span>
			<picture>
				{/* Desktop from 1200px */}
				<source
					srcSet={`${imagePath}spinach_top_left_1x_desk.png,
						${imagePath}spinach_top_left_2x_desk.png 2x`}
					media="(min-width: 1440px)"
				/>
				{/* Tablet from 768 px */}
				<source
					srcSet={`${imagePath}spinach_top_left_1x_tab.png,
						${imagePath}spinach_top_left_2x_tab.png 2x`}
					media="(min-width: 768px)"
				/>
				{/* Phone from 320  */}
				<img
					className={css.smallSpinach}
					srcSet={`${imagePath}spinach_top_left_2x_mob.png 2x`}
					src={`${imagePath}spinach_top_left_1x_mob.png`}
					alt="Young spinach leafs"
				/>
			</picture>

			<div className={css.deliciousBox}>
				<div className={css.deliciousBoxTxt}>
					<span className={css.deliciousBoxTxtSpan1}>
						Delicious and healthy
					</span>
					<span> </span>
					<span className={css.deliciousBoxTxtSpan2}>
						way to enjoy a variety of fresh ingredients in one
						satisfying meal
					</span>
				</div>
				<Link to="/recipe/:recipeId">
					<span className={css.deliciousBoxRecipes}>
						See recipes
						<img
							className={css.arrowRight}
							src={
								"/src/images/commonSvgImg/icon-arrow-narrow-right.svg"
							}
							alt="arrow right"
						/>
					</span>
				</Link>
			</div>

			<picture>
				{/* Desktop from 1200px */}
				<source
					srcSet={`${imagePath}bowl_veg_top_right_1x_desk.png,
						${imagePath}bowl_veg_top_right_2x_desk.png 2x`}
					media="(min-width: 1440px)"
				/>
				{/* Tablet from 768 px */}
				<source
					srcSet={`${imagePath}bowl_veg_top_right_1x_tab.png,
						${imagePath}bowl_veg_top_right_2x_tab.png 2x`}
					media="(min-width: 768px)"
				/>
				{/* Phone from 320  */}

				<img
					className={css.bowl}
					srcSet={`${imagePath}bowl_veg_top_right_2x_mob.png 2x`}
					src={`${imagePath}bowl_veg_top_right_1x_mob.png`}
					alt="Bowl full of veg"
				/>
			</picture>
			<img
				className={css.sprinkleArrow}
				src={"/src/images/commonSvgImg/arrow_header.svg"}
				alt="sprinkle arrow"
			/>

			<picture>
				{/* Desktop from 1200px */}
				<source
					srcSet={`${imagePath}spinach_top_right_1x_desk.png,
						${imagePath}spinach_top_right_2x_desk.png 2x`}
					media="(min-width: 1440px)"
				/>
				{/* Tablet from 768 px */}
				<source
					srcSet={`${imagePath}spinach_top_right_1x_tab.png,
						${imagePath}spinach_top_right_2x_tab.png 2x`}
					media="(min-width: 768px)"
				/>
				{/* Phone from 320  */}

				<img
					className={css.bigSpinach}
					srcSet={`${imagePath}spinach_top_right_2x_mob.png 2x`}
					src={`${imagePath}spinach_top_right_1x_mob.png`}
					alt="Young spinach leafs"
				/>
			</picture>
			<picture>
				{/* Desktop from 1200px */}
				<source
					srcSet={`${imagePath}bg_top_right_1x_desk.png,
						${imagePath}bg_top_right_2x_desk.png 2x`}
					media="(min-width: 1440px)"
				/>
				{/* Tablet from 768 px */}
				<source
					srcSet={`${imagePath}bg_top_right_1x_tab.png,
						${imagePath}bg_top_right_2x_tab.png 2x`}
					media="(min-width: 768px)"
				/>
				{/* Phone from 320  */}

				<img
					className={css.bgHeader}
					srcSet={`${imagePath}bg_top_right_2x_mob.png 2x`}
					src={`${imagePath}bg_top_right_1x_mob.png`}
					alt="bg header"
				/>
			</picture>

			<SearchBar btnColor="black" />
		</div>
	);
};

export default Header;
