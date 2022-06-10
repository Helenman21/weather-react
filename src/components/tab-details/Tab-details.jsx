import React from "react";
import './Tab-details.css'
function TabDetails({ value, temprature, feels_like, sunset, sunrise, weather }) {
	return (
		<div id="tab_02" className="tabs__block">
							<div className="tabs__sity-name">{ value }</div>
							<div className="tabs__description temperature">{ `Temperature: ${temprature}` }</div>
							<div className="tabs__description like">{ `Feels_like: ${feels_like}` }</div>
							<div className="tabs__description weather">{ `Weather: ${weather}` }</div>
							<div className="tabs__description sunrise">{ `Sunrise: ${sunrise}` } </div>
							<div className="tabs__description sunset"> { `Sunset: ${sunset}` } </div>
		</div>
	)
}
export default TabDetails;