<script>
	let { children } = $props();
</script>

<nav class="absolute left-1/2 top-2">
    <a href="/iv-advanced-sveltekit/advanced-routing-example/layout-breakout/a">A</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example/layout-breakout/a/b">B</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example/layout-breakout/a/b/c">C</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example/layout-breakout/a/b/c/d">D (breakout)</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example">Go back to advanced routing example</a>
</nav>

<div>
	{@render children()}
</div>
