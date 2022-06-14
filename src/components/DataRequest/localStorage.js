export const storage = {
	saveFavoriteCities(array) {
		return localStorage.setItem('dataLocalStorage', JSON.stringify(array));
	},
	getFavoriteCities() {
		return JSON.parse(localStorage.getItem('dataLocalStorage'));
	},
	saveCurrentCity(value) {
		const name = "name";
		document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	},
	getCurrentCity() {
		const objCookie = document.cookie
			.split(';')
			.map(cookie => cookie.split('='))
			.reduce((acc, [key, value]) =>
				({ ...acc, [key.trim()]: decodeURIComponent(value) }),
				{}
			)

		return objCookie?.name ?? null
	},
}