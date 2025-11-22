<script>
	let { color, size } = $props();

	let canvas = $state();
	let context = $state();
	let coords = $state();

	$effect(() => {
		context = canvas.getContext('2d');
		resize();
	});

	function resize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
</script>

<svelte:window onresize={resize} />

<canvas
	bind:this={canvas}
	onpointerdown={(e) => {
		coords = { x: e.offsetX, y: e.offsetY };

		context.fillStyle = color;
		context.beginPath();
		context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
		context.fill();
	}}
	onpointerleave={() => {
		coords = null;
	}}
	onpointermove={(e) => {
		const previous = coords;

		coords = { x: e.offsetX, y: e.offsetY };

		if (e.buttons === 1) {
			e.preventDefault();

			context.strokeStyle = color;
			context.lineWidth = size;
			context.lineCap = 'round';
			context.beginPath();
			context.moveTo(previous.x, previous.y);
			context.lineTo(coords.x, coords.y);
			context.stroke();
		}
	}}
></canvas>

{#if coords}
	<div
		class="preview"
		style="--color: {color}; --size: {size}px; --x: {coords.x}px; --y: {coords.y}px"
	></div>
{/if}

<style>
    canvas {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
    }

    .preview {
        position: absolute;
        top: calc(var(--y) - var(--size) / 2);
        left: calc(var(--x) - var(--size) / 2);
        width: var(--size);
        height: var(--size);
        border: 2px solid var(--color);
        border-radius: 50%;
        pointer-events: none;
    }
</style>