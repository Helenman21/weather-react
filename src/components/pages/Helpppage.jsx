import React from "react";
import { Link } from 'react-router-dom'
function HelpPage() {
	return (
		<div>			
			<div style={{
				padding: "3rem"
			}}> 
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa
				tempore obcaecati! Mollitia, commodi deleniti!</div>
			{/* <div>
				<Link to='/'>Go home</Link>
			</div> */}
			<Link style={{
				padding: "3rem"
			}}
			 to='/'>Go home</Link>
		</div>
	)
}
export default HelpPage