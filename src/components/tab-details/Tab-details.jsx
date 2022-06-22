import React from "react";
import './Tab-details.css';
import { useSelector } from 'react-redux';
function TabDetails({ temprature, feels_like, sunset, sunrise, weather }) {
	const nameCity = useSelector(state => state.currentcity); 
	return (
		<div id="tab_02" className="tabs__block">
							<div className="tabs__sity-name">{ nameCity }</div>
							<div className="tabs__description temperature">{ `Temperature: ${temprature}` }</div>
							<div className="tabs__description like">{ `Feels_like: ${feels_like}` }</div>
							<div className="tabs__description weather">{ `Weather: ${weather}` }</div>
							<div className="tabs__description sunrise">{ `Sunrise: ${sunrise}` } </div>
							<div className="tabs__description sunset"> { `Sunset: ${sunset}` } </div>
		</div>
	)
}
export default TabDetails;