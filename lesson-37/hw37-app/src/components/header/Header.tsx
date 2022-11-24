import "./Header.scss"
import {Props} from "../../interfaces/interfaces"

const Header = ({ children }: Props) => {
    return(
        <div className='header'>
            {children}
        </div>
    )
}
export default Header