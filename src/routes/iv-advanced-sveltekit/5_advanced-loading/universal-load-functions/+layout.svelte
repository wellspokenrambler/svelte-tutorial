<script>
    import { page } from '$app/state';

    let { children } = $props();
</script>

<nav class="absolte left-1/2 top-2"
    style:background={page.data.color ?? 'white'}
>
    <a href='/iv-advanced-sveltekit/5_advanced-loading/universal-load-functions'>home</a>
    <a href='/iv-advanced-sveltekit/5_advanced-loading/universal-load-functions/red'>red</a>
    <a href='/iv-advanced-sveltekit/5_advanced-loading/universal-load-functions/green'>green</a>
    <a href='/iv-advanced-sveltekit/5_advanced-loading/universal-load-functions/blue'>blue</a>
    <a href="/iv-advanced-sveltekit/5_advanced-loading">back to example home</a>
</nav>

{@render children()}

{#if page.data.component}<page.data.component />{/if}
