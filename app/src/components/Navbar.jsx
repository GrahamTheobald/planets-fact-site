import React, { useState } from 'react'
import NavLink from './NavLink'
import './Navbar.css'
export default function Navbar({ data }) {
	const [menuOpen, setMenuOpen] = useState(false)
	var menuBtnClass = 'nav_menu-btn'
	menuBtnClass += menuOpen ? ' open' : ''
	return (
		<nav className='nav'>
			<h1>The Planets</h1>
			<ul className='nav_links'>
				{data.map((d, i) => {
					return <NavLink key={i} title={d.name} index={i} />
				})}
			</ul>
			<img
				className='nav_menu-btn'
				onClick={() => setMenuOpen(!menuOpen)}
				src='./assets/icon-hamburger.svg'
			/>
		</nav>
	)
}
