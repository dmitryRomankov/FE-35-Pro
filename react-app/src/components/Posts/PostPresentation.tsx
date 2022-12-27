import {Link} from "react-router-dom"
import PostControl from "../PostControl/PostControl"

import {IPost} from "../../interfaces"
import styles from "./PostPresentation.module.scss"

const PostPresentation = ({ id, image, text, date, title }: IPost) => {
	return (
			<div className={styles.container}>
				<Link to={`/blog/${id}`} className={styles.content}>
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
				</Link>

				<PostControl id={id} sizeIcon={20}/>
			</div>
	)
}

export default PostPresentation