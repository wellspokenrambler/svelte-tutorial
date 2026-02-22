<script>
    import { flip } from 'svelte/animate';
    import { fly, slide } from 'svelte/transition';
    import { enhance } from '$app/forms';

    let { data, form } = $props();

    let creating = $state(false);
    let deleting = $state([]);
</script>

<h1>To-dos</h1>
<form id="add-a-to-do-form" 
        method="POST"
        action="?/create"
        class="relative mb-4"
        use:enhance={()=>{
            creating = true;
            return async ({update}) => {
                await update();
                creating = false;
            }
        }}>
    <label id="add-a-to-do-label">Add a to-do:</label>
    <input aria-labelledby="add-a-to-do-label"
            type="text"
            placeholder="write your todo here"
            name="description"
            autocomplete="off"
            required
            disabled={creating}/>
    <button type="submit">Add</button>
    {#if creating}
        <div class="absolute -bottom-5 left-0 flex gap-2 items-center">
            <p class="text-xs text-gray-500">Saving...</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6 animate-spin stroke-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>
    {/if}
    {#if form?.error && !creating}
        <p class="text-xs text-red-500 absolute -bottom-4 left-0">Error: {form.error}</p>
    {/if}
</form>




<ul>
    {#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
        <li in:fly={{ x: -20, duration: 200 }} out:fly={{ x: -20, duration: 200 }} animate:flip={{ duration: 300 }}>
            <form method="POST" 
                    action="?/delete"
                    use:enhance={()=>{
                        deleting = [...deleting, todo.id];
                        return async ({update}) => {
                            await update();
                            deleting = deleting.filter((id) => id !== todo.id);
                        }
                    }}>
                <input type="hidden" name="todoid" value={todo.id} />
                {todo.description} {todo.done ? '✅' : '❌'}
                <button type="submit">Delete</button>
            </form>
        </li>
    {/each}
</ul>