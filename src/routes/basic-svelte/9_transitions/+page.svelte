<script lang="ts">
    //The Transition Directive, Adding Parameters, In and Out
    import { fade, fly, slide } from 'svelte/transition';
    let visible = $state(true);

    //Custom CSS Transitions
    import { elasticOut } from 'svelte/easing';
    function spin(node, { duration }) {
		return {
			duration,
			css: (t, u) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * u)}%,
						${Math.min(50, 500 * u)}%
					);`
			}
		};
	}

    //Custom JS Transitions
    function typewriter (node, {speed = 1}) {
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
        if (!valid) {
            throw new Error('This transition only works on elements with a single text node child.');
        }

        const text = node.textContent;
        return {
            duration: text.length / (speed * 0.01),
            tick: (t) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    };

    //Transition Events
    let status = $state('waiting...');

    //Global Transitions
    let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let showItems = $state(true);
    let i = $state(5);

    //Key Blocks
    import { messages } from './loading-messages.js';

    let messagesIndex = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
			messagesIndex += 1;
			messagesIndex %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});

</script>
<h1>9 - Transitions</h1>
<h2>The Transition Directive</h2>
<label>
    <input type="checkbox" bind:checked={visible}>
    Toggle visibility
    {#if visible}
        <p transition:fade={{duration: 400}} class="mt-2 p-2 bg-green-200 rounded-sm">
            This paragraph fades in and out when toggling visibility.
        </p>
    {/if}
</label>


<h2>Adding Parameters</h2>
{#if visible}
    <p transition:fly={{x: 200, duration: 400}} class="mt-4 p-2 bg-blue-200 rounded-sm">
        This paragraph flies in from the right when it appears and flies out to the right when it disappears.  
    </p>
{/if}

<h2>In and Out</h2>
{#if visible}
    <p in:fly={{y: 200, duration: 400}} out:fade class="mt-4 p-2 bg-yellow-200 rounded-sm">
        This paragraph flies in from the bottom when it appears and fades out when it disappears.
    </p>
{/if}

<h2>Custom CSS Transitions</h2>
{#if visible}
    <p transition:spin={{duration: 5000}} class="mt-4 p-2 bg-pink-200 rounded-sm">
        This paragraph uses a custom transition that spins and changes color when it appears and disappears.
    </p>
{/if}

<h2>Custom JS Transitions</h2>
{#if visible}
    <p transition:typewriter={{duration: 2000}} class="mt-4 p-2 bg-purple-200 rounded-sm">
        This paragraph uses a custom JS transition that types itself out when it appears and disappears.
    </p>
{/if}

<h2>Transition Events</h2>
{#if visible}
    <p transition:fly={{y:-200, duration: 2000}}
       on:introstart={() => status = 'intro started'}
       on:introend={() => status = 'intro ended'}
       on:outrostart={() => status = 'outro started'}
       on:outroend={() => status = 'outro ended'}
       class="mt-4 p-2 bg-gray-200 rounded-sm">
        This paragraph updates the status below when its transitions start and end.
    </p>
{/if}
<p class="mt-2">Status: {status}</p>

<h2>Global Transitions</h2>
<label>
    <input type="checkbox" bind:checked={showItems}>
    Toggle item list
</label>
<label>
    <input type="range" bind:value={i} min="0" max="10">
</label>

{#if showItems}
    <ul class="mt-4 space-y-2">
        {#each items.slice(0, i) as item}
            <li transition:slide|global class="p-2 bg-teal-200 rounded-sm">
                {item}
            </li>
        {/each}
    </ul>
{/if}

<h2>Key Blocks</h2>
{#key messagesIndex}
    <p in:typewriter={{ speed: 4 }} class="mt-4 p-2 bg-red-200 rounded-sm">
        {messages[messagesIndex] || ''}
    </p>
{/key}