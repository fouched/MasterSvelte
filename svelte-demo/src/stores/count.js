import { writable } from 'svelte/store';

const store = writable(1)

export default {
	subscribe: store.subscribe,
	// custom store functionality
	plus: () => {
		store.update((n) => ++n)
	},
	minus: () => {
		store.update((n) => --n)
	}
}

