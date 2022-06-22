import React, { useEffect, useRef, useState } from "react";
import Tabs from "../tabs/Tabs";
import SearchPanel from "../search-panel/Search-panel";
import './WholeBlock.css';
import { fetchCity, fetchTabForecast } from '../DataRequest/DataRequest.js';
import AddedLocation from "../AdedLocation/AddedLocation";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setLikeColor } from '../../actions';
import { сheckStatus } from '../Utils/Utils';
import { colorLike } from "../constans/constans";
function WholeBlock() {
	const [dataWeather, setDataWeather] = useState(null);
	const [arrayTabForecast, setArrayTabForecast] = useState([]);
	const nameCity = useSelector(state => state.currentcity);
	const arrayFavoritCities = useSelector(state => state.arrayFavoritCities);
	const dispatch = useDispatch()
	const memoCity = useRef(null);


	useEffect(() => {
		if (memoCity.current !== nameCity) {
			memoCity.current = nameCity;
			fetchCity(nameCity)
				.then((dataCity) => {
					setDataWeather(dataCity);

				})
			const isValid = сheckStatus(arrayFavoritCities, nameCity);
			const setLike = isValid ? dispatch(setLikeColor(colorLike.likeHeartFavorit)) :
				dispatch(setLikeColor(colorLike.notLikeHeartFavorit));
			fetchTabForecast(nameCity)
				.then((dataForecast) => {
					const newArrDataForecast = [...dataForecast];
					setArrayTabForecast(newArrDataForecast);
				})
		}
	}, [nameCity]);
	return (
		<div className="wrapper">
			<div className="content" >
				<SearchPanel />
				<div className="content__row">
					<Tabs dataWeather={dataWeather} />
					<AddedLocation />
				</div>
			</div>
		</div>
	)
}
export default WholeBlock;