<script lang="ts">
    import { page, navigating } from '$app/state';

    let { children } = $props();
</script>

<nav class="absolute left-1/2 top-2">
    <a href="/iii-basic-sveltekit/home-about-example" 
            aria-current={page.url.pathname === '/iii-basic-sveltekit/home-about-example'}
        >
        Home
    </a>
    <a href="/iii-basic-sveltekit/home-about-example/about"
            aria-current={page.url.pathname === '/iii-basic-sveltekit/home-about-example/about'}
        >
        About
    </a>

    {#if navigating.to}
    <div class="inline-flex items-center ml-4 text-gray-500">
        <span class="ml-2 text-sm text-gray-500">
            Navigating to {navigating.to.url.pathname}...
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6 animate-spin stroke-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
    </div>
    {/if}
</nav>

{@render children()}