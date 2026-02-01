<script>
    let { data } = $props();
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
{#if data.visited}
    <p>(hint: try clearing your browser cookies and reloading to be strangers)</p>
{:else}
    <p>(hint: try reloading to be friends)</p>
{/if}