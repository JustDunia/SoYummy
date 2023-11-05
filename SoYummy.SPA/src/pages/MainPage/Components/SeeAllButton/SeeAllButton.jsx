import css from './SeeAllButton.module.css'

const SeeAllButton = props => {
	const { onClick } = props
	return (
		<button className={css.seeAllButton} onClick={onClick}>
			See all
		</button>
	)
}

export default SeeAllButton
