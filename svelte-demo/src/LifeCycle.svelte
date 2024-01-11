<script>
import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

beforeUpdate(() => {
	console.log('before update')
})

onMount(() => {
	console.log('on mount')
})

afterUpdate(() => {
	console.log('after update')
})

onDestroy(() => {
	console.log('on destroy')
})
</script>


