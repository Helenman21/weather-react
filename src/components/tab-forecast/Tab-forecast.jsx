import React from "react";
import './Tab-forecast.css'
function TabForecast({ value, tabForecast }) {
	let count = 100;
	const elements = tabForecast.map(({ tempForecast,
		dateForecast,
		feelsLikeForecast,
		iconForecast,
		cloudinessForecast,
		clockForecast }) => {
return (<div key={count++} className="tabs__weather">
		<div key={count++} className="tabs__date">{dateForecast}</div>
		<div key={count++} className="tabs__clock">{clockForecast}</div>
		<div key={count++} className="tabs__temperatures">{`Temperature: ${tempForecast}°`}</div>
		<div key={count++} className="tabs__likes">{`Feelse like: ${feelsLikeForecast}°`}</div>
		<div key={count++} className="tabs__rain">{cloudinessForecast}</div>
		<img key={count++} className="img-rain" src={iconForecast} alt="дождь" />
</div>)
})
	return (
		<div id="tab_03" className="tabs__block">
			<div className="scroll">
				<div className="tabs__sity-name months">{value}</div>
				<div id="cloneForecast" className="tabs__sity-name ">
					{elements}
				</div>
			</div>
		</div>
	)
}


export default TabForecast;

