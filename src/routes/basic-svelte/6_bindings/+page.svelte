<script lang="ts">
    //Text Inputs
    let textInput = $state('');

    //numeric Inputs
    let a = $state(0); 
    let b = $state(0);

    //Checkbox Inputs
    let yes = $state(false);

    //Select Bindings
    let options = $state([
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'}
    ]);
    let selectedOption = $state('option1');

    //Group Inputs
    let scoops = $state(1);
    let flavours = $state([]);

    let flavourOptions = [
        'Vanilla',
        'Chocolate',
        'Strawberry',
        'Mint',
        'Cookie Dough'
    ];
</script>
<h1>6 - Bindings</h1>

<h2>Text Inputs</h2>
<input type="text" bind:value={textInput} placeholder="type something in here..."/>
<p>You typed: {textInput}</p>

<h2>Numeric Inputs</h2>
<label>
    <input type="number" bind:value={a} min="0" max="100" step="1"/>
    <input type="range" bind:value={a} min="0" max="100" step="1"/>
</label>

<label>
    <input type="number" bind:value={b} min="0" max="100" step="1"/>
    <input type="range" bind:value={b} min="0" max="100" step="1"/>
</label>

<h2>Checkbox Inputs</h2>
<label>
    <input type="checkbox" bind:checked={yes}/>
    <span>{yes ? 'Yes' : 'No'}</span>
</label>

<h2>Select Bindings</h2>
<p>selected: {selectedOption}</p>
<select bind:value={selectedOption}>
    {#each options as option}
        <option value={option.value}>{option.label}</option>
    {/each}
</select>

<h2>Group Inputs</h2>
<p>size: {scoops}</p>
{#each [1,2,3] as number}
    <label>
        <input type="radio" bind:group={scoops} value={number}/>
        <span>{number} scoop{number === 1 ? '' : 's'}</span>
    </label>
{/each}
<p>flavours: {flavours}</p>
{#each flavourOptions as flavour}
    <label>
        <input type="checkbox" bind:group={flavours} value={flavour}/>
        <span>{flavour}</span>
    </label>
{/each}

<h2>Select Multiple</h2>
<select multiple bind:value={flavours}>
    {#each flavourOptions as flavour}
        <option value={flavour}>{flavour}</option>
    {/each}
</select>

<h2>Textarea Inputs</h2>
<textarea bind:value={textInput} rows="4" cols="50" placeholder="type something in here..."></textarea>
<p>You typed: {textInput}</p>