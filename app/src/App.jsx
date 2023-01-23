import { useState, useEffect, useContext } from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import data from './data/data.json'
import './App.css'
import React from 'react'

export const HandlerContext = React.createContext({})

function App() {
	const [planetIndex, setPlanetIndex] = useState(0)
	const [className, setClassName] = useState('App')
	const planet = data[planetIndex]

	useEffect(() => {
		const planetName = data[planetIndex].name
		setClassName(`App ${planetName}`)
	}, [planetIndex])

	function handleNavLink(i) {
		setPlanetIndex(i)
	}

	const handlerContextValue = {
		handleNavLink,
	}
	return (
		<div className={className}>
			<HandlerContext.Provider value={handlerContextValue}>
				<Navbar data={data} />
			</HandlerContext.Provider>
			<Info planet={planet} />
		</div>
	)
}

export default App
