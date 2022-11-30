import React, { useState } from 'react';
import { menuLinks } from '../../constants';
import './styles.scss'

export const Menu = () => {
	const [menuOpen, setMenuOpen] = useState(true);

	const handleToggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<ul className={menuOpen ? "menu-list" : "menu-list menu-list--closed"}>
			<h3 onClick={handleToggleMenu}>Menu</h3>
			{menuLinks.map((menu) => {
				return (
					<li className="menu-list__item" key={menu.id}>
						<a className="menu-list__link" href="#">{menu.linkName}</a>
					</li>
				)
			})}</ul>
	)
};
