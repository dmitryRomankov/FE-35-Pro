import {Link} from "react-router-dom"
import PostControl from "../PostControl/PostControl"

import {IPost} from "../../interfaces"
import styles from "./PostPresentation.module.scss"

const PostPresentation = ({ id, image, text, date, title }: IPost) => {
	return (
		<Link to={`/blog/${id}`}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div>
						<time className={styles.date}>
							{date}
						</time>

						<h2 className={styles.title}>
							{title}
						</h2>

						<p className={styles.description}>
							{text}
						</p>
					</div>

					<img
						src={image}
						className={styles.poster}
						alt={title}
					/>
				</div>

				<PostControl sizeIcon={20}/>
			</div>
		</Link>
	)
}

export default PostPresentation