<script>
	/** @type {import('./$types').ActionData} */
	export let form;
	import { enhance } from '$app/forms';

</script>

<h1>Contact</h1>
<!-- no need to define action, the default action will run -->
{#if form && form.success}
 <h2>Form processed</h2>
{:else }
	<form method="post" use:enhance>
		{#if form?.errors?.emailMissing}
			<p>Email validation failed</p>
		{/if}
		<label for="emial">Email</label>
		<input type="text" name="email" id="email" value={form?.errors?.email ?? ''}/>
		<br/>
		{#if form?.errors?.messageMissing}
			<p>Message validation failed</p>
		{/if}
		<label for="message">Message</label>
		<br/>
		<textarea name="message" id="message" cols="30" rows="10">{form?.errors?.message ?? ''}</textarea>
		<br/>
		<button type="submit">Send Message</button>
	</form>
{/if}
