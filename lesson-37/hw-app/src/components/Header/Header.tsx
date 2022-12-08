import Hamburger from "../Hamburger/Hamburger"
import SearchForm from "../SearchForm/SearchForm"
import Profile from "../Profile/Profile"

import styles from "./Header.module.scss"

const Header = () => {
	return (
		<header className={styles.container}>
			<Hamburger/>
			<SearchForm/>
			<Profile/>
		</header>
	)
}

export default Header