import {ChangeEvent, memo, useState} from "react"
import styles from "./SearchForm.module.scss"

const SearchForm = () => {
	const [input, setInput] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
	const handleClearInput = () => setInput('')

	return (
		<>
			<label className={styles.container}>
				<input type='search' placeholder='Search ...' value={input} className={styles.input} onChange={handleChange}/>

				<button className={styles.clear} onClick={handleClearInput}>
					<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				</button>
			</label>

			<button className={styles.start}>
				<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
			</button>
		</>
	)
}

export default memo(SearchForm)