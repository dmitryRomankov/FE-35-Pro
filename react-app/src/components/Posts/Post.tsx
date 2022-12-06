import {IPost} from "../../interfaces"
import styles from "./Post.module.scss"
import PostControl from "../PostControl/PostControl";
import React from "react";

const Post = ({ date, title, image }: IPost) => {
	return (
		<div className={styles.container}>
			<div>
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
			</div>

			<PostControl sizeIcon={16}/>
		</div>
	)
}

export default Post