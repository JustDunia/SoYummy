import css from './SkewButton.module.css'

const SkewButton = props => {
	const { onClick, text } = props
	return (
		<button className={css.skewButton} onClick={onClick}>
			{text}
		</button>
	)
}

export default SkewButton
