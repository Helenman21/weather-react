import React, { useState } from "react";
import TabNow from "../tab-now/Tab-now";
import TabDetails from "../tab-details/Tab-details";
import TabForecast from "../tab-forecast/Tab-forecast";
import NavigationTabs from "../navigation-tabs/NavigationTabs";
import { tabsActiv } from "../constans/constans";
import './Tabs.css'
function Tabs({ value,
	dataWeather,
	arrayTabForecast,
	addFavoritCity,
	colorLike
}) {
	const [currentTab, setCurrentTab] = useState(tabsActiv.activTabNow);
	const renderTabs = (tab) => {
		const {
			temperature,
			icon,
			feels_like,
			sunrise,
			sunset,
			weather
		} = dataWeather;
		switch (currentTab) {
			case tabsActiv.activTabDetails:
				return (
					<TabDetails value={value}
						temperature={temperature}
						feels_like={feels_like}
						sunrise={sunrise}
						sunset={sunset}
						weather={weather}
					/>
				)
			case tabsActiv.activTabForecast:
				return (
					<TabForecast value={value}
						arrayTabForecast={arrayTabForecast}
					/>
				)
			default:
				return (
					<TabNow value={value}
						temperature={temperature}
						icon={icon}
						addFavoritCity={addFavoritCity}
						colorLike={colorLike}
					/>);
		}
	}
	return (
		<div className="first-block">
			{dataWeather && renderTabs()}
			<NavigationTabs renderTabs={(name) => setCurrentTab(name)}
				currentTab={currentTab}
			/>
		</div>
	)
}
export default Tabs;