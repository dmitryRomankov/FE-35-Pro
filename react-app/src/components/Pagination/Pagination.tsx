import styles from "./Pagination.module.scss"

const pages = Array.from({ length: 10 }, (_, i) => i + 1)

const Pagination = () => {
	return (
		<ul className={styles.container}>
			{pages.map(page =>
				<li key={page}>{page}</li>
			)}
		</ul>
	)
}

export default Pagination