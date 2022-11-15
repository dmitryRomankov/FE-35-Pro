import React, {ReactNode, useState} from "react"
import styles from "./Tabs.module.scss"

type Props = {
	children?: ReactNode
}

const TabList = ({ children }: Props) => {
	const [state, setState] = useState(0)

	const handleClick = (index: number) => {
		setState(index)
	}

	return (
		<ul className={styles.container}>
			{React.Children.map(children, (tab, index) => (
				<li
					className={[styles.tab, index === state ? styles.current : undefined].join(' ')}
					onClick={() => handleClick(index)}
				>
					{tab}
				</li>
			))}
		</ul>
	)
}

export default TabList