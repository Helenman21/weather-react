import React from "react";
import TabNow from "../tab-now/Tab-now";
import TabDetails from "../tab-details/Tab-details";
import TabForecast from "../tab-forecast/Tab-forecast";
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import './Tabs.css'
function Tabs(){
	return(
		<div className="first-block">
			<TabNow />
			<TabDetails />
			<TabForecast />
			<NavigationTabs />
		</div>
	)
}
export default Tabs;