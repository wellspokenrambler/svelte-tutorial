<script>
	let { children } = $props();
</script>

<nav class="absolute left-1/2 top-2">
	<a href="/iv-advanced-sveltekit/advanced-routing-example/languages">default</a>
	<a href="/iv-advanced-sveltekit/advanced-routing-example/languages/en">english</a>
	<a href="/iv-advanced-sveltekit/advanced-routing-example/languages/de">german</a>
	<a href="/iv-advanced-sveltekit/advanced-routing-example/languages/fr">french</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example">go back to advanced routing examples</a>
</nav>

{@render children()}