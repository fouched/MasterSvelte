import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (+params.id === 44) {
		throw error(404, { message: 'Person not found' });
	}
	
	return {
		id: params.id
	}
}
