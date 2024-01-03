<script>
import Fun from './Fun.svelte'
import PropEx from './PropEx.svelte';
let fontSize = 24
let someData = 'Hello World!'
</script>
<h1>Hello Awesome Svelte Developer</h1>
<Fun bind:fontSize/>
<PropEx {someData} />
 
