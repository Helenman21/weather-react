
 const apiKey = '1cc08bd1b174f9a8ac81c39323a93735';
 const SERVER_URL = {
	urlTabNow_tabDetails: 'http://api.openweathermap.org/data/2.5/weather',
	urlTabForecast: 'http://api.openweathermap.org/data/2.5/forecast',
	serverUrlIconForecast: 'http://openweathermap.org/img/wn/',
	serverUrlIcon: 'http://openweathermap.org/img/wn/'
};
export function degreСonversion(C) {
	return Math.round(C - 273);
}
function timeConverter(UNIX_timestamp) {
	const a = new Date(UNIX_timestamp * 1000);
	const hour = a.getHours();
	const min = a.getMinutes();
	const time = hour + ':' + min;
	return time
};
 function handleFetch(url) {
	return fetch(url).then(res => {
		if (res.ok) {
			return res.json();
		}
		// если ошибка, отклоняем промис
		return Promise.reject(`Ошибка: ${res.status}`);
	});
}
const formatIcon = (icon) => {
	if(icon)
	{return `${SERVER_URL.serverUrlIcon}${icon}@2x.png`}
}
export async function fetchCity(cityName) {
	try {
		const url = `${SERVER_URL.urlTabNow_tabDetails}?q=${cityName}&appid=${apiKey}`;
		const result = await handleFetch(url);
		
		return {
			temp: degreСonversion(result?.main?.temp),
			feels_like: degreСonversion(result?.main?.feels_like),
			weather: result?.weather?.length ? result?.weather[0]?.main : null,
			icon: formatIcon(result?.weather?.length ? result?.weather[0]?.icon : null),
			sunrise: timeConverter(result?.sys?.sunrise),
			sunset: timeConverter(result?.sys?.sunset),
		}
	} catch (e) {
		console.log(e)
	}
}

export async function fetchTabForecast(cityName) {
	const url =  `${SERVER_URL.urlTabForecast}?q=${cityName}&appid=${apiKey}`;
	const result = await handleFetch(url);
	const dataResult = await result;
	const arrWeather = dataResult?.list?.slice(0, 10);
			const resultArray = arrWeather.map(item => {
				const newItem = {
					tempForecast: degreСonversion(item?.main?.temp),
					dateForecast: item?.dt_txt.slice(0, 10),
					feelsLikeForecast: degreСonversion(item?.main?.feels_like),
					iconForecast: formatIcon(item?.weather[0]?.icon),
					cloudinessForecast: item?.weather[0]?.main,
					clockForecast: item?.dt_txt.slice(11, 16)
				}				
			return newItem	
})
return resultArray}