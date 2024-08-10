import React from 'react'
import { Link } from 'react-router-dom'
import ComponenteUseState from '../components/ComponenteUseState'
import ComponenteUserReducer from '../components/ComponenteUserReducer'
import ComponenteUseEffect from '../components/ComponenteUseEffect'

const Home = () => {

	return (
		<div>
			<ComponenteUseState />
			<ComponenteUserReducer />
			<ComponenteUseEffect />
		</div>
	)
}

export default Home