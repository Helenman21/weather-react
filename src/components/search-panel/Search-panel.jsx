import React, { useState } from "react";
import './Search-panel.css';
import search from '../img/search.png';
import { formattingText } from "../Utils/Utils";
//import { connect } from 'react-redux';
//import { getCurrentCity } from "../../actions";
import { reducer } from "../../reducer";
import { setCurrentCity } from '../../actions';
import { useDispatch } from "react-redux";
function SearchPanel() {
	const dispatch = useDispatch()
	const [value, setValue] = useState('');
	function mySubmit(e) {
		e.preventDefault();
		dispatch(setCurrentCity(formattingText(value)))
	}
	return (
		<form className="form" action="#" onSubmit={mySubmit}>
			<input className="entry-field" value={value} onChange={ (e) => setValue(e.target.value) } type="text" placeholder="Krasnoyarsk" />
			<button>
				<img className="img-search" src={search} alt="поиск" />
			</button>
		</form>
	)
};
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setCity: (newCurrentCity) => dispatch(currentCityChanged(newCurrentCity)),
// 	}
// };
// export default connect(null, mapDispatchToProps)(SearchPanel)
export default SearchPanel
