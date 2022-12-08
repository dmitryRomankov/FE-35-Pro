import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

import {postsSelector} from "../../store/selectors"

import PostPresentation from "./PostPresentation"
import Post from "./Post"
import PostCompact from "./PostCompact"

import styles from "./Posts.module.scss"

const Posts = () => {
	const [postPresentation, ...rest] = useSelector(postsSelector)

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<PostPresentation {...postPresentation}/>

				<div className={styles.posts}>
					{rest.map(({ id, ...rest }) =>
						<Link key={id} to={`/blog/${id}`}>
							<Post key={id} {...rest}/>
						</Link>
					)}
				</div>
			</div>

			<div className={styles.postsCompact}>
				{rest.map(({ id, ...rest }) =>
					<Link key={id} to={`/blog/${id}`}>
						<PostCompact key={id} {...rest}/>
					</Link>
				)}
			</div>
		</div>
	)
}

export default Posts