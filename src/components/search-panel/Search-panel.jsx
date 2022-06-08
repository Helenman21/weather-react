import React from "react";
import './Search-panel.css'
function SearchPanel() {
	return (
		<form class="form" action="#" >
			<input className="entry-field" type="text" placeholder="Krasnoyarsk" />
			<button>
				<img className="img-search" src="" alt="поиск" />
			</button>
		</form>
	)
}
export default SearchPanel;