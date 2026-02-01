<script>
    let { children } = $props();
</script>

<nav class="absolute left-20 top-2">
    <a href="/iii-basic-sveltekit/blog-example">Home</a>
    <a href="/iii-basic-sveltekit/blog-example/blog">Blog</a>
</nav>

{@render children()}