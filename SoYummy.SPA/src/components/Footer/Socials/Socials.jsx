import css from './Socials.module.css'
const Socials = () => {
	return (
		<div className={css.icons}>
			<svg width='20' height='20' className={css.socialIcon}>
				<use href='/src/images/icomoon/socials.svg#fb'></use>
			</svg>
			<svg width='20' height='20' className={css.socialIcon}>
				<use href='/src/images/icomoon/socials.svg#yt'></use>
			</svg>
			<svg width='20' height='20' className={css.socialIcon}>
				<use href='/src/images/icomoon/socials.svg#x'></use>
			</svg>
			<svg width='20' height='20' className={css.socialIcon}>
				<use href='/src/images/icomoon/socials.svg#insta'></use>
			</svg>
		</div>
	)
}

export default Socials
