import {ILayout} from "../../interfaces"

import "./Layout.scss"
const Layout = ({ children }: ILayout) => {
  return (
    <div className={'layout'}>
      {children}
    </div>
  )
}

export default Layout