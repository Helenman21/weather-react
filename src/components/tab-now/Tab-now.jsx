import React from "react";
import './Tab-now.css';


function TabNow({ value, temprature, icon, addFavoritCity }) {
	
	return (
		<div id="tab_01" className="tabs__block">
			<div className="tabs__row">
				<span className="tabs__temperature">{ `${temprature}°` } </span><br />
				<span className="image-weather"><img className="cloudy" src={ icon } alt="облачко" />  </span>
				<span className="sity-name">{ value }</span>
				<span className="tabs__like" onClick={() => addFavoritCity(value) } >&hearts;</span>
			</div>
		</div>);
}
export default TabNow;