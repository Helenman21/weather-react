import React, { useState } from "react";
import './Search-panel.css';
import search from '../img/search.png';
import { formattingText } from "../Utils/Utils";

function SearchPanel({ handleOnSubmit }) {
	const [value, setValue] = useState('');
	function mySubmit(e){
		e.preventDefault();	
		handleOnSubmit(formattingText(value))
	}
	return (
		<form className="form" action="#" onSubmit={ mySubmit }>
			<input className="entry-field" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Krasnoyarsk" />
			<button>
				<img className="img-search" src={ search } alt="поиск" />
			</button>
		</form>
	)
}
export default SearchPanel;