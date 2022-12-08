import {useParams} from "react-router-dom"

import {useSelector} from "react-redux"
import {postsSelector} from "../../store/selectors"

import Layout from "../../components/Layout/Layout"
import Back from "../../components/Back/Back"
import Title from "../../components/Title/Title"
import PostControl from "../../components/PostControl/PostControl"
import PostPagination from "../../components/Pagination/PostPagination"

import styles from "../../styles/pages/blog/read.module.scss"

import {IPost} from "../../interfaces"

const Read = () => {
	const {id} = useParams()
	const posts = useSelector(postsSelector)
	const post = posts.find((post: IPost) => post.id === Number(id))

	return (
		<Layout>
			<Back label='Back to posts'/>

			{Boolean(post) &&
				<>
					<Title text={post?.title}/>
					<img src={post?.image} className={styles.poster} alt={post?.title}/>
					<p className={styles.description}>{post?.text}</p>

					<PostControl sizeIcon={24}/>
				</>
			}

			{!Boolean(post) &&
				<Title text='Oops. This page does not exist!'/>
			}

			<PostPagination/>
		</Layout>
	)
}

export default Read