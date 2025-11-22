<script lang="ts">
    //If and Else Blocks
    let count = $state(0);
    function increment() {
        count+=1;
    }

    //Each Blocks
    let fruits = $state([
        {name: 'Apple', color: 'text-green-500'}, 
        {name: 'Banana', color: 'text-yellow-500'},
        {name: 'Strawberry', color: 'text-red-500'},
        {name: 'Cherry', color: 'text-pink-500'}, 
        {name: 'Blueberry', color: 'text-blue-500'}
    ]);//downside to tailwind - can't dynamically set class names (e.g. class={`text-${fruit.color}-500`})
    let selected = $state({name: '[none]', color: 'text-gray-300'});
    function pickFruit(fruitName: string) {
        const fruit = fruits.find(f => f.name === fruitName);
        if (fruit) {
            Object.assign(selected, fruit);
        }
    }
    
    //Keyed Each Blocks
    import Thing from './Thing.svelte';
    let keyedFruits = $state([
        {id: 0, name: 'Apple', color: 'text-green-500'}, 
        {id: 1, name: 'Banana', color: 'text-yellow-500'},
        {id: 2, name: 'Strawberry', color: 'text-red-500'},
        {id: 3, name: 'Cherry', color: 'text-pink-500'}, 
        {id: 4, name: 'Blueberry', color: 'text-blue-500'}
    ]);

    //Await Blocks
    import { rollD20 } from './utils';
    let promise = $state(rollD20());
</script>

<h1>4 - Logic</h1>

<h2>If Blocks (hint: click at least 13 times)</h2>
<p>Count: clicked {count} time{count === 1 ? '' : 's'}</p>
<button onclick={increment} 
        aria-label="click to increase count by 1" 
        class="bg-blue-500 px-2 py-1 rounded-sm text-white">
    Increment
</button>
{#if count == 13}
    <p class="text-red-500 text-bold">Unlucky for some...</p>
{/if}

<h2>Else Blocks</h2>
{#if count < 5}
    <p>Keep going!</p>
{:else if count >= 5 && count < 10}
    <p>You're halfway there!</p>
{:else if count < 10}
    <p>Almost at the finish line!</p>
{:else if count >= 10 && count < 13}
    <p>You did it! don't need to go any further...</p>
{:else if count == 13}
    <p>Uh oh.</p>
{:else}
    <p>Phew, we should be in the clear.</p>
{/if}

<h2>Each Blocks</h2>
<p>Good fruits to add to granola:</p>
<ul>
    {#each fruits as fruit}
        <li class={fruit.color}><button onclick={() => pickFruit(fruit.name)}>{fruit.name}</button></li>
    {/each}
</ul>
<p>click on one to pick your favourite: <span class={selected.color}>{selected.name}</span></p>

<h2>Keyed Each Blocks</h2>
<p>Fruits with their emoji equivalents:</p>
<ul>
    {#each keyedFruits as fruit (fruit.id)}
        <li class={fruit.color}>
            <Thing id={fruit.id} />
            <span>{fruit.name}</span>
        </li>
    {/each}
</ul>

<h2>Await Blocks</h2>
<button onclick={() => promise = rollD20()} 
        aria-label="click to roll the d20" 
        class="bg-purple-500 px-2 py-1 rounded-sm text-white mb-2">
    Roll d20
</button>
{#await promise}
    <p>Rolling the d20...</p>
{:then result}
    <p>You rolled a {(result === 1 || result === 20) ? 'natural ' : ''}{result}!{(result === 1) ? ' oh dear... ' : (result === 20) ? ' nice!' : ''}</p>
{:catch error}
    <p class="text-red-500">Error rolling d20: {error.message}</p>
{/await}