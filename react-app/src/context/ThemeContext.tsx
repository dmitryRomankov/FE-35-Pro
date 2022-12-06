import {createContext, useEffect, useState} from "react"
import {IThemeContext, IThemeProvider} from "../interfaces"
import {DEFAULT_THEME} from "../variables"

const ThemeContext = createContext<IThemeContext | null>(null)

// !!! Минимально сделал без синхронизации темы устройства и сохранения темы в сторадже
const ThemeProvider = ({ children }: IThemeProvider) => {
	const [theme, setTheme] = useState(DEFAULT_THEME)

	useEffect(() => {
		document.documentElement.dataset.theme = theme
	}, [theme])

	return (
		<ThemeContext.Provider value={{current: theme, onChange: setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeContext,
	ThemeProvider,
}