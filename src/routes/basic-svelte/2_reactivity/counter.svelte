<script>
    import { counter } from './shared.svelte.js';
</script>

<button onclick={() => counter.count += 1} class="bg-orange-500 px-2 py-1 rounded-sm text-white">
    clicks: {counter.count}
</button>