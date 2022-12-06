import styles from "./PostPagination.module.scss"

const PostPagination = () => {
	return (
		<div className={styles.container}>
			<a href={'/'} className={styles.pageButton}>
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="15 6 9 12 15 18"></polyline></svg>

				<div>
					<div className={styles.titleButton}>
						Previous post
					</div>

					<div className={styles.titlePost}>
						Title previous post here
					</div>
				</div>
			</a>

			<a href={'/'} className={styles.pageButton}>
				<div className={styles.next}>
					<div className={styles.titleButton}>
						Next post
					</div>

					<div className={styles.titlePost}>
						Title next post here
					</div>
				</div>

				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>
			</a>
		</div>
	)
}

export default PostPagination