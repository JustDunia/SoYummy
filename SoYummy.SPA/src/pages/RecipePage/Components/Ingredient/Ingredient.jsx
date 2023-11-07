import css from './Ingredient.module.css'

const Ingredient = props => {
	const { ingredient } = props
	return (
		<div className={css.ingredientCard}>
			<div className={css.ingredientTitle}>
				<img src={ingredient.id.thb} alt={ingredient.id.ttl} className={css.image} />
				{ingredient.id.ttl}
			</div>
			<div className={css.ingredientCardRight}>
				<div className={css.measure}>{ingredient.measure}</div>
				<div className={css.checkboxWrapper}>
					<input type='checkbox' className={css.checkbox} />
					<svg width='12' height='12' className={css.tickIcon}>
						<use href='/src/images/icomoon/icons.svg#icon-icon-pick'></use>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Ingredient
