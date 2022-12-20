import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"

import {addFavorites, decreaseLike, increaseLike} from "../../features/postsSlice"

import {IPostControl} from "../../interfaces"
import styles from "./PostControl.module.scss"

const PostControl = ({ id, sizeIcon }: IPostControl) => {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector((state) => state.postsReducer.favorites)
	const likes = useAppSelector((state) => state.postsReducer.likes)

	const like = likes[id] ?? 0

	const handleIncreaseLike = () => {
		dispatch(
			increaseLike(id)
		)
	}

	const handleDecreaseLike = () => {
		dispatch(
			decreaseLike(id)
		)
	}

	const handleAAddFavorites = () => {
		dispatch(
			addFavorites(id)
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.likes}>
				<svg onClick={handleIncreaseLike} xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path></svg>
				{like}
				<svg onClick={handleDecreaseLike} xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path></svg>
			</div>

			<div className={styles.controls}>
				<svg onClick={handleAAddFavorites} xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} viewBox="0 0 24 24" strokeWidth="2" stroke={!favorites.includes(id) ? 'currentColor' : 'var(--color-violet)'} fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" width={sizeIcon} height={sizeIcon} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle></svg>
			</div>
		</div>
	)
}

export default PostControl