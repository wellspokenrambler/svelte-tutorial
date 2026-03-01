<script>
	let { children } = $props();
</script>

<nav class="absolute left-20 top-2">
	<a href="/iii-basic-sveltekit/redirects-example/">home</a>
	<a href="/iii-basic-sveltekit/redirects-example/a">a</a>
	<a href="/iii-basic-sveltekit/redirects-example/b">b</a>
</nav>

{@render children()}
