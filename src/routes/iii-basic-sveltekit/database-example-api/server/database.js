import { error } from '@sveltejs/kit';

async function delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
}

const database = new Map();

export function getTodos(userid) {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}

	return Array.from(database.get(userid).values());
}

export async function createTodo({ userid, description }) {
	await delay();
	if(description.trim().length === 0) {
		error(422, {message: 'todo cannot be empty'});
	}

	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	const todos = database.get(userid);

	todos.forEach((todo) => {
		if (todo.description === description) {
			error(422, {message: 'A todo with the same description already exists'});
		}
	});

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	});

	return {
		id
	};
}

export function toggleTodo({ userid, id, done }) {
	const todos = database.get(userid);
	todos.get(id).done = done;
}

export function deleteTodo({ userid, id }) {
	const todos = database.get(userid);
	todos.delete(id);
}