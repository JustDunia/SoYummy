import css from '../UserLogoModal/UserLogoModal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/auth.operations'
import { useNavigate } from 'react-router-dom'

const UserLogoModal = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await dispatch(logOut()).unwrap()
			navigate('welcome')
		} catch (error) {
			console.error('Error during logout:', error)
		}
	}
	return (
		<div className={css.userLogoModalContainer}>
			<div>
				<div className={css.userLogoModalEditProfile}>
					<span className={css.userLogoModalTxt}>Edit Profile </span>
					<img src={'/src/images/commonSvgImg/edit_pen.svg'} alt='pen icon' />
				</div>

				<picture>
					{/* Desktop from 1200px */}
					<source
						srcSet={'/src/images/commonSvgImg/btn_logout_desk.svg'}
						media='(min-width: 1440px)'
					/>
					{/* Tablet from 768 px */}
					<source
						srcSet={'/src/images/commonSvgImg/btn_logout_tab.svg'}
						media='(min-width: 768px)'
					/>
					{/* Phone from 320  */}
					<img
						className={css.logoutBtn}
						src={'/src/images/commonSvgImg/btn_logout_mob.svg'}
						alt='Logout button'
						onClick={() => handleLogout()}
					/>
				</picture>
			</div>
		</div>
	)
}

export default UserLogoModal
