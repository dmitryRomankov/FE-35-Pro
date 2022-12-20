import React, {ReactNode, useState} from "react"
import styles from "./Tabs.module.scss"

type Props = {
	children?: ReactNode
	currentTab: number
	onChangeCurrentTab: (index: number) => void
}

const Tabs = ({ children, currentTab, onChangeCurrentTab }: Props) => {
	const handleClick = (index: number) => {
		onChangeCurrentTab(index)
	}

	return (
		<ul className={styles.container}>
			{React.Children.map(children, (tab, index) => (
				<li
					className={index === currentTab ? styles.current : undefined}
					onClick={() => handleClick(index)}
				>
					{tab}
				</li>
			))}
		</ul>
	)
}

export default Tabs