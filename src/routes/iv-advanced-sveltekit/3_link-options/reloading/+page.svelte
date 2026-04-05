<script>
    import { onMount } from 'svelte';
    let seconds = $state(0);

    onMount(() => {
        const interval = setInterval(() => {
            seconds += 1;
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<h1>Reloading</h1>
<p>This page has been open for {seconds} seconds.</p>
<a href="./reloading" data-sveltekit-reload>Reload Page</a>