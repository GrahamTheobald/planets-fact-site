import React from 'react'

export default function Stat({ title, stat }) {
	return (
		<div className='stats__stat'>
			<p className='stat__title'>{title}</p>
			<p className='stat__info'>{stat}</p>
		</div>
	)
}
