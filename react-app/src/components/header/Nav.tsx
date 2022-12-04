import {useContext} from "react"
import {Link} from "react-router-dom"

import Icon from "../icon/Icon"

import {ThemeContext} from "../../context/ThemeContext"
import {navLeftItems, navRightItems} from "../../variables"
import './Nav.scss'

const Nav = () => {
  const isTheme = useContext(ThemeContext)

  return (
    <nav className={'header__nav'}>
      <ul className={'header__list'}>
        {navLeftItems.map((item, i) =>
          <li key={i}>
            <Icon name={item.icon} strokeWidth={2}/>
            <Link to={item.to}>{item.text}</Link>
          </li>
        )}
      </ul>

      <ul className={'header__list'}>
        <Icon
          className={'icon__theme'}
          name={isTheme?.theme === 'dark' ? 'sun' : 'moon'}
          onClick={isTheme?.handleTheme}
          strokeWidth={2}
        />

        {navRightItems.map((item, i) =>
          <li key={i}>
            <Icon name={item.icon} strokeWidth={2}/>
            <Link to={item.to}>{item.text}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav