import React from "react";
import Tabs from "../tabs/Tabs";
import SearchPanel from "../search-panel/Search-panel";
import './WholeBlock.css';
function WholeBlock(){
	return(
		<div className="wrapper">
			<div className="content" >
				<SearchPanel />
				<Tabs />
			</div>
		</div>
	)
}
export default WholeBlock