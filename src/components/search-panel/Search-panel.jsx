import React, { useState } from "react";
import './Search-panel.css';
//import img from '../img.serch.png'

function SearchPanel({ handleOnSubmit }) {
	const [value, setValue] = useState('');
	function mySubmit(e){
		e.preventDefault();
		handleOnSubmit(value);		
	}
	return (
		<form className="form" action="#" onSubmit={ mySubmit }>
			<input className="entry-field" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Krasnoyarsk" />
			<button>
				<img className="img-search" src="" alt="поиск" />
			</button>
		</form>
	)
}
export default SearchPanel;