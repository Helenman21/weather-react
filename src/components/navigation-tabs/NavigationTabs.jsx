import React from "react";
import TabNow from "../tab-now/Tab-now";
import './NavigationTabs.css';
import { tabsActiv } from "../constans/constans";
function NavigationTabs({ renderTabs, currentTab }) {
	const clazzNameNotActive = "tabs__item";
	const clazzNameActive = "tabs__item item-activ";
	const classesTabNow = currentTab === tabsActiv.activTabNow ? clazzNameActive : clazzNameNotActive
	const classesTabDetails = currentTab === tabsActiv.activTabDetails ? clazzNameActive : clazzNameNotActive;
	const classesTabForecast = currentTab === tabsActiv.activTabForecast ? clazzNameActive : clazzNameNotActive
	return (
		<nav className="tabs__items">
			<span className={classesTabNow} onClick={() => renderTabs(tabsActiv.activTabNow)} > <p>Now</p></span>
			<span className={classesTabDetails} onClick={() => renderTabs(tabsActiv.activTabDetails)} ><p>Details</p></span>
			<span className={classesTabForecast} onClick={() => renderTabs(tabsActiv.activTabForecast)} ><p>Forecast</p></span>
		</nav>
	)
}
export default NavigationTabs;