interface IPost {
	id?: number
	image?: string
	text: string
	date: string
	lesson_num?: number
	title: string
	author?: number
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

export type {
	IPost,
	ILabel,
	IForm,
	IPostControl,
}