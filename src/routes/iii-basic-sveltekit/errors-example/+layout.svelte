<script>
	let { children } = $props();
</script>

<nav class="absolute left-1/2 top-2">
	<a href="/iii-basic-sveltekit/errors-example">Home</a>
	<a href="/iii-basic-sveltekit/errors-example/expected">Page with expected error</a>
	<a href="/iii-basic-sveltekit/errors-example/unexpected">Page with unexpected error</a>
</nav>

{@render children()}
