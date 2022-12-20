import {Link} from "react-router-dom"

import PostControl from "../PostControl/PostControl"

import {IPost} from "../../interfaces"
import styles from "./Post.module.scss"

const Post = ({id, date, title, image }: IPost) => {
	return (
		<div className={styles.container}>
			<Link to={`/blog/${id}`}>
				<img
					src={image}
					className={styles.poster}
					alt={title}
				/>

				<time className={styles.date}>
					{date}
				</time>

				<h2 className={styles.title}>
					{title}
				</h2>
			</Link>

			<PostControl id={id} sizeIcon={16}/>
		</div>
	)
}

export default Post