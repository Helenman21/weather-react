export function formattingText (text){
	//if (!text) return text;
	let value = text.trim();
	let nameCity = value[0].toUpperCase() + value.slice(1);
	return nameCity;
}