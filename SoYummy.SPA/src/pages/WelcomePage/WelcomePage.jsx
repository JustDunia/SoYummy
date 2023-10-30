import styles from './WelcomePage.module.css'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
	return (
		<div className={styles.WelcomeImage}>
			<div className={styles.Container}>
				<h3 className={styles.BigText}>Welcome to the app!</h3>
				<p className={styles.MainText}>
					This app offers more than just a collection of recipes - it is designed to be your very
					own digital cookbook. You can easily save and retrieve your own recipes at any time.
				</p>
			</div>
			<div className={styles.ButtonBox}>
				<Link to='/register' className={styles.StyledLink1}>
					Registration
				</Link>
				<Link to='/signin' className={styles.StyledLink2}>
					Sign in
				</Link>
			</div>
		</div>
	)
}

export default WelcomePage
