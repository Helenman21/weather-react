import React from "react";
import "./AddedLocation.css"

function AddedLocation({ favoritCity, deleteFavoritCity, handleOnSubmit }) {
	let countKey = 10;
	const elements = favoritCity.map((item) => {
		const { id, nameCity } = item;

		return (
			<div key={countKey++} className="location__row">
				<span key={countKey++} className="description" onClick={ () => handleOnSubmit(nameCity) } > {nameCity} </span>
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
				<div className="scroll add_template">
					<div className="location__name">
						{elements}
					</div>
				</div>
			</div>

		</div>
	)

}
export default AddedLocation;

