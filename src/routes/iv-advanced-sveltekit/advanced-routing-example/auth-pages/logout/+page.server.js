import { redirect } from '@sveltejs/kit';

export const actions = {
    default: ({ cookies, url }) => {
        cookies.delete('loggedIn', { path: '/' });
        redirect(303, url.searchParams.get('redirectTo') ?? '/iv-advanced-sveltekit/advanced-routing-example/auth-pages');
    }
};