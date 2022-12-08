import {ReactNode} from "react"

import styles from "./Layout.module.scss"

type Props = {
	children?: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default Layout