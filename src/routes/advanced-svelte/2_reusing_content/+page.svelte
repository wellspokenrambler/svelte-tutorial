<script>
    import FilteredList from './filtered_list/FilteredList.svelte';
    import { colors }from './filtered_list/colors.js'
</script>

<h1>2 - Reusing Content</h1>
<h2> Snippet and render tags</h2>
<table class="border border-blue-500">
	<thead>
		<tr>
			<th class="border border-blue-500 p-2">emoji</th>
			<th class="border border-blue-500 p-2">description</th>
			<th class="border border-blue-500 p-2">unicode escape sequence</th>
			<th class="border border-blue-500 p-2">html entity</th>
		</tr>
	</thead>
	<tbody>
        {#snippet monkey(emoji,description)}
            <tr>
                <td class="border border-blue-500 p-2">{emoji}</td>
                <td class="border border-blue-500 p-2">{description}</td>
                <td class="border border-blue-500 p-2">\u{emoji.charCodeAt(0).toString(16)}\u{emoji.charCodeAt(1).toString(16)}</td>
                <td class="border border-blue-500 p-2">&amp#{emoji.codePointAt(0)}</td>
            </tr>
        {/snippet}

        {@render monkey('🙈', 'See-No-Evil' )}
        {@render monkey('🙉', 'Hear-No-Evil' )}
        {@render monkey('🙊', 'Speak-No-Evil' )}
	</tbody>
</table>

<h2>Passing Snippets to Components</h2>
<FilteredList 
    data={colors}
    field="name"
>
    <header class="flex gap-4 font-bold border-b border-blue-500 pb-2 mb-2">
        <span class="p-1 w-4"></span>
        <span class="p-1 w-1/5">name</span>
        <span class="p-1 w-1/5">hex</span>
        <span class="p-1 w-1/5">rgb</span>
        <span class="p-1 w-1/5">hsl</span>
    </header>

    {#snippet row(d)}
        <div class="flex gap-4 items-center">
            <span class="w-4 h-4 rounded-full border border-gray-300" style="background-color: {d.hex}"></span>
            <span class="p-1 w-1/5">{d.name}</span>
            <span class="p-1 w-1/5">{d.hex}</span>
            <span class="p-1 w-1/5">{d.rgb}</span>
            <span class="p-1 w-1/5">{d.hsl}</span>
        </div>
    {/snippet}
</FilteredList>
