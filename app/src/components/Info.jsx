import React, { useState } from 'react'
import Tab from './Tab'
import Stat from './Stat'
import './Info.css'

export default function Info({ planet }) {
	const {
		name,
		overview,
		structure,
		geology,
		rotation,
		revolution,
		radius,
		temperature,
		images,
	} = planet
	const [tab, setTab] = useState('overview')

	function handleSetTab(selectedTab) {
		setTab(selectedTab)
	}

	let infoData = {}
	let image = ''
	let secondaryImage = ''
	if (tab == 'overview') {
		infoData = overview
		image = images.planet
	} else if (tab == 'structure') {
		infoData = structure
		image = images.internal
	} else if (tab == 'geology') {
		infoData = geology
		image = images.planet
		secondaryImage = images.geology
	}

	const { content, source } = infoData

	return (
		<main>
			<div className='top'>
				<div className='top__image'>
					<img src={image} alt='planet' />
					{secondaryImage && (
						<img
							className='image__secondary'
							src={secondaryImage}
							alt='planet'
						/>
					)}
				</div>
				<div className='top__info'>
					<div className='info__container'>
						<div className='info__copy'>
							<h2 className='copy__title'>{name}</h2>
							<p className='copy__info'>{content}</p>
							<p className='copy__source'>
								Source : <a href={source}>Wikipedia</a>
								<img src='./assets/icon-source.svg' />
							</p>
						</div>
						<div className='top__tabs'>
							<Tab
								handler={handleSetTab}
								tab='overview'
								number='01'
								active={tab == 'overview'}
							/>
							<Tab
								handler={handleSetTab}
								tab='structure'
								number='02'
								active={tab == 'structure'}
							/>
							<Tab
								handler={handleSetTab}
								tab='geology'
								number='03'
								active={tab == 'geology'}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='stats'>
				<Stat title='Rotation Time' stat={rotation} />
				<Stat title='Revolution Time' stat={revolution} />
				<Stat title='Radius' stat={radius} />
				<Stat title='Average Temp' stat={temperature} />
			</div>
		</main>
	)
}
