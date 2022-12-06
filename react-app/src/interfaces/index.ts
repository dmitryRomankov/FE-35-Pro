import {ReactNode} from "react"

interface IHeader {
    children?: ReactNode
}

interface IModels {
    id?: number
    title: string
    text: string
    date: string
    image: string
    lesson_num?: number
    author?: number
}

interface IIcon {
    name: string
    className?: string
    strokeWidth?: number
    onClick?: () => void
}

interface ILayout {
    children: ReactNode,
}

interface ITitle {
    text: string
    className?: string
}

interface IThemeContext {
    theme: string
    handleTheme: () => void
}

interface IThemeProvider {
    children: ReactNode
}

export type {
    IHeader,
    IModels,
    IIcon,
    ILayout,
    ITitle,
    IThemeContext,
    IThemeProvider,
}