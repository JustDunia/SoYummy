import css from "../UserLogo/UserLogo.module.css";
import { useState } from "react";
import UserLogoModal from "../UserLogoModal/UserLogoModal";

const UserLogo = () => {
	const [modalUserLogoOpen, setModalUserLogoOpen] = useState(false);

	return (
		<div className={css.userContainer}>
			<div className={css.userLogoContainer}>
				<img
					className={css.userLogo}
					src={"../src/images/default/default-small.jpg"}
					alt="user logo"
					onClick={() => setModalUserLogoOpen(!modalUserLogoOpen)}
				/>
			</div>
			{modalUserLogoOpen && <UserLogoModal /> } 
			<span className={css.username}> Username </span>
		</div>
	);
};

export default UserLogo;
