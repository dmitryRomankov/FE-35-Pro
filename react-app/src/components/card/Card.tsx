import {Link} from "react-router-dom"

import {useAppDispatch, useAppSelector} from "../../store"
import Icon from "../icon/Icon"
import {setFavorites} from "../../features/postingSlice"

import {IModels} from "../../interfaces"
import './Card.scss'

const Card = ({id, title, text, date, image}: IModels) => {
  const dispatch = useAppDispatch()
  const postFavorites = useAppSelector((state) => state.postingReducer.favorites)

  const handleAddFavorites = () => {
    dispatch(
      setFavorites(id)
    )
  }


  return (
    <div className={'card'}>
      <Link to={`/blog/${id}`}>
        <img src={image} alt={""}/>
        <time>{date}</time>
        <h1>{title}</h1>
        <p>{text}</p>
      </Link>

      <Icon name={'favorites'} className={postFavorites.includes(id)? 'active' : undefined} onClick={handleAddFavorites} />
    </div>
  )
}

export default Card