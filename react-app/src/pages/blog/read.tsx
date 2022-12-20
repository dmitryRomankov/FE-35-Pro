import {useState} from "react"
import {useParams} from "react-router-dom"
import useAppSelector from "../../hooks/useAppSelector"

import Layout from "../../components/Layout/Layout"
import Back from "../../components/Back/Back"
import Title from "../../components/Title/Title"
import PostControl from "../../components/PostControl/PostControl"
import PostPagination from "../../components/Pagination/PostPagination"
import PopUp from "../../components/PopUp/PopUp"

import {IPost} from "../../interfaces"
import styles from "../../styles/pages/blog/read.module.scss"


const Read = () => {
	const {id} = useParams()
	const posts = useAppSelector((state) => state.postsReducer.posts)
	const post = posts.find((post: IPost) => post.id === Number(id))

	const [visiblePopUp, setVisiblePopUp] = useState(false)

	const handleTogglePopUp = () => {
		setVisiblePopUp(!visiblePopUp)
	}

	return (
		<Layout>
			<Back label='Back to posts'/>

			{Boolean(post) &&
				<>
					<Title text={post?.title}/>

					<img
						src={post?.image}
						className={styles.poster}
						alt={post?.title}
						onClick={handleTogglePopUp}
					/>

					<p className={styles.description}>{post?.text}</p>

					<PostControl id={Number(id)} sizeIcon={24}/>
				</>
			}

			{!Boolean(post) &&
				<Title text='Oops. This page does not exist!'/>
			}

			<PostPagination/>

			<PopUp visiblePopUp={visiblePopUp} onChange={handleTogglePopUp}>
				<Title text={post?.title}/>

				<img
					className={styles.poster}
					src={post?.image}
					alt={post?.title}
				/>
			</PopUp>
		</Layout>
	)
}

export default Read