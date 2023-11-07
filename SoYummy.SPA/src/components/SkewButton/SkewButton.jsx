import css from './SkewButton.module.css'

const SkewButton = props => {
	const { onClick, text, isSmaller } = props
	return (
		<button
			className={isSmaller ? `${css.skewButton} ${css.smallerButton}` : css.skewButton}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default SkewButton
