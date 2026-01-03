<script>
    // raw state
    import { scale } from './raw_state/utils.js';
    import { poll } from './raw_state/data.js';

    let data = $state.raw(poll());

    let w = $state(1);
    let h = $state(1);

    const min = $derived(Math.min(...data) - 5);
    const max = $derived(Math.max(...data) + 5);
    const x = $derived(scale([0, data.length], [0, w]));
    const y = $derived(scale([min, max], [h, 0]));

    const ticks = $derived.by(() => {
        const result = [];
        let n = 10 * Math.ceil(min / 10);

        while (n < max) {
            result.push(n);
            n += 10;
        }

        return result;
    });

    $effect(() => {
        const interval = setInterval(() => {
            data = poll();
        }, 200);
        return () => clearInterval(interval);
    });

    // reactive classes
    const maxSize = 200;

    class Box {
        #width = $state(0);
        #height = $state(0);
        area = $derived(this.#width * this.#height);

        constructor(width, height) {
            this.#width = width;
            this.#height = height;
        }


        get width() {
            return this.#width;
        }

        get height() {
            return this.#height;
        }

        set width(value) {
            this.#width = Math.max(0, Math.min(maxSize, value));
        }

        set height(value) {
            this.#height = Math.max(0, Math.min(maxSize, value));
        }

        embiggen(factor) {
            this.#width += factor;
            this.#height += factor;
        }
    }

    const box = new Box(100, 100);

    // reactive built-ins
    import { SvelteDate } from 'svelte/reactivity';
    let date = new SvelteDate();

    const pad = (n) => n < 10 ? `0${n}` : n;

    $effect(() => {
        const interval = setInterval(() => {
            date = new Date();
        }, 1000);
        return () => clearInterval(interval);
    });

    // stores
    import Counter from './counter/Counter.svelte';
</script>

<h1>1 - Advanced Reactivity</h1>

<h2>Raw State</h2>
<div class="w-full h-64 mt-4 p-4">
    <svg class="w-full h-full overflow-visible" width={w} height={h} bind:clientWidth={w} bind:clientHeight={h} style="border: 1px solid #ccc;">
        <line y1={h} x2={w} stroke="#000" />
        {#each ticks as tick}
            <g transform={`translate(0, ${y(tick)})`}>
                <line x2={w} stroke="#eee" />
                <text x={10}>{tick}</text>
            </g>
        {/each}
        <polyline points={
            data.map((d, i) => `${x(i)},${y(d)}`).join(' ')
        } fill="none" stroke="steelblue" stroke-width="2" />
        <text x={-10} y={-8} font-size="16" fill="#666">stonks 👨‍💼</text>
    </svg>
</div>

<h2>Reactive Classes</h2>
<label>
    <input type="range" min={0} max={maxSize} bind:value={box.width} />
    Width: {box.width}px
</label>

<label>
    <input type="range" min={0} max={maxSize} bind:value={box.height} />
    Height: {box.height}px
</label>

<div class=" flex items-center justify-center text-center  bg-blue-500 border border-gray-300" style="width: {box.width}px; height: {box.height}px">
    area: {box.area}px²
</div>

<h3>Reactive Built-ins</h3>
<p>The time is: {date.getHours()}:{pad(date.getMinutes())}:{pad(date.getSeconds())}</p>

<h2>Stores</h2>
<Counter />
<Counter />
<Counter />