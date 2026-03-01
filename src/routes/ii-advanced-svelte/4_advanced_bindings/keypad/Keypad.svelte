<script>
    let { value=$bindable(''), onsubmit } = $props();

    const select = (num) => () => (value += num);
    const clear = () => (value = '');
</script>

<div class="max-w-72 grid grid-cols-3 grid-rows-4 gap-1 p-2 border border-gray-500">
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(1)}>1</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(2)}>2</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(3)}>3</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(4)}>4</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(5)}>5</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(6)}>6</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(7)}>7</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(8)}>8</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(9)}>9</button>
    <button class="border border-gray-500 bg-blue-200 p-1" disabled={!value} onclick={clear}>Clear</button>
    <button class="border border-gray-500 bg-blue-200 p-1" onclick={select(0)}>0</button>
    <button class="border border-gray-500 bg-blue-200 p-1" disabled={!value} onclick={onsubmit}>Submit</button>
</div>