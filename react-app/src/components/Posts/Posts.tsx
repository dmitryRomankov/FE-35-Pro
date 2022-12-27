import {useState} from "react"
import useAppSelector from "../../hooks/useAppSelector"

import Tab from "../Tabs/Tab"
import Tabs from "../Tabs/Tabs"
import PostPresentation from "./PostPresentation"
import Post from "./Post"
import PostCompact from "./PostCompact"
import Title from "../Title/Title"

import styles from "./Posts.module.scss"

const Posts = () => {
	const posts = useAppSelector((state) => state.postsReducer.posts)
	const favorites = useAppSelector((state) => state.postsReducer.favorites)
	const popular = useAppSelector((state) => state.postsReducer.popular)

	const [currentTab, setCurrentTab] = useState(0)

	const [postPresentation, ...rest] = [
		posts,
		posts.filter(post => favorites.includes(post.id)),
		posts.filter(post => popular.includes(post.id)),
	][currentTab]

	return (
		<>
			<Tabs currentTab={currentTab} onChangeCurrentTab={setCurrentTab}>
				<Tab label='All'/>
				<Tab label='My favorites'/>
				<Tab label='Popular'/>
			</Tabs>

			{!Boolean(postPresentation) &&
				<Title text={'Posts not found'}/>
			}

			{Boolean(postPresentation) &&
				<div className={styles.container}>
					<div className={styles.main}>
						<PostPresentation {...postPresentation}/>

						<div className={styles.posts}>
							{rest.map((post) =>
								<Post key={post.id} {...post}/>
							)}
						</div>
					</div>

					<div className={styles.postsCompact}>
						{rest.map((post) =>
							<PostCompact key={post.id} {...post}/>
						)}
					</div>
				</div>
			}
		</>
	)
}

export default Posts