const Storage = {
	saveFavoriteCities(array){
		return localStorage.setItem('dataLocalStorage', JSON.stringify(array));
	},
	getFavoriteCities() { 
		 return localStorage.getItem('dataLocalStorage');
	 },
	 saveCurrentCity(nameCity){
		localStorage.removeItem('currentCity');
		 return localStorage.setItem('currentCity', JSON.stringify(nameCity))
	 },
	getCurrentCity(){
		return localStorage.getItem('currentCity');
	 },
}
export default Storage