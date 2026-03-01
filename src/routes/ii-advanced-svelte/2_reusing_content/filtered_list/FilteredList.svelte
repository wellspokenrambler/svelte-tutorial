<script>
    let { data, field, children, row } = $props();

    let search = $state('');

    let filtered = $derived.by(() => {
        if (search === '') return data;

        const regex = new RegExp(search, 'i');
        return data.filter((d) => regex.test(d[field]));

    });
</script>

<div class="w-full flex flex-col gap-4">
    <label>
        Filter: <input bind:value={search} placeholder="search for a colour" />
    </label>

    <div class="border-top border-blue-500 pt-2">
        {@render children() }
    </div>

    <div>
        {#each filtered as d}
            {@render row(d)}
        {/each}
    </div>
</div>