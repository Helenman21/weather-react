import React from "react";
import './Tab-details.css'
function TabDetails() {
	return (
		<div id="tab_02" className="tabs__block">
							<div className="tabs__sity-name">Krasnoyarsk</div>
							<div className="tabs__description temperature">Temperature: 14&deg;</div>
							<div className="tabs__description like">Feels like: 10&deg;</div>
							<div className="tabs__description weather">Weather: Clouds</div>
							<div className="tabs__description sunrise">Sunrise: 03:21</div>
							<div className="tabs__description sunset">Sunset: 18:54</div>
		</div>
	)
}
export default TabDetails;