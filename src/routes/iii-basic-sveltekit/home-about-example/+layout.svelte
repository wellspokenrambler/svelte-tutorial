<script lang="ts">
    let { children } = $props();
</script>

<nav class="absolute left-20 top-2">
    <a href="/iii-basic-sveltekit/home-about-example">Home</a>
    <a href="/iii-basic-sveltekit/home-about-example/about">About</a>
</nav>

{@render children()}