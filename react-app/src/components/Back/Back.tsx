import {useNavigate} from "react-router-dom"
import {ILabel} from "../../interfaces"
import styles from "./Back.module.scss"

const Back = ({ label }: ILabel) => {
	const navigate = useNavigate()

	const handleClick = () => navigate(-1)

	return (
		<button type='button' className={styles.button} onClick={handleClick}>
			<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg>
			{label}
		</button>
	)
}

export default Back