import React from "react";
import './NavigationTabs.css'
function NavigationTabs(){
	return(
		<nav className="tabs__items">
							<a href="#tab_01" className="tabs__item"> <span>Now</span> </a>
							<a href="#tab_02" className="tabs__item"> <span>Details</span> </a>
							<a href="#tab_03" className="tabs__item"> <span className="tab-forecast">Forecast</span> </a>
		</nav>
	)
}
export default NavigationTabs;