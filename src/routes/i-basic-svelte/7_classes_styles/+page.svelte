
<script lang="ts">
    //Class Attribute and Style Directive
    let flipped = $state(false);

    //Component Styles
    import Box from './Box.svelte';

</script>

<h1>7 - Classes and Styles</h1>
<h2>The Class Attribute</h2>
<button class={["box",{flipped}]} onclick={() => flipped = !flipped}>
    {#if flipped}
        <span class="flipped">Back Side</span>
    {:else}
        <span>Front Side</span>
    {/if}
</button>

<h2>The Style Directive</h2>
<button style="transition: 0.6s" 
        style:transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onclick={() => flipped = !flipped}>
    {#if flipped}
        <span>Back Side</span>
    {:else}
        <span>Front Side</span>
    {/if}
</button>

<h2>Component Styles</h2>
<div class="boxes">
    <p>
    passing colour variable into component Box
    <br/>
    (note that this overrides the default burlywood colour set in Box.svelte)
    <br/>
    (also note that it overrides any styles set in the component styles below e.g. brown border on even boxes)
    </p>
    <Box />
    <Box />
    <Box --color="red" />
    <Box --color="blue"/>
    <Box --color="green" />
    <Box />
</div>
<style>
    /*Class Attribute*/
    .box {
        width: 150px;
        height: 150px;
        background-color: lightblue;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
        transition: transform 0.6s;
    }
    
    .flipped {
        transform: rotateY(180deg);
    }

    /*Component Styles*/
    .boxes {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        /*globally select every even child box and add a border*/
        :global(.box:nth-child(2n)) {
            border: 2px solid brown;
        }
    }
</style>