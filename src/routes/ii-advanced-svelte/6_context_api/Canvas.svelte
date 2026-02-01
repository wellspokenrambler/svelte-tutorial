<script>
    import { setContext } from 'svelte';
    import { SvelteSet } from 'svelte/reactivity';

    let { width = 100, height = 100, children } = $props();

    let canvas;
    let items = new SvelteSet();

    setContext('canvas', {addItem});

    function addItem(fn) {
        $effect(() => {
            items.add(fn);
            return () => items.delete(fn);
        });
    }

    $effect(() => {
        const context = canvas.getContext('2d');
        context.clearRect(0,0,width,height);
        items.forEach(fn => fn(context));
    });
</script>

<canvas bind:this={canvas} {width} {height}>
    {@render children()}
</canvas>