import React, { useEffect, useState } from "react";
import Tabs from "../tabs/Tabs";
import SearchPanel from "../search-panel/Search-panel";
import cloudy from '../img/cloudy.png'
import './WholeBlock.css';
import { fetchCity, fetchTabForecast } from '../DataRequest/DataRequest.js';
import AddedLocation from "../AdedLocation/AddedLocation";
import Storage from "../LocalStorage/LocalStorage";
let idFavoritCity = 0;

function WholeBlock() {
	const currentCity = Storage.getCurrentCity() ?? 'Красноярск' ;
	const [value, setValue] = useState('Красноярск');
	const [dataWeather, setDataWeather] = useState(null);
	const [arrayTabForecast, setArrayTabForecast] = useState([]);
	const [favoritCity, setFavoritCity] = useState([{ id: 509, nameCity: 'тула' }]);
	const [colorLike, setColorLike] = useState();
	console.log("currentCity: ",currentCity);
	const handleOnSubmit = (currentValue) => {
		setValue(currentValue);
		Storage.saveCurrentCity(currentValue);
	}
	useEffect(() => {
		fetchCity(currentCity)
			.then((dataCity) => {
				setDataWeather(dataCity);
			})
			colorHeartLike();
		fetchTabForecast(currentCity)
			.then((dataForecast) => {
				const newArrDataForecast = [...dataForecast];
				setArrayTabForecast(newArrDataForecast);
			})
	}, []);

	useEffect(() => {
		fetchCity(value)
			.then((dataCity) => {
				setDataWeather(dataCity);
			})
			colorHeartLike();
		fetchTabForecast(value)
			.then((dataForecast) => {
				const newArrDataForecast = [...dataForecast];
				setArrayTabForecast(newArrDataForecast);
			})
	}, [ value ]);
	
	const addFavoritCity = (itemCity) => {
		colorHeartLike()
		const isValid = favoritCity.find(item => item.nameCity === value);
		if(!isValid){const item = {
			id: idFavoritCity++,
			nameCity: itemCity
		};
		const newArrayCity = [...favoritCity, item];
		setFavoritCity(newArrayCity);}
		return;
	}
	const deleteFavoritCity = (id) => {
		const index = favoritCity.findIndex((el) => el.id === id);
		const newArrayCity = [...favoritCity.slice(0, index), ...favoritCity.slice(index + 1)];
		setFavoritCity(newArrayCity)

	}
	function colorHeartLike() {
		const likeHeartFavorit = 'U+2661';
		const notLikeHeartFavorit = 'U+2661';
		const isValid = favoritCity.find(item => item.nameCity === value)
		if (isValid) {
			setColorLike(likeHeartFavorit);
		} if (!isValid) {
			setColorLike(notLikeHeartFavorit);
		}
	};
	return (
		<div className="wrapper">
			<div className="content" >
				<SearchPanel handleOnSubmit={handleOnSubmit} />
				<div className="content__row">
					<Tabs value={value}
						dataWeather={ dataWeather }
						arrayTabForecast={arrayTabForecast}
						addFavoritCity={addFavoritCity}
						colorLike={colorLike}
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