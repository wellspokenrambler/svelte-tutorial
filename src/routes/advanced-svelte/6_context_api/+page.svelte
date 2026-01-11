<script>
    import Canvas from "./Canvas.svelte";
    import Square from "./Square.svelte";

    let seed = 1;

    function random() {
        seed *= 16807;
        seed %= 2147483647;
        return (seed - 1) / 2147483646;
    }

    function jitter(amount) {
        return amount * (random() - 0.5);
    }
</script>

<h1>6 - Context API</h1>

<Canvas width={800} height={1200}>
    {#each Array(12) as _, c}
        {#each Array(22) as _, r}
            <Square 
                x={180 + c * 40 + jitter(r * 2)}
                y={180 + r * 40 + jitter(r * 2)}
                size={40}
                rotate={jitter(r * 0.05)}
            />
        {/each}
    {/each}
</Canvas>