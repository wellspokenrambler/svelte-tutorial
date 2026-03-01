<script>
    let number = $state();

    async function roll() {
        const response = await fetch('./dice-roll-example/roll');
        number = await response.json();
    }
</script>

<h1>Dice Roll</h1>

<button class="w-20 h-20 bg-blue-800 text-white p-2 rounded-sm" onclick={roll}>Roll the die</button>

{#if number !== undefined}
    <p>You rolled a {number}!</p>
{/if}