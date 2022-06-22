import { formattingText } from "../Utils/Utils";
const Storage = {
	saveFavoriteCities(array) {
		return localStorage.setItem('dataLocalStorage', JSON.stringify(array));
	},
	getFavoriteCities() {
		return JSON.parse(localStorage.getItem('dataLocalStorage'));
	},
	saveCurrentCity(nameCity) {
		localStorage.removeItem('currentCity');

		return localStorage.setItem('currentCity', JSON.stringify(nameCity))
	},
	getCurrentCity() {
		return JSON.parse(localStorage.getItem('currentCity'));
	},
}
export default Storage