import { fail } from '@sveltejs/kit';
import * as db from './server/database.js';

// Simulate a random delay to show the loading state
async function delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
}

export function load({ cookies }){
    let id = cookies.get('userid');
    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/' });
    }

    return {
        todos: db.getTodos(id)
    };
}

export const actions = {
    create: async ({ request, cookies }) => {
        await delay();

        const data = await request.formData();

        try {
            db.createTodo(cookies.get('userid'), data.get('description'));
        } catch (error) {
            return fail(422, { 
                description: data.get('description'),
                error: error.message 
            });
        }
    },
    delete: async ({ request, cookies }) => {
        await delay();

        const data = await request.formData();
        db.deleteTodo(cookies.get('userid'), data.get('todoid'));
    }
}