import {ReactNode} from "react"

interface IPost {
	id: number
	image?: string
	text: string
	date: string
	lesson_num?: number
	title: string
	author?: number
}

interface IGetPosts {
	results: IPost[]
}

interface IPostsInitialState {
	posts: IPost[]
	favorites: number[]
	popular: number[]
	likes: any
	loading: boolean
	error: string
}

interface ILabel {
	label: string
}


interface IForm {
	onChange: (state: boolean) => void
}

interface IPostControl {
	id: number
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

interface IPopUpProps {
	children: ReactNode
	visiblePopUp: boolean
	onChange: () => void
}

export type {
	IPost,
	IGetPosts,
	IPostsInitialState,
	ILabel,
	IForm,
	IPostControl,
	IThemeProvider,
	IThemeContext,
	IHamburger,
	INav,
	IPopUpProps,
}