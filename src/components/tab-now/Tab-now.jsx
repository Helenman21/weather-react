import React from "react";
import './Tab-now.css';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setFavoritCities, setLikeColor } from '../../actions';
import { сheckStatus } from '../Utils/Utils';
import { colorLike } from "../constans/constans";
let idFavoritCity = 0;
function TabNow({ temperature, icon }) {	
	
	const dispatch = useDispatch();
	const arrayFavoritCities = useSelector(state => state.arrayFavoritCities);
	const currentCity = useSelector(state => state.currentcity);
	const like = useSelector(state => state.colorLike);
	const addFavoritCity = (itemCity) => {
		const isValid = сheckStatus(arrayFavoritCities, itemCity);
		if (!isValid) {
			const item = {
				id: idFavoritCity++,
				nameCity: itemCity
			};	
			const newArr = [...arrayFavoritCities, item]
			dispatch(setFavoritCities(newArr))
			dispatch(setLikeColor(colorLike.notLikeHeartFavorit));		
		}
		dispatch(setLikeColor(colorLike.likeHeartFavorit));
	};
	const likeHeart = (value) => {
		const isValidBlackHeart = value === colorLike.likeHeartFavorit;
		if (isValidBlackHeart) {
			return <span>&#128420;</span>
		}
		return <span>&#9825;</span>
	};
	return (
		<div id="tab_01" className="tabs__block">
			<div className="tabs__row">
				<span className="tabs__temperature">{`${temperature}°`} </span><br />
				<span className="image-weather"><img className="cloudy" src={icon} alt="облачко" />  </span>
				<span className="sity-name">{currentCity}</span>
				<span className="tabs__like" onClick={() => addFavoritCity(currentCity)} >{likeHeart(like)}</span>
			</div>
		</div>);
};
export default TabNow;
