<script lang="ts">
    import TodoList from "./TodoList.svelte";

    const todos = $state([
        {id: 3, done: true, description: 'buy groceries'},
        {id: 4, done: false, description: 'feed animals'},
        {id: 5, done: false, description: 'learn Svelte'},
    ]);

    let uid = todos.length + 1;
    function add(e) {
        if (e.key === "Enter") {
            todos.push({
                id:uid++,
                done: false,
                description: e.currentTarget.value
            });
        }
    }
    function remove(todo) {
        const index = todos.indexOf(todo);
        todos.splice(index,1);
    }
</script>

<h1>5 - Advanced Transitions</h1>
<input placeholder="what to do?"  onkeydown={add}/>

<div class="flex gap-4">
    <div class="w-1/2 max-w-72">
        <h3>To Do</h3>
        <TodoList todos={todos.filter((t) => !t.done)} {remove} />
    </div>
    <div  class="w-1/2 max-w-72">
        <h3>Done</h3>
        <TodoList todos={todos.filter((t) => t.done)} {remove} />
    </div>
</div>