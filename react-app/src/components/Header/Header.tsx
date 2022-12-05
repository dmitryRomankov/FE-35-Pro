import {useState} from "react"

import Hamburger from "./Hamburger/Hamburger"
import Nav from "./Nav/Nav"
import SearchForm from "./SearchForm/SearchForm"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import Profile from "./Profile/Profile"

import styles from "./Header.module.scss"

const Header = () => {
	const [visible, setVisible] = useState(false)

	const handleChange = () => setVisible(!visible)

	return (
		<header className={styles.container}>
			<Hamburger onChange={handleChange}/>
			<Nav visible={visible}/>
			<SearchForm/>
			<ThemeSwitch/>
			<Profile/>
		</header>
	)
}

export default Header