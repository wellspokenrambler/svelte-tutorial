<script>
    import { page } from '$app/state';

    let words = ['how','deep','does','the','rabbit','hole','go?'];

    let depth = $derived(page.params.path?.split('/').filter(Boolean).length || 0);
    let next = $derived(depth === words.length ? '' :`${words.slice(0, depth + 1).join('/')}`);
</script>

{#each words.slice(0, depth) as word}
    <h1>{word}</h1>
    {:else}
    <h1>?</h1>
{/each}
<a href={'/iv-advanced-sveltekit/4_advanced-routing/rabbit-hole/'+next}>{words[depth] ?? '?'}</a>
<a class="ml-4" href="/iv-advanced-sveltekit/4_advanced-routing/">Go back to advanced routing example</a>