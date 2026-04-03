<script>
    import { navigating } from '$app/state';
    let { children } = $props();
    let previous = $state();
    let start = $state();
    let end = $state();

    $effect(() => {
        if(navigating.to) {
            start = Date.now();
            end = null;
            previous = {...navigating};
        } else {
            end = Date.now();
        }
    })
</script>

{@render children()}

<nav>
    <a href="/iv-advanced-sveltekit/link-options-example/preloading/slow-a" data-sveltekit-preload-data>slow a</a>
    <a href="/iv-advanced-sveltekit/link-options-example/preloading/slow-b" data-sveltekit-preload-code>slow b</a>
</nav>

{#if previous && end}
    <p>navigated from {previous.from.url.pathname} to {previous.to.url.pathname} in {end - start} ms</p>
{/if}

<a href="/iv-advanced-sveltekit/link-options-example" data-sveltekit-preload-data>Back to link options example</a>