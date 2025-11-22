<script lang="ts">
    //State
    let count = $state(0);

    function increment() {
        count += 1;
    }
    
    //Deep State
    let numbers = $state([1]);
    function addNumber() {
        numbers.push(numbers.length + 1);
    }

    //Derived State
    let total = $derived(() => {
        return numbers.reduce((t, n) => t + n, 0);
    });

    //Inspecting State
    $inspect(numbers, 'numbers').with(console.trace);

    //Effects
    let elapsed = $state(0);
    let interval = $state(1000);
    $effect(() => {
        const id = setInterval(() => {
            elapsed +=1;
        }, interval);

        return () => {
            clearInterval(id);
        }
    });

    //Universal Reactivity
    import Counter from './counter.svelte';
</script>

<h1>2 - Reactivity</h1>
<h2>State</h2>

<p>Count: clicked {count} time{count === 1 ? '' : 's'}</p>
<button onclick={increment} 
        aria-label="click to increase count by 1" 
        class="bg-blue-500 px-2 py-1 rounded-sm text-white">
    Increment
</button>

<h2>Deep State</h2>
<p>Numbers: {numbers.join(', ')}</p>
<button onclick={addNumber} 
        aria-label="click to add next number to the list" 
        class="bg-green-500 px-2 py-1 rounded-sm text-white">
    Add Number
</button>

<h2>Derived State</h2>
<p>Total of Numbers: {total()}</p>

<h2>Inspecting State</h2>
<p>Hint: check the console for traces of the numbers array changes.</p>

<h2>Effects</h2>
<div class="flex gap-2">
    <button onclick={() => interval /= 2} 
        aria-label="click to speed up the interval speed" 
        class="bg-purple-500 px-2 py-1 rounded-sm text-white">
        Speed Up Interval
    </button>
    <button onclick={() => interval *= 2} 
            aria-label="click to slow down the interval speed" 
            class="bg-purple-500 px-2 py-1 rounded-sm text-white">
        Slow Down Interval
    </button>
</div>
<p>Elapsed: {elapsed}</p>

<h2>Universal Reactivity</h2>
<Counter />
<Counter />
<Counter />
<p>All three counters share the same state!</p>
