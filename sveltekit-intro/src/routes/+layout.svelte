<script>
	import { page } from '$app/stores';
</script>

<nav>
	<li><a class:active={$page.url.pathname === '/'} href="/">Home</a></li>
	<li><a class:active={$page.url.pathname === '/contact'} href="contact">Contact</a></li>
	<li><a class:active={$page.url.pathname === '/about'} href="about">About</a></li>
</nav>
<main>
<slot />
</main>
<style>
	.active {
		color: salmon;
	}
</style>

