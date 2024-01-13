<script>
	/** @type {import('./$types').LayoutData} */
	export let data
	let msg = data.msg	
</script>
<h2>{msg}</h2>
<slot />
