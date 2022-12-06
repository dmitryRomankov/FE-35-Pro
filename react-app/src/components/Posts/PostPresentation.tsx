import {IPost} from "../../interfaces"
import styles from "./PostPresentation.module.scss"
import PostControl from "../PostControl/PostControl";
import React from "react";

const PostPresentation = ({ image, text, date, title }: IPost) => {
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
	)
}

export default PostPresentation