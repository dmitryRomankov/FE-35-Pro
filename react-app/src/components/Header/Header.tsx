import Hamburger from "./Hamburger/Hamburger"
import SearchForm from "./SearchForm/SearchForm"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import Profile from "./Profile/Profile"

import styles from "./Header.module.scss"

const Header = () => {
	return (
		<header className={styles.container}>
			<Hamburger/>
			<SearchForm/>
			<ThemeSwitch/>
			<Profile/>
		</header>
	)
}

export default Header