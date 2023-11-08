import css from './Footer.module.css'
import { Link } from 'react-router-dom'
import SubscribeForm from './SubscribeForm/SubscribeForm'
import Socials from './Socials/Socials'

const Footer = () => {
	return (
		<div className={css.container}>
			<div className={css.footerHeader}>
				<svg width='32' height='32' className={css.tickIcon}>
					<use href='/src/images/icomoon/icons.svg#icon-logo_desk'></use>
				</svg>
				<p>So Yummy</p>
			</div>
			<ul className={css.links}>
				<li>
					<Link to={'search'}>Ingredients</Link>
				</li>
				<li>
					<Link to={'add'}>Add recipes</Link>
				</li>
				<li>
					<Link to={'my'}>My recipes</Link>
				</li>
				<li>
					<Link to={'favorite'}>Favorite</Link>
				</li>
				<li>
					<Link to={'shopping-list'}>Shopping list</Link>
				</li>
			</ul>
			<SubscribeForm />
			<Socials />
		</div>
	)
}

export default Footer
