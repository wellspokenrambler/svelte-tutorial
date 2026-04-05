<script>
	let { children } = $props();
</script>

<nav class="absolute left-1/2 top-2">
	<a href="/iv-advanced-sveltekit/4_advanced-routing/languages">default</a>
	<a href="/iv-advanced-sveltekit/4_advanced-routing/languages/en">english</a>
	<a href="/iv-advanced-sveltekit/4_advanced-routing/languages/de">german</a>
	<a href="/iv-advanced-sveltekit/4_advanced-routing/languages/fr">french</a>
    <a href="/iv-advanced-sveltekit/4_advanced-routing">go back to advanced routing examples</a>
</nav>

{@render children()}