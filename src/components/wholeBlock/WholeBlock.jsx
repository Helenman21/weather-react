import React, {useState} from "react";
import Tabs from "../tabs/Tabs";
import SearchPanel from "../search-panel/Search-panel";
//import '../img/MainlyCloudy.png'
import './WholeBlock.css';
import { fetchCity, fetchTabForecast } from '../DataRequest.js';
function WholeBlock(){
	const [value, setValue] = useState('Красноярск')
	const [temprature, setTemprature] = useState('0')
	const [icon, setIcon] = useState(null);
	const [feels_like, setFeels_like] = useState('');
	const [sunrise, setSunrise] = useState('');
	const [sunset, setSunset] = useState('');
	const [weather, setWeather] = useState('');
	const [tabForecast, setTabForecast] = useState([]);
	
	 const handleOnSubmit = (currentValue) => { 
		setValue(currentValue);
		const  dataTabNow_Details =  fetchCity(currentValue)
			.then((dataCity) => {
			const {
				temp,
				icon,
				feels_like,
				sunrise,
				sunset,
				weather
			} =  dataCity;
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
				console.log(dataForecast)
				const newArrDataForecast = [...dataForecast];
				setTabForecast(newArrDataForecast);				
			})
	}
	

	return(
		<div className="wrapper">
			<div className="content" >
				<SearchPanel handleOnSubmit={ handleOnSubmit } />
				<Tabs value={ value }
						temprature={ temprature } 
						icon={ icon } 
						feels_like={ feels_like }
						sunrise={ sunrise }
						sunset={ sunset }
						weather={ weather }
						tabForecast={ tabForecast }
						 />
			</div>
		</div>
	)
}
export default WholeBlock;