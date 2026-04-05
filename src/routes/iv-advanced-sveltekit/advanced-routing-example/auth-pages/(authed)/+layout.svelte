<script lang="ts">
    let { children } = $props();
</script>

{@render children()}

<form method="POST" action="/iv-advanced-sveltekit/advanced-routing-example/auth-pages/logout">
    <button type="submit">Logout</button>
</form>