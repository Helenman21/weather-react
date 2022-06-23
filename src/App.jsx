import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import WholeBlock from './components/wholeBlock/WholeBlock'

function App() {
	return (
		<div>
			<WholeBlock />
			<nav
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "2rem",
				}}
			>
				<Link style={{
					padding: "2rem"
				}}
				to='/help'>Help</Link>
				
				<Outlet />
			</nav>
		</div>
	)
}

export default App
