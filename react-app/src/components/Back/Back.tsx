import styles from "./Back.module.scss"
import {ILabel} from "../../interfaces"

const Back = ({ label }: ILabel) => {
	return (
		<a className={styles.container} href={'/'}>
			<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg>
			{label}
		</a>
	)
}

export default Back