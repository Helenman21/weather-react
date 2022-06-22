import { GET_CURRENT_CITY, GET_FAVORIT_CITIES, GET_COLOR_LIKE } from "../actions";
import Storage from "../components/LocalStorage/LocalStorage";
const initialState = {
	currentcity: Storage.getCurrentCity() ?? 'Красноярск',
	arrayFavoritCities: Storage.getFavoriteCities() ?? [],
	colorLike: "&#9825;"
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CURRENT_CITY:
			return Object.assign({}, state, {
				currentcity: action.payload
			});
		case GET_FAVORIT_CITIES:
			return Object.assign({}, state, {
				arrayFavoritCities: action.payload
			});
			case GET_COLOR_LIKE:
				return Object.assign({}, state, {
					colorLike: action.payload
				});		
				default:
			return state
	};
};
export default reducer;