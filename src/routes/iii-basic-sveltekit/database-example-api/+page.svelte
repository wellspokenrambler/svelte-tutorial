<script>
	let { data } = $props();

    let error = $state('');
    let creating = $state(false);
</script>

<h1>Todos</h1>
<h2>(using API routes)</h2>

<label class="relative block mb-4">
    Add a todo:
    <input
        type="text"
        autocomplete="off"
        placeholder="write your todo here"
        onkeydown={async (e) => {
            if (e.key !== 'Enter') return;
            error = '';
            creating = true;

            const input = e.currentTarget;
            const description = input.value;
            
            const response = await fetch('./database-example-api/todo', {
                method: 'POST',
                body: JSON.stringify({ description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                error =  "Failed to add todo: " + errorResponse.message || 'An unknown error occurred';
                creating = false;
                return;
            }

            const { id } = await response.json();
            const todos = [...data.todos, { id, description }];

            data = { ...data, todos };

            input.value = '';
            error = '';
            creating = false;
        }}
    />
    {#if creating && !error}
        <div class="absolute -bottom-5 left-0 flex gap-2 items-center">
            <p class="text-xs text-gray-500">Saving...</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6 animate-spin stroke-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>
    {/if}
    {#if !creating && error && error.length > 0}
        <p class="text-xs text-red-500 absolute -bottom-4 left-0">{error}</p>
    {/if}
</label>

<ul class="todos">
    {#each data.todos as todo (todo.id)}
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onchange={async (e) => {
                        const done = e.currentTarget.checked;

                        await fetch(`./database-example-api/todo/${todo.id}`, {
                            method: 'PUT',
                            body: JSON.stringify({ done }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    }}
                />
                <span>{todo.description}</span>
                <button
                    onclick={async (e) => {
                        await fetch(`./database-example-api/todo/${todo.id}`, {
                            method: 'DELETE'
                        });

                        const todos = data.todos.filter((t) => t !== todo);

                        data = { ...data, todos };
                    }}
                >
                    Delete
                </button>
            </label>
        </li>
        {:else}
        <p class="text-gray-500">No todos yet!</p>
    {/each}
</ul>