<script lang="ts">
    // tweened values
    import { quintOut } from "svelte/easing";
    import { Tween } from "svelte/motion";

    let progress = new Tween(0, {
        delay: 20,
        duration: 400,
        easing: quintOut
    });

    // springs
    import { Spring } from "svelte/motion";
    let coords = new Spring({x: 0, y: 0}, {
        stiffness: 0.1,
        damping: 0.25
    });
    let size = new Spring(50, {
        stiffness: 0.1,
        damping: 0.25
    });
    let circle = $state(true)
</script>
<h1>3 - Motion</h1>
<h2>Tweened Values</h2>
<div class="flex flex-col justify-start gap-2 mb-4">
    <progress 
        class="w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-500 [&::-webkit-progress-value]:bg-blue-400 [&::-moz-progress-bar]:bg-blue-400" 
        value={progress.current}
    ></progress>

    <button class="w-6" onclick={() => progress.target = 0}>0%</button>
    <button class="w-6" onclick={() => progress.target = 0.25}>25%</button>
    <button class="w-6" onclick={() => progress.target = 0.5}>50%</button>
    <button class="w-6" onclick={() => progress.target = 0.75}>75%</button>
    <button class="w-6" onclick={() => progress.target = 1}>100%</button>
    <button class="w-6" onclick={() => progress.target = Math.random()}>Random</button>
</div>

<h2>Springs</h2>
{#if circle}
    <svg class="absolute w-full h-full top-0 left-0"
        onmousemove={(e) => {coords.target = {x: e.clientX, y: e.clientY}}}
        onmousedown={() => {size.target = 100}}
        onmouseup={() => {size.target = 50}}
        oncontextmenu={(e) => {
            e.preventDefault();
            circle = !circle;
        }}
        role="presentation">
        <circle cx={coords.current.x}
            cy={coords.current.y}
            r={size.current}></circle>
    </svg>
{/if}

<button onclick={() => circle = !circle}>Toggle Circle</button>

<p>(right-click on the circle to remove it)</p>

<label>
    <h3>Stiffness: {coords.stiffness}</h3>
    <input type="range" min="0.01" max="1" step="0.01" bind:value={coords.stiffness} />

    <h3>Damping: {coords.damping}</h3>
    <input type="range" min="0.01" max="1" step="0.01" bind:value={coords.damping} />
</label>