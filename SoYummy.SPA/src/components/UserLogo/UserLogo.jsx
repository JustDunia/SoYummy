import css from '../UserLogo/UserLogo.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import UserLogoModal from '../UserLogoModal/UserLogoModal'
import { selectUser } from '../../redux/auth/auth.selectors'

const UserLogo = () => {
	const [modalUserLogoOpen, setModalUserLogoOpen] = useState(false)
	const user = useSelector(selectUser)

	return (
		<div className={css.userContainer}>
			<div className={css.userLogoContainer}>
				<img
					className={css.userLogo}
					src={'../src/images/boy.webp'}
					alt='user logo'
					onClick={() => setModalUserLogoOpen(!modalUserLogoOpen)}
				/>
			</div>
			{modalUserLogoOpen && <UserLogoModal />}
			<span className={css.username}> {user.username}</span>
		</div>
	)
}

export default UserLogo
