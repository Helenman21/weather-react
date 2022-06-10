import React from "react";
import TabNow from "../tab-now/Tab-now";
import TabDetails from "../tab-details/Tab-details";
import TabForecast from "../tab-forecast/Tab-forecast";
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import './Tabs.css'
function Tabs({ value, 
						temprature, 
						icon, 
						feels_like, 
						sunrise, 
						sunset, 
						weather,
						tabForecast  
						 }){
	return(
		<div className="first-block">
			<TabNow value={ value } 
					  temprature={ temprature } 
					  icon={ icon } />
			<TabDetails value={ value } 
							temprature={ temprature } 
							feels_like={ feels_like }
							sunrise={ sunrise }
							sunset={ sunset }
							weather={ weather } />
			<TabForecast value={ value } 
							tabForecast={ tabForecast } />
			<NavigationTabs />
		</div>
	)
}
export default Tabs;