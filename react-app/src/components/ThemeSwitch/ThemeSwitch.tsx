import {memo, useContext} from "react"
import {ThemeContext} from "../../context/ThemeContext"

import styles from "./ThemeSwitcher.module.scss"

const ThemeSwitch = () => {
	const theme = useContext(ThemeContext)

	const handleChangeTheme = () => {
		theme?.onChange(theme?.current === 'light' ? 'dark' : 'light')
	}

	return (
		<div className={styles.container}>
			<svg xmlns="http://www.w3.org/2000/svg" onClick={handleChangeTheme} width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="16" cy="12" r="2"></circle><rect x="2" y="6" width="20" height="12" rx="6"></rect></svg>
		</div>
	)
}

export default memo(ThemeSwitch)