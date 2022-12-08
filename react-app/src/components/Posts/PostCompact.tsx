import {IPost} from "../../interfaces"
import styles from "./PostCompact.module.scss"
import PostControl from "../PostControl/PostControl";
import React from "react";

const PostCompact = ({ date, title, image,  }: IPost) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
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
			</div>

			<PostControl sizeIcon={14}/>
		</div>
	)
}

export default PostCompact