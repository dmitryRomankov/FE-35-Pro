import {IModels} from "../../interfaces"
import './Card.scss'
import {Link} from "react-router-dom";

const Card = ({id, title, text, date, image}: IModels) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className={'card'}>
        <img src={image} alt={""}/>
        <time>{date}</time>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default Card