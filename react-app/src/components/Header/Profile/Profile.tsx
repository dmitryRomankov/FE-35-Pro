import Avatar from "../../Avatar/Avatar"

import styles from "./Profile.module.scss"

const Profile = () => {
	return (
		<div className={styles.container}>
			<Avatar src='VP'/>

			<p>Valentin Pyrkin</p>
		</div>
	)
}

export default Profile