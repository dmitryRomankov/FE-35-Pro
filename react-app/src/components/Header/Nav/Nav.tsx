import {Link} from "react-router-dom"

import {INav} from "../../../interfaces"
import styles from "./Nav.module.scss"

const navItems = [
	{to: '/', title: 'Home'},
	{to: '/signIn', title: 'Sign In'},
]

const Nav = ({ visible }: INav) => {
	if (!visible) return <></>

	return (
		<ul className={styles.container}>
			{navItems.map(({ to, title }) =>
				<li key={to}>
					<Link to={to}>
						{title}
					</Link>
				</li>
			)}
		</ul>
	)
}

export default Nav