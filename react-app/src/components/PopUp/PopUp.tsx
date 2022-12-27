import {IPopUpProps} from "../../interfaces"

import styles from "./PopUp.module.scss"

const PopUp = ({children, visiblePopUp, onChange}: IPopUpProps) => {
	return (
		<>
			{visiblePopUp &&
				<div className={styles.container}>
					<button type={'button'} onClick={onChange} className={styles.close}>
						<svg xmlns="http://www.w3.org/2000/svg" className={styles.closePopUp} width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0 -4l-4 4"></path></svg>
					</button>

					{children}
				</div>
			}
		</>
	)
}

export default PopUp