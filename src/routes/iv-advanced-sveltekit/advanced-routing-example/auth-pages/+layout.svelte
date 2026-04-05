<script>
    let { children } = $props();
</script>

<nav class="absolute left-1/2 top-2">
    <a href="/iv-advanced-sveltekit/advanced-routing-example/auth-pages/app">App</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example/auth-pages/account">Account</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example/auth-pages/about">About</a>
    <a href="/iv-advanced-sveltekit/advanced-routing-example">Back to advanced routing example</a>
</nav>

{@render children()}