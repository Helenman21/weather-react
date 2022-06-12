import React, { useState } from "react";
import Tabs from "../tabs/Tabs";
import SearchPanel from "../search-panel/Search-panel";
import cloudy from '../img/cloudy.png'
import './WholeBlock.css';
import { fetchCity, fetchTabForecast } from '../DataRequest.js';
import AddedLocation from "../AdedLocation/AddedLocation";
let idFavoritCity = 0;

function WholeBlock() {
	const [value, setValue] = useState('Красноярск')
	const [temprature, setTemprature] = useState('0')
	const [icon, setIcon] = useState(cloudy);
	const [feels_like, setFeels_like] = useState('');
	const [sunrise, setSunrise] = useState('');
	const [sunset, setSunset] = useState('');
	const [weather, setWeather] = useState('');
	const [tabForecast, setTabForecast] = useState([]);
	const [favoritCity, setFavoritCity] = useState([{ id: 509, nameCity: 'тула' }])
	

	const handleOnSubmit = (currentValue) => {
		setValue(currentValue);
		const dataTabNow_Details = fetchCity(currentValue)
			.then((dataCity) => {
				const {
					temp,
					icon,
					feels_like,
					sunrise,
					sunset,
					weather
				} = dataCity;
				setTemprature(temp);
				setIcon(icon);
				setFeels_like(feels_like);
				setSunrise(sunrise);
				setSunset(sunset);
				setWeather(weather);
			}

			)
		const dataTabForecast = fetchTabForecast(currentValue)
			.then((dataForecast) => {
				const newArrDataForecast = [...dataForecast];
				setTabForecast(newArrDataForecast);
			})
	}
	const addFavoritCity = (itemCity) => {
		const item = {
			id: idFavoritCity++,
			nameCity: itemCity
		};
		const newArrayCity = [...favoritCity, item];
		setFavoritCity(newArrayCity);
	}
	const deleteFavoritCity = (id) => {
		const index = favoritCity.findIndex((el) => el.id === id);
		const newArrayCity = [...favoritCity.slice(0, index), ...favoritCity.slice(index + 1)];
		setFavoritCity(newArrayCity)

	}
	return (
		<div className="wrapper">
			<div className="content" >
				<SearchPanel handleOnSubmit={handleOnSubmit} />
				<div className="content__row">
					<Tabs value={value}
						temprature={temprature}
						icon={icon}
						feels_like={feels_like}
						sunrise={sunrise}
						sunset={sunset}
						weather={weather}
						tabForecast={tabForecast}
						addFavoritCity={addFavoritCity}
					/>
					<AddedLocation favoritCity={favoritCity}
						deleteFavoritCity={deleteFavoritCity}
						handleOnSubmit={handleOnSubmit} />
				</div>
			</div>
		</div>
	)
}
export default WholeBlock;