<script>
    //The use directive
    import Canvas from './Canvas.svelte';
    import { trapFocus } from './actions.svelte.js';

    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

	let selected = $state(colors[0]);
	let size = $state(10);
	let showMenu = $state(true);
    let showCanvas = $state(false);

    //Adding Parameters
    import tippy from 'tippy.js';
    let content = $state('Editable tooltip content');
    function tooltip(node, fn) {
        $effect(() => {
            const tooltip = tippy(node, fn());
            return tooltip.destroy;
        });
    }
</script>

<h1>8 - Actions</h1>

<h2>The Use directive</h2>
<p>The whole page can be a canvas! If you need to, you can toggle the canvas using the button next to the home page link.</p>
<button onclick={() => showCanvas = !showCanvas} class="absolute top-0 left-20 z-10">
    {showCanvas ? 'hide' : 'show'} canvas
</button>
<div class="container" style:display={showCanvas ? 'block' : 'none'}>
	<Canvas color={selected} size={size} />

	{#if showMenu}
		<div
			role="presentation"
			class="modal-background"
			onclick={(event) => {
				if (event.target === event.currentTarget) {
					showMenu = false;
				}
			}}
			onkeydown={(e) => {
				if (e.key === 'Escape') {
					showMenu = false;
				}
			}}
		>
			<div class="menu" use:trapFocus>
				<div class="colors">
					{#each colors as color}
						<button
							class="color"
							aria-label={color}
							aria-current={selected === color}
							style="--color: {color}"
							onclick={() => {
								selected = color;
							}}
						></button>
					{/each}
				</div>

				<label>
					small
					<input type="range" bind:value={size} min="1" max="50" />
					large
				</label>
			</div>
		</div>
	{/if}

	<div class="controls">
		<button class="show-menu" onclick={() => showMenu = !showMenu}>
			{showMenu ? 'close' : 'canvas menu'}
		</button>
	</div>
</div>

<h2>Adding Parameters</h2>
<input bind:value={content} />

<button use:tooltip={() => ({ content })}>
    Hover me to see a tooltip!
</button>

<style>
    /*The use directive*/
	.container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.controls {
		position: absolute;
		right: 0;
		top: 0;
		padding: 1em;
	}

	.show-menu {
		width: 5em;
	}

	.modal-background {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
	}

	.menu {
		position: relative;
		background: var(--bg-2);
		width: calc(100% - 2em);
		max-width: 28em;
		padding: 1em 1em 0.5em 1em;
		border-radius: 1em;
		box-sizing: border-box;
		user-select: none;
	}

	.colors {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 0.5em;
	}

	.color {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: none;
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	.color[aria-current="true"] {
		transform: translate(1px, 1px);
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}

	.menu label {
		display: flex;
		width: 100%;
		margin: 1em 0 0 0;
	}

	.menu input {
		flex: 1;
	}

    /*Adding Parameters*/
    :global [data-tippy-root] {
        background-color: black;
        color: white;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
</style>
