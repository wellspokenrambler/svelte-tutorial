<script>
    import { browser } from '$app/environment';

    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<h1>CSR is turned off here</h1>
<p>The count is {count}</p>
<button onclick={increment}>Increment</button>

{#if browser}
    <p>This content is only rendered on the client.</p>
{:else}
    <p>This content is only rendered on the server.</p>
{/if}

<a href="/iv-advanced-sveltekit/2_page-options">Go back to main page</a>