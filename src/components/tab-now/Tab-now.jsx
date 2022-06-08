import React from "react";
import './Tab-now.css'

function TabNow() {
	return (
		<div id="tab_01" className="tabs__block">
			<div className="tabs__row">
				<span className="tabs__temperature">14&deg;</span><br />
				<span className="image-weather"><img className="cloudy" src="" alt="облачко" />  </span>
				<span className="sity-name">Krasnoyarsk</span>
				<span className="tabs__like">&hearts;</span>
			</div>
		</div>);
}
export default TabNow;