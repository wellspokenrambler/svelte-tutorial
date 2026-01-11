<script lang="ts">
    // <svelte:window>
    let key = $state();
    let keyCode = $state();

    function onkeydown(event) {
        key = event.key;
        keyCode = event.keyCode;
    }

    // <svelte:window> bindings
    let innerWidth = $state(0);
    let innerHeight = $state(0);

    // <svelte:document>
    let selection = $state('');

    function onselectionchange() {
        selection = document.getSelection()?.toString();
    }

    // <svelte:body>
    import cato from './cato.png';

    let heresCato = $state(false);

    // <svelte:head>
    let ramblerMode = $state(false);

    // <svelte:element>
    const options = ['h1', 'h2', 'h3', 'p'];
    let selected = $state(options[0]);

    // <svelte:boundary>
    import FlakyComponent from './FlakyComponent.svelte';
</script>

<h1>7 - Special Elements</h1>
<h2>{'<svelte:window>'}</h2>
<svelte:window {onkeydown} 
    bind:innerWidth={innerWidth}
    bind:innerHeight={innerHeight} />
<div class="flex flex-col gap-4">
    {#if key}
        <kbd class="w-fit bg-gray-300 px-4 py-2 border-6 border-gray-200"
            style="border-style: outset">
            {key === ' ' ? 'Spacebar' : key}
        </kbd>
        <p>keycode: {keyCode}</p>
        {:else}
        <p>Focus this window and press any key</p>
    {/if}
</div>

<h2>{'<svelte:window bindings'}</h2>
<p>window size: {innerWidth}px x {innerHeight}px</p>

<h2>{'<svelte:document>'}</h2>
<svelte:document {onselectionchange} />
<p>currently selected text:</p>
<p class="text-green-500">{selection}</p>

<h2>{'<svelte:body'}</h2>
<svelte:body onclick={() => heresCato = !heresCato} />
<img class="transition-all duration-200 absolute { heresCato ? 'bottom-2 left-2 rotate-0' : 'bottom-6 -left-30 -rotate-30' }"
    alt="Cato Pog Moments" 
    src={cato} />
<p>click anywhere on {'<body>'} for Cato</p>

<h2>{'<svelte:head>'}</h2>
<svelte:head>
    {#if ramblerMode}
        <link rel="stylesheet" href="/rambler.css" />
    {/if}
</svelte:head>
<button onclick={() => ramblerMode = !ramblerMode}>
    Toggle Rambler Mode
</button>

<h2>{'<svelte:element'}</h2>
<select bind:value={selected}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>
<svelte:element this={selected}>
    I'm a <code>{`<${selected}>`}</code>
</svelte:element>

<h2>{'<svelte:boundary>'}</h2>
<svelte:boundary>
    <FlakyComponent />
    {#snippet failed(error,reset)}
        <p>well it bricked itself: {error.message}</p>
        <button onclick={reset}>Reset</button>
    {/snippet}
</svelte:boundary>