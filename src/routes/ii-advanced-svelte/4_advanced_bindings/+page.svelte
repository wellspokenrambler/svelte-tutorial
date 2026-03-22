<script>
    //contenteditable bindings
    let html = $state('<p style="color: red;">This is a bit of text isn\'t it?</p>');

    // each block bindings
    let todos = $state([
        { text: 'Learn Svelte', done: true },
        {text: '???', done: false},
        { text: 'Profit', done: false }
    ]);

    function add() {
        todos.push({
            text: '',
            done: false
        })
    }

    function clear() {
        todos = todos.filter(todo => !todo.done);
    }

    let remaining = $derived(todos.filter(todo => !todo.done).length);

    // media elements
    import AudioPlayer from "./audio_player/AudioPlayer.svelte";
    import { tracks } from './audio_player/tracks.js';

    // dimensions
    let w = $state();
    let h = $state();
    let size = $state(42);

    // this
    import { paint } from './gradient/gradient.js';

    let gradientCanvas;

    $effect(() => {
        const context = gradientCanvas.getContext('2d');
        let frame = requestAnimationFrame(function loop(t) {
            frame = requestAnimationFrame(loop);
            paint(context, t);
        });

        return () => {cancelAnimationFrame(frame);};
    });

    //component bindings
    import Keypad from './keypad/Keypad.svelte';
    let pin = $state('');
    let view = $derived(pin ? pin.replace(/\d(?!$)/g,'•') : 'enter your pin');

    function onsubmit() {
        alert('pin submitted (just kidding, front end :P)');
    }

    // binding to component instances
    import Canvas from './canvas/Canvas.svelte';
    import { trapFocus } from './canvas/attachments.svelte.js';

    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

	let selected = $state(colors[0]);
	let penSize = $state(10);
	let showMenu = $state(true);
    let showCanvas = $state(false);

    let canvas;
</script>

<h1>4 - Advanced Bindings</h1>

<h2>Contenteditable Bindings</h2>
<p>raw HTML string:</p>
<code>{html}</code>
<p>contenteditable div:</p>
<div contenteditable bind:innerHTML={html}></div>

<h2>Each Block Bindings</h2>
<h3>Todo List</h3>
<p>{remaining} remaining todos</p>
<ul>
    {#each todos as todo}
        <li>
            <input type="checkbox" 
                bind:checked={todo.done}
                disabled={todo.text.length == 0}>
            <input type="text" 
                bind:value={todo.text}
                disabled={todo.done}
                placeholder="Write your todo here..."
                class={{'line-through': todo.done}}>
        </li>
    {/each}
</ul>
<button onclick={add}>Add Todo</button>
<button onclick={clear}>Clear Completed</button>

<h2>Media Elements</h2>
<div class="flex flex-col gap-4 w-full">
    {#each tracks as track}
        <AudioPlayer {...track} />
    {/each}
</div>

<h2>Dimensions</h2>
<div class="flex flex-col gap-4 border border-gray-500 p-4">
    <label>
        <input type="range" bind:value={size} min="10" max="100" />
        font size ({size}px)
    </label>

    <span class="border border-red-500 w-fit h-fit" 
            style="font-size: {size}px"
            bind:clientWidth={w}
            bind:clientHeight={h}
            contenteditable>
        edit this text
    </span>

    <span>text box size (in red): {w}px x {h}px</span>
</div>

<h2>This</h2>
<p>let's ponder the orb for a bit :)</p>
<canvas bind:this={gradientCanvas} width={100} height={100} class="rounded-full mt-2"></canvas>

<h2>Component Bindings</h2>
<p class={{'opacity-25': pin}}>{view}</p>

<Keypad bind:value={pin} {onsubmit} />

<h2>Binding to Component Instances</h2>
<p>The whole page can be a canvas! (again again.) If you need to, you can toggle the canvas using the button next to the home page link.</p>
<button onclick={() => showCanvas = !showCanvas} class="absolute top-0 left-1/2 z-10">
    {showCanvas ? 'hide' : 'show'} canvas
</button>
<div class="container" style:display={showCanvas ? 'block' : 'none'}>
	<Canvas bind:this={canvas} color={selected} size={penSize} />

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
			<div class="menu" {@attach trapFocus}>
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
					<input type="range" bind:value={penSize} min="1" max="50" />
					large
				</label>
			</div>
		</div>
	{/if}

	<div class="controls">
		<button class="show-menu" onclick={() => showMenu = !showMenu}>
			{showMenu ? 'close' : 'canvas menu'}
		</button>

        <button onclick={() => canvas.clear()}>
            clear canvas
        </button>
	</div>
</div>

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
