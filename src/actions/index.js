import Storage from '../../src/components/LocalStorage/LocalStorage';
export const GET_CURRENT_CITY = 'СURRENT_CITY_CHANGED';
export const GET_FAVORIT_CITIES = 'GET_FAVORIT_CITIES';
export const GET_COLOR_LIKE = 'GET_COLOR_LIKE';

const setCurrentCity = (newCurrentCity) => {
	Storage.saveCurrentCity(newCurrentCity);
	return {
		type: GET_CURRENT_CITY,
		payload: newCurrentCity
	}
}
const setLikeColor = (color) => {
	return {
		type: GET_COLOR_LIKE,
		payload: color
	}
}
const setFavoritCities = (newArrayCities) => {
	Storage.saveFavoriteCities(newArrayCities);
	return {
		type: GET_FAVORIT_CITIES,
		payload: newArrayCities
	}
};
export {
	setCurrentCity,
	setFavoritCities, 
	setLikeColor
}

