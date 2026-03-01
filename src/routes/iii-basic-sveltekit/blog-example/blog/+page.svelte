<script lang="ts">
    let { data } = $props();
</script>

<h1>blog</h1>

<ul>
    {#each data.summaries as {slug, title}}
        <li><a href={`/iii-basic-sveltekit/blog-example/blog/${slug}`}>{title}</a></li>
    {/each}
</ul>