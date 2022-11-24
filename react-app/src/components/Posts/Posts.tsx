import db from "../../db/db.json"

import PostPresentation from "./PostPresentation"
import Post from "./Post"
import PostCompact from "./PostCompact"

import styles from "./Posts.module.scss"

const Posts = () => {
	const [postPresentation, ...rest] = db.results ?? []

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<PostPresentation {...postPresentation}/>

				<div className={styles.posts}>
					{rest.map(({ id, ...rest }) => <Post key={id} {...rest}/>)}
				</div>
			</div>

			<div className={styles.postsCompact}>
				{rest.map(({ id, ...rest }) => <PostCompact key={id} {...rest}/>)}
			</div>
		</div>
	)
}

export default Posts