import {IHeader} from "../../interfaces"

import './Header.scss'

const Header = ({children}: IHeader) => {
  return (
    <div className={'header'}>
      {children}
    </div>
  )
}
export default Header