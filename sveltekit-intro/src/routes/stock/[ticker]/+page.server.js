import { API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {	
	try {
		const url = `https://api.polygon.io/v2/aggs/ticker/${params.ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=${API_KEY}`;
		const response = await fetch(url);
		const json = await response.json();

		// the API does not return HTTP 500 as it should...
		if (json.status === 'ERROR') {
			throw error(500, 'Error getting stock');
		}

		return json;
	} catch (e) {
		throw error(500, 'Error getting stock');
	}
}
