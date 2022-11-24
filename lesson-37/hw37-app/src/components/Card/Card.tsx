import {IModels} from "../../App"
import './Card.scss'

const Card = ({title, text, date, image}: IModels) => {
    return (
        <>
            <div className='card'>
                <h1>{title}</h1>
                <p>{text}</p>
                <img className='card__img' src={image} alt={""}/>
                <time>{date}</time>
            </div>
        </>
    )
}

export default Card