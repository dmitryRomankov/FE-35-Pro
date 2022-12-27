import {useEffect, useState} from "react"

import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"

import Tab from "../Tabs/Tab"
import Tabs from "../Tabs/Tabs"
import PostPresentation from "./PostPresentation"
import Post from "./Post"
import PostCompact from "./PostCompact"
import Title from "../Title/Title"

import {getPosts} from "../../features/postsThunk"

import styles from "./Posts.module.scss"

const Posts = () => {
	const dispatch = useAppDispatch()

	const posts = useAppSelector((state) => state.postsReducer.posts)
	const favorites = useAppSelector((state) => state.postsReducer.favorites)
	const popular = useAppSelector((state) => state.postsReducer.popular)
	const loading = useAppSelector((state) => state.postsReducer.loading)
	const error = useAppSelector((state) => state.postsReducer.error)

	const [currentTab, setCurrentTab] = useState(0)

	useEffect(() => {
		dispatch(
			getPosts(20)
		)
	}, [])

	const [postPresentation, ...rest] = [
		posts,
		posts.filter(post => favorites.includes(post.id)),
		posts.filter(post => popular.includes(post.id)),
	][currentTab]

	if (Boolean(error)) {
		return <Title text={error}/>
	}

	return (
		<>
			<Tabs currentTab={currentTab} onChangeCurrentTab={setCurrentTab}>
				<Tab label='All'/>
				<Tab label='My favorites'/>
				<Tab label='Popular'/>
			</Tabs>

			{loading &&
				<Title text={'Loading...'}/>
			}

			{!loading && !postPresentation &&
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