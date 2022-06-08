import React from "react";
import './Tab-forecast.css'
function TabForecast(){
	return (
		<div id="tab_03" className="tabs__block">
							<div className="scroll">
								<div className="tabs__sity-name months">Krasnoyarsk</div>
								<div id="cloneForecast" className="tabs__sity-name ">
									<div className="tabs__weather">
										<div className="tabs__date">00.12.00</div>
										<div className="tabs__clock">11:11</div>
										<div className="tabs__temperatures">14&deg;</div>
										<div className="tabs__likes">&hearts;</div>
										<div className="tabs__rain"></div>
										<img className="img-rain" src="" alt="дождь" />
									</div>
								</div>
							</div>
						</div>
	)
}
export default TabForecast;