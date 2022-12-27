import {IPost} from "../../interfaces"
import styles from "./PostCompact.module.scss"
import PostControl from "../PostControl/PostControl";
import React from "react";
import {Link} from "react-router-dom";

const PostCompact = ({id, date, title, image}: IPost) => {
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
				</div>

				<img
					src={image}
					className={styles.poster}
					alt={title}
				/>
			</Link>

			<PostControl id={id} sizeIcon={14}/>
		</div>
	)
}

export default PostCompact