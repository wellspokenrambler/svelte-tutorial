<script>
import { page } from '$app/state';
    let { children } = $props();
    const colors = ['ff3e00', '676779', '42b4ff', 'invalid']
</script>

<nav class="absolute left-1/2 top-2">
    {#each colors as color}
        <a href={`/iv-advanced-sveltekit/4_advanced-routing/colors/${color}`} style={`color: #${color}; ${page.params.color === color ? 'background-color: #ccc; font-weight: bold;' : ''}`}>#{color}</a>
    {/each}
    <a href="/iv-advanced-sveltekit/4_advanced-routing/">Go back to advanced routing example</a>
</nav>

{@render children()}
