<script>
    import { flip } from 'svelte/animate';
    import { send, receive } from './transition.js';

    let { todos, remove } = $props();
</script>

<ul>
    {#each todos as todo (todo.id)}
        <li in:receive={{ key: todo.id }}
            out:send={{ key: todo.id }}
            animate:flip={{ duration: 300 }}>
            <label>
                <input type="checkbox" bind:checked={todo.done}/>
                <span>{todo.description}</span>
                <button class="text-red-500"
                    onclick={() => remove(todo)}
                    aria-label="remove">Remove</button>
            </label>
        </li>
    {/each}
</ul>