import { ABOUT_KEY } from '$env/static/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {

	return {
		msg: ABOUT_KEY
	}
}
