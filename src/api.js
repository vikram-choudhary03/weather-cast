export const Geo_api_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad21ae2c79msh7e9831e8e1b33ecp1ead1djsn2e513fbe4c0f',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const Weather_api_url = "https://api.openweathermap.org/data/2.5";
export const Weather_api_key = "2fcb9f3998aa176dc9af6ebbfa335f0a";





// try {
// 	const response = await fetch(Geo_api_url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// fetch('/cities', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err)); 