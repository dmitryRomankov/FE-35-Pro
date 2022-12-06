import {ITitle} from "../../interfaces"
import './Title.scss'

const Title = ({text, className}: ITitle) => {
  return <h1 className={`title ${className}`}>{text}</h1>
}

export default Title