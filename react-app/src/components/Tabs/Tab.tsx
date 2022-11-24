import {ReactNode} from "react"
import styles from "./Tab.module.scss"

type Props = {
	label: string
	content?: ReactNode // На будущее
}

const Tab = ({ label }: Props) => {
	return (
		<button className={styles.label}>
			{label}
		</button>
	)
}

export default Tab