<script>
    let { data, children } = $props();
</script>
<div class="flex gap-4 mt-4">
    <aside class="shrink-0 w-1/4 p-4 border border-gray-300 rounded-2 mt-2">
        <h2> more posts</h2>
        <ul>
            {#each data.summaries as {slug, title}}
                <li><a href={`/iii-basic-sveltekit/blog-example/blog/${slug}`}>{title}</a></li>
            {/each}
        </ul>
    </aside>
    <main class="flex-1 p-4 border border-gray-300 rounded-2 mt-2">
        {@render children()}
    </main>
</div>