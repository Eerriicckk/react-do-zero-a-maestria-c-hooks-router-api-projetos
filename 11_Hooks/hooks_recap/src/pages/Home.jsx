import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ComponenteUseState from '../components/ComponenteUseState'
import ComponenteUserReducer from '../components/ComponenteUserReducer'
import ComponenteUseEffect from '../components/ComponenteUseEffect'
import { SomeContext } from '../components/ComponenteUseContext'
import ComponenteUseRef from '../components/ComponenteUseRef'
import ComponenteUseCallback from '../components/ComponenteUseCallback'
import ComponenteUseMemo from '../components/ComponenteUseMemo'
import ComponenteUseLayoutEffect from '../components/ComponenteUseLayoutEffect'
import ComponenteUseImperativeHandle from '../components/ComponenteUseImperativeHandle'

const Home = () => {
	const { contextValue } = useContext(SomeContext)
	return (
		<div>
			<ComponenteUseState />
			<ComponenteUserReducer />
			<ComponenteUseEffect />
			<h2>useContext</h2>
			<p>{contextValue}</p>
			<hr />
			<ComponenteUseRef />
			<ComponenteUseCallback />
			<ComponenteUseMemo />
			<ComponenteUseLayoutEffect />
			<ComponenteUseImperativeHandle />
		</div>
	)
}

export default Home