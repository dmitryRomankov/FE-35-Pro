import {ReactNode} from "react"

interface IPost {
	id?: number
	image?: string
	text: string
	date: string
	lesson_num?: number
	title: string
	author?: number
}

interface IPostsInitialState {
	posts: IPost[]
}

interface ILabel {
	label: string
}


interface IForm {
	onChange: (state: boolean) => void
}

interface IPostControl {
	sizeIcon: number
}

interface IThemeProvider {
	children: ReactNode
}

interface IThemeContext {
	current: string
	onChange: (prev: string) => void
}

interface IHamburger {
	onChange: (prev: any) => void
}

interface INav {
	visible: boolean
}

export type {
	IPost,
	IPostsInitialState,
	ILabel,
	IForm,
	IPostControl,
	IThemeProvider,
	IThemeContext,
	IHamburger,
	INav,
}