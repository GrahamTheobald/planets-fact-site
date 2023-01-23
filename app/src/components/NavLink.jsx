import React, { useContext } from 'react'
import { HandlerContext } from '../App'

export default function NavLink({ title, index, menuClose }) {
	const { handleNavLink } = useContext(HandlerContext)
	return (
		<li
			className='nav__link'
			onClick={() => {
				menuClose()
				handleNavLink(index)
			}}
		>
			<div className='link__left'>
				<div className={`link__icon ${title}`}></div>
				<p>{title}</p>
			</div>
			<img
				className='link__chevron'
				src='./assets/icon-chevron.svg'
				alt='chevron'
			/>
		</li>
	)
}
