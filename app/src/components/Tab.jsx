import React from 'react'

export default function Tab({ tab, active, handler, number }) {
	let className = 'tabs__tab'
	className += active ? ' active' : ''
	return (
		<div onClick={() => handler(tab)} className={className}>
			<p className='tab__number'>{number}</p>
			<p>{tab}</p>
		</div>
	)
}
