import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"

import Layout from "../../components/Layout/Layout"
import Back from "../../components/Back/Back"
import Title from "../../components/Title/Title"
import PostControl from "../../components/PostControl/PostControl"
import PostPagination from "../../components/Pagination/PostPagination"
import PopUp from "../../components/PopUp/PopUp"

import {getPost} from "../../features/postThunk"
import styles from "../../styles/pages/blog/read.module.scss"


const Read = () => {
	const {id} = useParams()
	const dispatch = useAppDispatch()

	const post = useAppSelector((state) => state.postsReducer.post)
	const loading = useAppSelector((state) => state.postsReducer.loading)
	const error = useAppSelector((state) => state.postsReducer.error)

	useEffect(() => {
		dispatch(
			getPost(Number(id))
		)
	}, [])

	const [visiblePopUp, setVisiblePopUp] = useState(false)

	const handleTogglePopUp = () => {
		setVisiblePopUp(!visiblePopUp)
	}

	if (Boolean(error)) {
		return <Title text={error}/>
	}

	return (
		<Layout>
			<Back label='Back to posts'/>

			{loading &&
				<Title text={'Loading...'}/>
			}

			{!loading && !post &&
				<Title text={'Post not found'}/>
			}

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