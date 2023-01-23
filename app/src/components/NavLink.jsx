import React, { useContext } from 'react'
import { HandlerContext } from '../App'

export default function NavLink({ title, index }) {
	const { handleNavLink } = useContext(HandlerContext)
	return (
		<li className='nav__link' onClick={() => handleNavLink(index)}>
			{title}
		</li>
	)
}
