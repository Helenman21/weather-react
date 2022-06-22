import React from "react";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import "./AddedLocation.css";
import { setFavoritCities, setCurrentCity } from '../../actions'
import reducer from "../../reducer";
import { useDispatch } from "react-redux";
function AddedLocation() {
	const arrayFavoritCities = useSelector(state => state.arrayFavoritCities);
	let countKey = 10;	
	const dispatch = useDispatch();
	const deleteFavoritCity = (id) => {
		const index = arrayFavoritCities.findIndex((el) => el.id === id);
		console.log(index)
		const newArrayCity = [...arrayFavoritCities.slice(0, index), ...arrayFavoritCities.slice(index + 1)];
		dispatch(setFavoritCities(newArrayCity));
		console.log(newArrayCity)
	}
	const elements = arrayFavoritCities.map((item) => {
		const { id, nameCity } = item;
		return (
			<div key={countKey++} className="location__row">
				<span key={countKey++} className="description" onClick={() => dispatch(setCurrentCity(nameCity))} > {nameCity} </span>
				<span key={countKey++} className="delete-sity" onClick={() => deleteFavoritCity(id)} >×</span>
			</div>
		)
	})
	return (
		<div className="locations">
			<div className="location__added">
				<span>Added Location</span>
			</div>

			<div className="location__names">
				<div className="scroll">
					<div className="location__name">
						{elements}
					</div>
				</div>
			</div>

		</div>
	)

}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		currentCityChanged: (newCurrentCity) => dispatch(currentCityChanged(newCurrentCity)),
// 	}
// }
// export default connect(null, mapDispatchToProps)(AddedLocation)

export default AddedLocation