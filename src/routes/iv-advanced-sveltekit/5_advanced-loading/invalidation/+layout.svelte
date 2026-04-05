<script>
	let { children } = $props();
</script>

<nav class="absolute left-1/4 top-2">
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/America/New_York">New York</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/America/Sao_Paulo">São Paulo</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/Europe/London">London</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/Europe/Paris">Paris</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/Africa/Cairo">Cairo</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/Asia/Shanghai">Shanghai</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/Asia/Tokyo">Tokyo</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/Australia/Sydney">Sydney</a>
	<a href="/iv-advanced-sveltekit/5_advanced-loading/invalidation/America/Los_Angeles">Los Angeles</a>
    <a href="/iv-advanced-sveltekit/5_advanced-loading">back to Advanced Loading Example</a>
</nav>

{@render children()}
