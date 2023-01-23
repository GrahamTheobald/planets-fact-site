import React, { useState } from 'react'
import NavLink from './NavLink'
import './Navbar.css'
export default function Navbar({ data }) {
	const [menuOpen, setMenuOpen] = useState(true)
	let menuBtnClass = 'nav_menu-btn'
	let linkClass = 'nav_links'
	menuBtnClass += menuOpen ? ' open' : ''
	linkClass += menuOpen ? ' open' : ''
	function handleMenuClose() {
		setMenuOpen(false)
	}
	return (
		<nav className='nav'>
			<h1>The Planets</h1>
			<ul className={linkClass}>
				{data.map((d, i) => {
					return (
						<NavLink
							key={i}
							title={d.name}
							index={i}
							menuClose={handleMenuClose}
						/>
					)
				})}
			</ul>
			<img
				className={menuBtnClass}
				onClick={() => setMenuOpen(!menuOpen)}
				src='./assets/icon-hamburger.svg'
			/>
		</nav>
	)
}
